const authServices = require('../services/Auth.services');

exports.refreshTokens = async function (req, res) {
    try {
        const result = await authServices.refreshTokens(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message, result: null });
    }
}

exports.getUser = async function (req, res) {
    try {
        const result = await authServices.getUser(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message, result: null });
    }
}

exports.register = async function (req, res) {
    try {
        const result = await authServices.register(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message, result: null });
    }
}

exports.login = async function login(req, res) {
    try {
        const result = await authServices.login(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message, result: null });
    }
}

exports.logout = async function (req, res) {
    try {
        const result = await authServices.logout(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message, result: null });
    }
}