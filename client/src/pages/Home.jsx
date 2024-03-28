import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'

export default function Home() {

    return(
        <div>
            <Navbar />
            <div className="py-96 ml-9 font-bold font-[Inter] ">
                <h1 className="flex text-8xl font-bold font-[Inter]">
                    D'Éclat
                </h1>
                <h2 className="flex relative ml-24 text-2xl ">
                    Your Personalized Virtual Stylist
                </h2>
            </div>
        </div>
    );
}