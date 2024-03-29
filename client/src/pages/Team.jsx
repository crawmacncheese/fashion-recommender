import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'

export default function Team() {
    // we'll put our bios in the db so that way only we can
    // access it on the backend/server, more so for protection

    const [zavierData, setZavierData] = useState('');
    

    const [alvinData, setAlvinData] = useState('');

    return(
        <div className="h-screen bg-[#333333] text-[#FBF6F0]">
            <div>
                <h1
                className="font-bold text-8xl">
                    TEAM
                </h1>
            </div>
            {/* containt for our bios */}
            <div
            className="">
                {/* bio 1 */}
                <p>

                </p>

                {/* bio 2 */}
                <p>

                </p>
            </div>
        </div>
    );
}