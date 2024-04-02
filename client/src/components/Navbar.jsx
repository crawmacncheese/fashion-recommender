import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
    // var to determine state of viewport 
    const [isOpen, setIsOpen] = useState(false);

    // destructured from react-router dom
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // function to handle routes - specifically login
    const handleLoginRoute = () => {
         navigate('/login');
    }

    return (
        <div className="fixed w-full px-4 py-2 text-[#FBF6F0] font-bold drop-shadow-md z-50">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">
                    <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        className="drop-shadow-2xl cursor-pointer"
                        onClick={toggleMenu}
                    >
                        D'Éclat
                    </ScrollLink>
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
                            />
                        </svg>
                    </button>
                </div>

                <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="lg:flex lg:space-x-4">
                        <li>
                            <ScrollLink
                                to="team"
                                smooth={true}
                                duration={500}
                                onClick={toggleMenu}
                                className="cursor-pointer hover:underline"
                            >
                                TEAM
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="concept"
                                smooth={true}
                                duration={500}
                                onClick={toggleMenu}
                                className="cursor-pointer hover:underline"
                            >
                                CONCEPT
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="research"
                                smooth={true}
                                duration={500}
                                onClick={toggleMenu}
                                className="cursor-pointer hover:underline"
                            >
                                RESEARCH
                            </ScrollLink>
                        </li>
                        <li>
                            <Link
                                className="bg-[#FBF6F0] hover:bg-[#6A6A6A] hover:text-[#FBF6F0] 
                                        text-[#333333] py-2 px-4 rounded-full cursor-pointer"
                                to="/login"
                                smooth={true}
                                duration={500}
                                onClick={handleLoginRoute}
                            >
                                LOGIN/SIGN-UP
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
