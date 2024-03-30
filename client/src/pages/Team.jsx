import React from 'react';

export default function Team() {
    return (
        <div className="h-screen bg-[#333333] text-[#FBF6F0]" id="team">
            {/* team component */}
            <div className="py-56">
                <h1 className="flex items-center justify-center text-8xl drop-shadow-2xl font-bold font-[Inter]">
                    TEAM
                </h1>
            </div>
            <div className="grid grid-cols-2">
                {/* bio 1 */}
                <div id="bios">
                    <p>
                        My name is Zavier. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum 
                        curabitur vitae nunc sed velit dignissim sodales ut. Sit amet venenatis urna 
                        cursus eget nunc scelerisque viverra. Ac tincidunt vitae semper quis lectus.
                    </p>
                </div>
                {/* bio 2 */}
                <div>
                    <p>
                        My name is Alvin. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum 
                        curabitur vitae nunc sed velit dignissim sodales ut. Sit amet venenatis urna 
                        cursus eget nunc scelerisque viverra. Ac tincidunt vitae semper quis lectus.
                    </p>
                </div>
            </div>
        </div>
    );
}
