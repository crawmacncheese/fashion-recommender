import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as scrollLink } from 'react-scroll';

export default function Navbar() {
    // use state, initially set to false and is modified with viewport config
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed w-full px-4 py-2 text-[#FBF6F0] bg-[#333333] font-bold drop-shadow-md">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl ">
                    <scrollLink 
                    to="/"
                    smooth={true}
                    duration={500}
                    className="drop-shadow-2xl">
                        D'Éclat
                    </scrollLink>
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

                {/* Navbar code */}
                <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="lg:flex lg:space-x-4">
                        <li>
                            <scrollLink 
                            href="team"
                            smooth={true}
                            duration={500}>
                                TEAM
                            </scrollLink>
                        </li>
                        <li>
                            <scrollLink 
                            to="about"
                            smooth={true}
                            duration={500}
                            >
                                ABOUT
                            </scrollLink>
                        </li>
                        <li>
                            <scrollLink 
                            to="/research"
                            smooth={true}
                            duration={500}>
                                RESEARCH
                            </scrollLink>
                        </li>
                        <li>
                            <Link 
                            className="bg-[#333333] hover:bg-[#6A6A6A] text-[#FBF6F0] py-2 px-4 rounded-full"
                            to="/login"
                            smooth={true}
                            duration={500}>
                                LOGIN/SIGN-UP
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

