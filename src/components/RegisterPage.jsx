import React from "react";
import CoverBg from "../img/kantek-1.jpg";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="bg-gray-800 flex flex-col justify-center">
                <form className="max-w-[480px] w-full mx-auto bg-gray-800 p-8 px-8 rounded-lg">
                    <h2 className="text-4xl dark:text-white font-bold text-center py-3">Sign up</h2>
                    <div className="flex flex-col text-gray-300 py-3">
                        <label>Username</label>
                        <input className="rounded-lg bg-gray-100 text-gray-800 mt-2 p-2 focus:outline-none" type="text" />
                    </div>
                    <div className="flex flex-col text-gray-300 py-3">
                        <label>Email</label>
                        <input className="rounded-lg bg-gray-100 text-gray-800 mt-2 p-2 focus:outline-none" type="text" />
                    </div>
                    <div className="flex flex-col text-gray-300 py-3">
                        <label>Password</label>
                        <input className="rounded-lg bg-gray-100 text-gray-800 mt-2 p-2 focus:outline-none" type="password" />
                    </div>
                    <div className="flex justify-center text-gray-300 py-3">
                        <p>I'm signing up as:</p>
                    </div>
                    <div className="flex items-center justify-center text-gray-500 pt-1 pb-3">
                        <input type="radio" name="account-type" className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300" defaultChecked/>
                        <label for="default-radio-1" className="ml-2 font-medium text-gray-300">Student</label>
                        <input type="radio" name="account-type" className="ml-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                        <label for="default-radio-2" className="ml-2 font-medium text-gray-300">Merchant</label>
                    </div>
                    <Link to="/home"><button className="w-full my-5 py-2 bg-amber-600 shadow-lg hover:bg-amber-600 text-white font-semibold rounded">Sign up</button></Link>
                    <div className="flex justify-center text-gray-200 py-2">
                        <p>Already have an account?&nbsp;</p><Link to="/" className="text-amber-600"> Log in</Link>
                    </div>
                </form>
            </div>
            <div className="hidden sm:block">
                <img className="w-full h-screen object-cover" src={CoverBg} alt="login-bg" />
            </div>
        </div>
    );
};

export default RegisterPage;