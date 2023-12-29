const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User.models");

let refreshTokens = [];

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_LIFE,
    });
}

exports.refreshTokens = async function (body) {
    const { refresh_token } = body;

    if (!refreshTokens.includes(refresh_token)) {
        return { success: false, message: 'No refresh token found' };
    }

    let accessToken = '';
    let error = false;
    jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) error = true;
        accessToken = generateAccessToken({ username: user });
    });
    if (error) {
        return { success: false, message: 'Invalid refresh token' };
    }
    return { success: true, accessToken };
};

exports.getUser = async function (body) {
    const { _id } = body;
    const result = await User.findById(_id);
    if (!result) {
        return { success: false, message: 'User not found', result: null };
    }
    return { success: true, message: 'User found', result };
};

exports.register = async function (body) {
    const { role, ...user } = body;

    if (!user.username || !user.password || !user.email) {
        return { success: false, message: 'Please fill all the fields' };
    }

    // Common registration checks
    if (user.password.length < process.env.PASSWORD_LENGTH) {
        return { success: false, message: 'Password must be at least 8 characters', result: null };
    }

    user.password = await bcrypt.hash(user.password, 10);

    // Role-specific information
    if (role === 'STUDENT') {
        if (!user.npm) {
            return { success: false, message: 'NPM is required for student registration' };
        }
    } else if (role === 'MERCHANT') {
        if (!user.storeName || !user.phoneNumber) {
            return { success: false, message: 'Store name and phone number are required for merchant registration', result: null };
        }
    } else {
        return { success: false, message: 'Invalid role specified', result: null };
    }

    const result = new User({
        ...user,
        role,
    });

    await result.save();

    return { success: true, message: 'User created successfully', result };
};

exports.login = async function (body) {
    const { email, password } = body;
    const user = await User.findOne({ email });
    if (!user) {
        return { success: false, message: 'User not found' };
    }

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
        return { success: false, message: 'Incorrect password' };
    }

    const accessToken = generateAccessToken({ username: user.username });
    const refreshToken = jwt.sign({ email: user.email }, process.env.REFRESH_TOKEN_SECRET);

    if (refreshTokens.length > process.env.REFRESH_TOKEN_LIMIT) {
        refreshTokens.shift();
    }
    refreshTokens.push(refreshToken);

    return { username: user.username, success: true, message: 'Login successful', accessToken, refreshToken };
};

exports.logout = async function (body) {
    const { refresh_token } = body;
    if (!refreshTokens.includes(refresh_token)) {
        return { success: false, message: 'No refresh token found' };
    }
    refreshTokens = refreshTokens.filter((token) => token !== refresh_token);
    return { success: true, message: 'Logout successful' };
};