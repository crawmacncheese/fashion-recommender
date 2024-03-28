import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'

export default function Team() {
    // we'll put our bios in the db so that way only we can
    // access it on the backend/server, more so for protection

    const [zavierData, setZavierData] = useState('');
    

    const [alvinData, setAlvinData] = useState('');

    return(
        <div>
            <Navbar />
        </div>
    );
}