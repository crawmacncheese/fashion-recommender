import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx'
import { useNavigate} from 'react-router-dom';

export default function Recommender() {
    let [counter, setCounter] = useState(0);
    const [choice1, setChoice1] = useState("https://i.pinimg.com/736x/04/23/16/04231648b58916383408127b1802ca91.jpg");
    const [choice2, setChoice2] = useState("https://i.pinimg.com/564x/84/05/f5/8405f55ae7e5239467cbb64881d5e62e.jpg");
    const [selected, setSelected] = useState(null);

    const array1 = ["1", "https://images.squarespace-cdn.com/content/v1/5c34764c297114ca20d6777b/1687830454020-J50V129WRUL8YOUK50N0/LOEWE_SS24_MW_SHOW_RUNWAY_LOOK_42_FRONT_RGB_CROPPED_2X3_42.jpg?format=1000w",
    "https://i.pinimg.com/736x/31/93/97/31939791806f751257577c1588b3a1ca.jpg",
    "https://i.pinimg.com/originals/f9/18/37/f91837a3c17839b2a16466db634051ac.jpg",
    "https://64.media.tumblr.com/c27ba370ef7e26351bc5a3848940e5bc/435e18b717af251c-eb/s1280x1920/04e06151fde258968460824ad4cfea7caac75bf5.jpg"]
    const array2 = ["1", "https://i.pinimg.com/736x/f8/50/70/f850702c2f4b1ff5ced0073eb6bf6a78.jpg",
    "https://assets.vogue.com/photos/5c40b2966130562e2fa0a308/master/w_1280%2Cc_limit/_ALE0012.jpg",
    "https://i0.wp.com/hypebeast.com/image/2023/09/jil-sander-spring-summer-2024-womenswear-menswear-milan-fashion-week-runway-20.png?",
    "https://www.harrods.com/BWStaticContent/50000/caa4389d-1b78-4d33-8a17-900ef000dfa5_d-stories-men-how-to-dress-around-your-fine-watch-double-image-portrait-2-jpg.jpg"]

    const navigate = useNavigate();

    const handleClick1 = () => {
        counter++;
        setCounter(counter);
        if(counter === 4) {
            navigate('/outfit');
        }
        setChoice1(array1[counter]);
        setChoice2(array2[counter]);
    }

    const handleClick2 = () => {

        counter++;
        setCounter(counter);
        if(counter === 4) {
            navigate('/outfit');
        }
        setChoice1(array1[counter]);
        setChoice2(array2[counter]);
    }
    
    return(
        <div className="min-h-full bg-gradient-to-r from-[#333333] to-[#FBF6F0]">
            <Navbar/>
            <div className="pt-32 pb-0 pl-48 pr-8 grid-grid-cols-4">
                <form className="bg-[#FBF6F0] rounded-3xl span-cols-3">
                    <p className="text-[#333333] flex pl-12 pt-8 font-bold text-4xl">
                        Click on the outfit that you prefer.
                    </p>
                    <div id="generateButtons" className="px-20 py-5 grid grid-cols-2 grid-rows-1 justify-around">
                        <div>
                            <img src={choice1} onClick={handleClick1} className='rounded-3xl'/>
                        </div>
                        <div>
                            <img src={choice2} onClick={handleClick2} className='rounded-3xl'/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
