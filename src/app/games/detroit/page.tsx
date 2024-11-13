'use client'
import React from 'react'; 

import Image from "next/image";
import Link from "next/link";
import { motion as m } from 'framer-motion';

export default function Page( {pageLink, pageName}:any ) {
    return(
        <m.div>
            <header className="flex w-full items-center flex-wrap align-middle justify-center font-bold bg-center bg-cover min-h-[90vh] bg-fixed">
                <Image 
                width={1920}
                height={1080}
                src={"https://images6.alphacoders.com/920/thumb-1920-920991.jpg"}
                alt="Detroit Become Human Background"
                className="w-full h-full -z-10 fixed"
                />
            </header>
            <m.main className="bg-Theme-Colors-Charcoal min-h-screen py-10" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: .5}}>
                <div className="mt-20 mb-40">
                    <h1 className="text-3xl font-bold mt-20 text-center text-Theme-Colors-ElectricBlue">Trailer</h1>
                    <div className="mx-auto text-center flex justify-center mt-5">
                        <iframe 
                            src="https://www.youtube.com/embed/8a-EObAhYrg?si=pdBfdG5t2rusEoAJ"
                            allowFullScreen
                            width={"80%"}
                            height={"750px"}
                        />
                    </div>
                </div>
                <m.section className='w-1/2 mx-auto' initial={{opacity: 0}} whileInView={{opacity:1}}>
                    <h1 className="font-bold uppercase text-6xl text-Theme-Colors-ElectricBlue text-center">Praised by fans</h1>
                    <ul className="flex-row flex flex-wrap gap-5 mx-auto text-center mt-10 text-white text-xl justify-center">
                        <li>
                            <p>2019 Italian Game Awards: Best Narrative </p>
                        </li>
                        <li>
                            <p>2019 Geeks D&apos;Ouro: Best Playstation Videogame</p>
                        </li>
                        <li>
                            <p> 2019 BAFTA Nominee: Artistic Achievement</p>
                        </li>
                        <li>
                            <p> 2019 BAFTA Nominee: Audio Achievement</p>
                        </li>
                        <li>
                            <p> 2018 Game Awards Nominee: Best Game Direction</p>
                        </li>
                        <li>
                            <p> 2018 Game Awards Nominee: Best Narrative</p>
                        </li>
                    </ul> {/* https://www.imdb.com/title/tt5158314/awards/ */}
                </m.section>
                <hr className="w-0 mx-auto my-20" /> 
                <div className="h-1/4 w-1/2 text-center mx-auto">
                    <p className="text-3xl mt-10 text-center mb-10 font-bold">In the end, what&apos;s the difference between a human and an android?</p>
                        <Image 
                            width={1920}
                            height={1080}
                            alt="3 androids phasing"
                            src={"https://steamuserimages-a.akamaihd.net/ugc/921430377870915819/DAB6165E156CE60182BDE85E44AE716518431210/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"}
                        />
                    </div>
                    <div className="text-center">
                    <hr className="w-1/2 mx-auto my-40" />
                    <m.section initial={{transform: "translateX(-200px)", opacity: 0}} whileInView={{transform:"none", opacity: 1}} transition={{duration: 1}}>
                            <h1 className="font-bold uppercase text-6xl text-Theme-Colors-ElectricBlue">Choices Matter</h1>
                            <p className="mt-5 mb-20 text-xl text-wrap w-1/2 mx-auto">The player is faced with many choices throughout the game. Each choice effects each character and the world around them, leading to vastly different endings</p>
                            <Image 
                                width={1920}
                                height={1080}
                                alt="Connor picking between 2 choices"
                                src={"https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Detroit-Become-Human-Choices.jpg"}
                                className="h-1/4 w-[150vh] mx-auto"
                            />  
                        </m.section>  
                        <hr className="w-1/2 mx-auto my-40" />  
                        <m.section initial={{transform: "translateX(200px)", opacity: 0}} whileInView={{transform:"none", opacity: 1}} transition={{duration: 1}}>
                            <h1 className="font-bold uppercase text-6xl text-Theme-Colors-ElectricBlue">Conform or Rebel?</h1>
                            <p className="mt-5 mb-20 text-xl text-wrap w-1/2 mx-auto">Will you lead a revolution? Will you conform to the world around you? Shape the world as you see fit.</p>
                            <Image 
                                width={1920}
                                height={1080}
                                alt="Connor picking between 2 choices"
                                src={"https://miro.medium.com/v2/0*PUXeTeWWL3fmaykv.jpeg"}
                                className="h-1/4 w-[150vh] mx-auto"
                            />  
                        </m.section>   
                        <section className="w-1/4 mx-auto mt-20">
                            <Link href={"https://www.quanticdream.com/en/detroit-become-human"}>
                                <p className="bg-Theme-Colors-BetterBlue p-5 mx-auto rounded-lg">
                                    Buy Now
                                </p> 
                            </Link>                   
                        </section>          
                    </div>
            </m.main>
        </m.div>
    );
}
