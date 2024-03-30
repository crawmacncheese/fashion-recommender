// Navbar code

import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed w-full px-4 py-2 text-[#FBF6F0] bg-[#333333] font-bold drop-shadow-md z-50">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl ">
                    <Link 
                    to="/"
                    smooth={true}
                    duration={500}
                    className="drop-shadow-2xl"
                    onClick={toggleMenu}>
                        D'Éclat
                    </Link>
                </h1>

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
                            to="team"
                            smooth={true}
                            duration={500}
                            onClick={toggleMenu}
                            className="cursor-pointer">
                                TEAM
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to="about"
                            smooth={true}
                            duration={500}
                            onClick={toggleMenu}
                            className="cursor-pointer"
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to="research"
                            smooth={true}
                            duration={500}
                            onClick={toggleMenu}
                            className="cursor-pointer">
                                RESEARCH
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
