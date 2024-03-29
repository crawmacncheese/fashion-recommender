import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'

export default function Home() {

    return(
        <div className="h-screen bg-[#FBF6F0]">
            <div className="py-96 ml-9 drop-shadow-xl font-bold font-[Inter] ">
                <h1 className="flex text-8xl drop-shadow-2xl font-bold font-[Inter]">
                    D'Éclat
                </h1>
                <h2 className="flex relative ml-24 text-2xl drop-shadow-2xl">
                    Your Personalized Virtual Stylist
                </h2>
            </div>
        </div>
    );
}