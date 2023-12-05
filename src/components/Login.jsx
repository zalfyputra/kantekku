import React from "react";
import CoverBg from "../img/kantek-2.jpg";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
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
                    <div className="flex justify-center text-gray-500 py-3">
                        <p className="text-gray-600">I'm signing in as:</p>
                    </div>
                    <div className="flex items-center justify-center text-gray-500 pt-1 pb-3">
                        <input type="radio" name="account-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" defaultChecked/>
                        <label for="default-radio-1" className="ml-2 font-medium text-gray-600">Student</label>
                        <input type="radio" name="account-type" className="ml-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-radio-2" className="ml-2 font-medium text-gray-600">Merchant</label>
                    </div>
                    <div className="flex justify-between text-gray-500 py-3">
                        <p className="flex items-center"><input className="mr-2" type="checkbox"/> Remember me</p>
                        <p>Forgot Password</p>
                    </div>
                    <Link to="/home"><button className="w-full my-5 py-2 bg-amber-600 shadow-lg hover:bg-amber-700 text-white font-semibold rounded">Login</button></Link>
                    <div className="flex justify-center text-gray-600 py-2">
                        <p>or sign in with</p>
                    </div>
                    <button class="w-full my-5 py-2 bg-gray-100 shadow-lg hover:bg-gray-200 text-white font-semibold rounded">
                        <div className="flex justify-center text-gray-600 py-2">
                            <FcGoogle size={25}/>
                            <p className="ml-2">Continue with Google</p>
                        </div>
                    </button>
                    <div className="flex justify-center text-gray-600 py-2">
                        <p>Don't have an account?&nbsp;</p><Link to="/signup" className="text-amber-600">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;