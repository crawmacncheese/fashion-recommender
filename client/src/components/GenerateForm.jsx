import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function LandingPage() {
    const navigate = useNavigate();

    const recommender = () => {
        navigate('/recommender');
    }
    

    return(
        <div className="min-h-full bg-gradient-to-r from-[#333333] to-[#FBF6F0]">
            <div className="pt-32 pb-0 pl-48 pr-8 grid-grid-cols-4">
                {/* first part of form */}
                <form className="bg-[#FBF6F0] rounded-3xl span-cols-3">
                    <p className="text-[#333333] flex pl-12 pt-8 font-bold text-4xl">
                        Welcome, user. How would you like 
                        assistance on
                        your outfit today...
                    </p>
                    <div id="generateButtons" className="py-12 grid grid-cols-4 justify-around">
                        {/*  */}
                        <button 
                        className="
                            bg-[#333333] 
                            px-3 
                            text-3xl 
                            font-bold 
                            text-[#FBF6F0] 
                            py-28 
                            mx-24
                            rounded-3xl
                            transform
                            transition duration-1000 
                            hover:scale-125
                            hover:bg-[#9C9892]
                            hover:text-[#333333]"
                            onClick={recommender}>
                        Make an outfit with recommended pieces
                        </button>
                        {/*  */}
                        <button 
                        className="
                            bg-[#333333] 
                            px-3 
                            text-3xl 
                            font-bold 
                            text-[#FBF6F0] 
                            py-32 
                            mx-24 
                            rounded-3xl
                            transform
                            transition duration-1000 
                            hover:scale-125
                            hover:bg-[#9C9892]
                            hover:text-[#333333]">
                        Make an outfit with my own pieces
                        </button>
                        {/*  */}
                        <button 
                        className="
                            bg-[#333333] 
                            px-3 
                            text-3xl 
                            font-bold 
                            text-[#FBF6F0] 
                            py-32 
                            mx-24
                            rounded-3xl
                            transform
                            transition duration-1000 
                            hover:scale-125
                            hover:bg-[#9C9892]
                            hover:text-[#333333]">
                        Look at my <br />“Saved Outfits”
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
