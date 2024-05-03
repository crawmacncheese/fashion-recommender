import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx'
import { useLocation, useNavigate } from 'react-router-dom';
import datajson from '../components/data.json';
import Recommender, { choices } from './Recommender.jsx';

export default function Outfit() {
    let arraychoice = choices();

    let max = arraychoice[0];
    let maxIndex = 0;
    for (var i = 1; i < arraychoice.length; i++) {
        if (arraychoice[i] > max) {
            maxIndex = i;
            max = arraychoice[i];
        }
    }
    let style = datajson.avantgarde;
    
    if(maxIndex === 0) {
        style = datajson.streetwear;
    }
    if(maxIndex === 1) {
        style = datajson.techwear;
    }
    if(maxIndex === 2) {
        style = datajson.luxury;
    }
    if(maxIndex === 3) {
        style = datajson.minimal;
    }
    if(maxIndex === 4) {
        style = datajson.avantgarde;
    }

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
                        <a href={style.top[0].link}><img src={style.top[0].image} className='rounded-3xl'/></a>
                        <a href={style.jacket[0].link}><img src={style.jacket[0].image} className='rounded-3xl'/></a>
                        <a href={style.bottom[0].link}><img src={style.bottom[0].image} className='rounded-3xl'/></a>
                        <a href={style.shoes[0].link}><img src={style.shoes[0].image} className='rounded-3xl shoes'/></a>
                        {/* <img src={datajson.avantjacket[1].image} className='rounded-3xl'/>
                        <img src={datajson.avantjacket[1].image} className='rounded-3xl'/>
                        <img src={datajson.avantjacket[1].image} className='rounded-3xl'/> */}
                    </div>
                </form>
            </div>
        </div>
    )
}
