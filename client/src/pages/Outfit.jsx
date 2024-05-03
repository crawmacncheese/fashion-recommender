import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx'
import { useNavigate } from 'react-router-dom';
import datajson from '../components/data.json';

export default function Outfit() {
    return( 
        <div className="bg-gradient-to-r from-[#333333] to-[#FBF6F0] min-h-full">
            <Navbar/>
            <div className="pt-32 pb-0 pl-48 pr-8 grid-grid-cols-4">
                {/* first part of form */}
                <form className="bg-[#FBF6F0] rounded-3xl span-cols-3">
                    <p className="text-[#333333] flex pl-12 pt-8 font-bold text-4xl">
                        Here is your outfit of the day. Buy your new look now!
                    </p>
                    <div id="generateButtons" className="px-20 py-5 grid grid-cols-2 grid-rows-2 justify-around"
                    >
                        <a href={datajson.avantjacket[1].link}><img src={datajson.avantjacket[1].image} className='rounded-3xl'/></a>
                        <img src={datajson.avantjacket[1].image} className='rounded-3xl'/>
                        <img src={datajson.avantjacket[1].image} className='rounded-3xl'/>
                        <img src={datajson.avantjacket[1].image} className='rounded-3xl'/>
                    </div>
                </form>
            </div>
        </div>
    )
}
