import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CoverBg from "../img/kantek-2.jpg";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const LoginPage = () => {
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    //const [message, setMessage] = useState('');
    //const [accessToken, setAccessToken] = useState('');
    //const [refreshToken, setRefreshToken] = useState('');
    //const navigate = useNavigate();

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{ user }, dispatch] = useStateValue();
    const [isMenu, setIsMenu] = useState(false);

    /*
    const login = async () => {
        try {
          const response = await fetch('http://your-backend-api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
    
          const result = await response.json();
    
          if (result.success) {
            setMessage(result.message);
            setAccessToken(result.accessToken);
            setRefreshToken(result.refreshToken);
          } else {
            setMessage(result.message);
          }
          navigate('/home');
        } catch (error) {
          console.error('Login error:', error);
        }
      };
    */
    const login = async () => {
        if (!user) {
          const {
            user: { refreshToken, providerData },
          } = await signInWithPopup(firebaseAuth, provider);
          dispatch({
            type: actionType.SET_USER,
            user: providerData[0],
          });
          localStorage.setItem("user", JSON.stringify(providerData[0]));
        } else {
          setIsMenu(!isMenu);
        }
    };

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-screen object-cover" src={CoverBg} alt="login-bg" />
            </div>
            <div className="bg-gray-100 flex flex-col justify-center">
                <form className="max-w-[480px] w-full mx-auto p-8 px-8">
                    <h2 className="text-4xl text-black font-bold text-center py-5">Login</h2>
                    <div className="flex flex-col text-gray-500 py-3">
                        <label>Email</label>
                        <input className="rounded-lg bg-gray-100 mt-2 p-2 outline outline-1 outline-gray-300 focus:outline-2" type="text" />
                    </div>
                    <div className="flex flex-col text-gray-500 py-3">
                        <label>Password</label>
                        <input className="rounded-lg bg-gray-100 mt-2 p-2 outline outline-1 outline-gray-300 focus:outline-2" type="password" />
                    </div>
                    <div className="flex justify-between text-gray-500 py-3">
                        <p className="flex items-center"><input className="mr-2" type="checkbox"/> Remember me</p>
                        <p>Forgot Password</p>
                    </div>
                    <button className="w-full my-5 py-2 bg-amber-600 shadow-lg hover:bg-amber-700 text-white font-semibold rounded">
                      <Link to="/home">Login</Link>
                    </button>
                    <div className="flex justify-center text-gray-600 py-2">
                        <p>or sign in with</p>
                    </div>
                    <button class="w-full my-5 py-2 bg-gray-100 shadow-lg hover:bg-gray-200 text-white font-semibold rounded" onclick={login}>
                        <div className="flex justify-center text-gray-600 py-2">
                            <FcGoogle size={25}/>
                            <p className="ml-2"> Continue with Google</p>
                        </div>
                    </button>
                    <div className="flex justify-center text-gray-600 py-2">
                        <p>Don't have an account?&nbsp;</p><Link to="/register" className="text-amber-600">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;