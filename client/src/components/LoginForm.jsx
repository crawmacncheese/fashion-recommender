import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

// images
import Image from '../media/img/form-img.jpeg';
import { FaRegUserCircle, FaLock } from "react-icons/fa";


export default function LoginForm(){
    return(
        <div id="loginForm" className="flex">
            {/* wrap form in div, since it will contain multiple parts */}
            {/* blur */}
            <div>
                <div id="margiela">

                </div>
            </div>

            {/* form */}
            <div id="login" className="bg-[#FBF6F0] rounded-lg">
                <h1 className="flex">LOGIN</h1>
                <form>
                    <div id="userInput" className="grid justify-center">
                        <div className="flex">
                            <FaRegUserCircle />
                            <input id="userNameInput" placeholder="Username" type="text" className="rounded-l" required/>
                        </div>
                        <div className="flex">
                            <FaLock />
                            <input id="password" placeholder="Password" type="password" className="rounded-l" required/>
                        </div>
                    </div>
                    <label>
                        <input type="checkbox" />
                        Remember me?
                    </label>
                    <div id="buttons"> 
                        <button type="button">LOGIN</button>
                        <br/>
                        <p>
                            Don't have an account?
                        </p>
                        <button type="button">CREATE AN ACCOUNT</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
