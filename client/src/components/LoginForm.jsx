import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link, Route, Routes } from 'react-router-dom';

// images
import Image from '../media/img/form-img.jpeg';
import { FaRegUserCircle, FaLock } from "react-icons/fa";

export default function LoginForm() {
    const [login, setLogin] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
    };

    return (
        <div className="rounded-3xl overflow-hidden shadow-lg border border-[#FBF6F0]">
            <div className="grid grid-cols-2">
                {/* Image */}
                <div className="relative">
                    <img src={Image} className="object-cover w-full h-full" />
                </div>

                {/* Form */}
                <div className="relative bg-[#333333] rounded-r-3xl p-14 py-40">
                    <h1 className="text-left mb-20 text-[#FBF6F0] font-bold text-3xl">LOGIN</h1>
                    <form action="">
                        <div className="flex flex-col mb-6">
                            <div className="flex items-center">
                                <FaRegUserCircle className="mr-2" />
                                <input
                                    id="userNameInput"
                                    placeholder="Username"
                                    type="text"
                                    className="bg-transparent focus:outline-none border-b border-[#FBF6F0] text-[#FBF6F0]"
                                    required />
                            </div>
                        </div>
                        <div className="flex flex-col mb-6">
                            <div className="flex items-center">
                                <FaLock className="mr-2" />
                                <input
                                    id="password"
                                    placeholder="Password"
                                    type="password"
                                    className="bg-transparent focus:outline-none border-b border-[#FBF6F0] text-[#FBF6F0]"
                                    required />
                            </div>
                        </div>
                        <label className="flex items-center mb-6">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-[#FBF6F0]">Remember me?</span>
                        </label>
                        <div id="buttons">
                            <Link
                                to="/welcome"
                            >
                                <button 
                                    type="button" 
                                    className="bg-[#FBF6F0] text-[#333333] font-bold py-2 px-4 rounded-3xl">
                                    LOGIN
                                </button>
                            </Link>
                            <br />
                            <p className="text-[#FBF6F0]">
                                Don't have an account?
                            </p>
                            <button 
                                type="button" 
                                className="text-[#FBF6F0] underline">
                                CREATE AN ACCOUNT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
