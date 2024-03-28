import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as scrollLink } from 'react-scroll';

export default function Navbar() {
    // use state, initially set to false and is modified with tailwind
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="px-4 py-2 bg-[#FBF6F0] text-[#333333] font-bold">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">
                    <Link 
                    to="/">
                        D'Éclat
                    </Link>
                </h1>
                {/* code for hamburger if on smaller viewports */}
                <div className="text-3xl lg:hidden">
                    <button onClick={toggleMenu}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="lg:flex lg:space-x-4">
                        <li>
                            <Link 
                            to="/about">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to="/team">
                                TEAM
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to="/research">
                                RESEARCH
                            </Link>
                        </li>
                        <li>
                            <Link 
                            className="bg-[#333333] hover:bg-[#6A6A6A] text-[#FBF6F0] py-2 px-4 rounded-full"
                            to="/login">
                                LOGIN/SIGN-UP
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

