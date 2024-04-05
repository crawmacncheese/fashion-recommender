import React from 'react';

export default function Team() {
    return (
        <div className="h-fill bg-[#333333] text-[#FBF6F0] py-13" id="team">
            {/* team component */}
            <div className="py-56">
                <h1 className="flex items-center justify-center drop-shadow-2xl text-8xl font-bold font-[Inter]">
                    TEAM
                </h1>
            </div>
            <div className="grid grid-cols-2 font-bold">
                {/* bio 1 */}
                <div id="bios">
                    <p> 
                        My name is Zavier. I am currently a junior, rising senior, at NYU studying computer science
                        at CAS. A little about me, I was born and raised in the lower east side, growing up playing 
                        playing many sports such as baseball and basketball, where I went on to play collegiate
                        baseball. Currently, my current hobbies include photography, car maintenance, video games, 
                        reading about fashion, rock climbing, and snowboarding. 

                    </p>
                    <br />
                    <p>
                        On the academic side, I have experience with ReactJS, NodeJS, ExpressJS, MongoDB, Flask, 
                        C/C++, and other languages as well. I think I want to go into AI/ML research after I finish 
                        my undergradate studies. In other sections, you will find out the research we conducted on
                        designing and implementing machine learning models into D'Éclat.
                    </p>
                    <br />
                    <p>
                        One of my life goals is to build a house, but I want to be the architect behind it! I find a
                        lot of inspiration from Tadao Ando's work, and though I could never replicate it, I would love
                        to one day design a house comfortably for me to live in. That's all for now! You can find 
                        my contact information on <a href="http://github.com/zavierand" className="underline">my GitHub</a> account 
                        and in the contact me section! Hope to see you around!
                    </p>
                    <div className="py-12">
                        <iframe 
                        className="border-12px" 
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1Epht82szbZWr2?utm_source=generator&theme=0" 
                        width="100%" 
                        height="152" 
                        frameBorder="0" 
                        allowfullscreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">
                            Some of fav tunes over the last month or so (:
                        </iframe>
                    </div>
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
