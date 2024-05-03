import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx'
import { useNavigate} from 'react-router-dom';

export default function Recommender() {
    const [counter, setCounter] = useState(0);
    const [choices, setChoices] = useState(0);
    const [selected, setSelected] = useState(null);

    const navigate = useNavigate();

    const outfit = () => {
        navigate('/outfit');
    }

    const handleClick = (choiceID) => {


        setCounter(counter++);
        if(counter == 3) {
            navigate('/outfit');
        }
        const newChoices = newChoice();
        setChoices(newChoices);
    }

    const newChoice = () => {
        return [
            {},
            {}
        ]
    }
    
    return(
        <div className="min-h-full bg-gradient-to-r from-[#333333] to-[#FBF6F0]">
            <Navbar/>
            <div>
                {choices.map((choice) => (
                    <div key={choice.id}   onClick={()=> handleClick(choice.id)}>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
