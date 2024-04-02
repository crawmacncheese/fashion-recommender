import React from 'react'

// components
import VideoBackground from '../components/VideoBackground.jsx'

export default function Home() {
    // no functionality is needed here
    return(
        <div className="h-screen w-full" id="home">
            <div className="relative">
                <VideoBackground />
            </div>
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