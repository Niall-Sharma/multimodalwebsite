'use client'
import React from 'react'; 
import Image from "next/image";
import { motion as m } from 'framer-motion';
import Link from 'next/link';

export default function Page( {pageLink, pageName}:any ) {
    return(
        <>
            <header className="flex w-full items-center flex-wrap align-middle justify-center font-bold bg-center bg-cover min-h-[90vh] bg-fixed">
                <Image 
                width={1920}
                height={1080}
                src={"https://images7.alphacoders.com/901/901149.png"}
                alt="Bioshock Background"
                className="w-full h-full -z-10 fixed"
                />
            </header>
            <m.main className="bg-Theme-Colors-Charcoal min-h-screen py-10 text-white" >
                <div className="mt-20 mb-40">
                    <div className="mx-auto text-center flex justify-center mt-5">
                        <iframe 
                            src="https://www.youtube.com/embed/FqBj2IGg6Uw?si=tZD1dd_hKuLrdDr5"
                            allowFullScreen
                            width={"80%"}
                            height={"750px"}
                        />
                    </div>
                </div>
                <section className="mx-auto w-1/4">
                    <h1 className="font-bold uppercase text-6xl text-Theme-Colors-ElectricBlue text-center">Praised by fans</h1>
                    <ul className="flex-row flex flex-wrap gap-5 mx-auto text-center mt-10 text-white text-xl justify-center">
                        <li>
                            <p>2019 NAVGTR Award Winner: Control Precision </p>
                        </li>
                        <li>
                            <p>2018 The Game Awards Winner: Games for Impact</p>
                        </li>
                        <li>
                            <p>2019 BAFTA Game Awards Nominee: Best Game</p>
                        </li>
                        <li>
                            <p>2019 BAFTA Game Awards Nominee: Games Beyond Entertainment</p>
                        </li>
                        <li>
                            <p>2019 BAFTA Game Awards Nominee: Games Innovation</p>
                        </li>
                    </ul> {/* https://www.imdb.com/title/tt7903902/awards/ */}
                    
                    <Link 
                    href={"https://www.imdb.com/title/tt7903902/awards/ "}
                    className='text-center underline text-white'
                    >
                        <p>Information from IMDB</p>
                    </Link>
                </section>
                    <div className="text-center">
                    <hr className="w-1/2 mx-auto my-40" />
                        <m.section initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>
                            <h1 className="font-bold uppercase text-6xl text-Theme-Colors-ElectricBlue">Climb the mountain</h1>
                            <p className="mt-5 mb-20 text-xl text-wrap w-1/2 mx-auto">It'll require grit and determination for Celeste to climb this mountain. Battle her inner demons and summit the cliff.</p>
                            <Image
                                width={1920}
                                height={1080}
                                src={"https://www.superjumpmagazine.com/content/images/2023/11/celestemountain.jpg"}
                                alt=''
                                className='h-1/4 w-[120vh] mx-auto'
                                />
                             <Link
                            href={"https://www.celestegame.com"}>
                                <p className='text-center ml-5 mt-5'>Source: Celeste, developed by Maddy Makes Games, 2018. Screenshot. SuperJump Magazine.</p>
                            </Link>
                        </m.section>
                       
                        <m.section className='mt-60'
                                initial={{ opacity: 0}}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, ease: "linear"}}>                            
                            <h1 className="font-bold uppercase text-6xl text-Theme-Colors-ElectricBlue mb-20">Reach the summit</h1>
                            <m.div
                                className="scrolling-text-strip w-full h-full"
                                initial={{ opacity: 0}}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 2, ease: "linear"}}
                                >
                                    <div className='justify-start flex-row flex gap-5'>
                                            <Image 
                                                width={1920}
                                                height={1080}
                                                alt=""
                                                src={"https://www.celestegame.com/images/screenshots/00.png"}
                                                className="h-1/2 w-1/3"                                               

                                                />  
                                            <Image 
                                                width={1920}
                                                height={1080}
                                                alt=""
                                                src={"https://www.celestegame.com/images/screenshots/02.png"}
                                                className="h-1/2 w-1/3"                                               

                                                />  
                                            <Image 
                                                width={1920}
                                                height={1080}
                                                alt=""
                                                src={"https://www.celestegame.com/images/screenshots/03.png"}
                                                className="h-1/2 w-1/3"                                               
                                                />  

                                    </div>
                            </m.div>
                            <m.div
                                className="scrolling-text-strip w-full h-full mt-20"
                                initial={{ opacity: 0}}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 2, ease: "linear"}}
                                >
                                    <div className='justify-start flex-row flex gap-5'>
                                            <Image 
                                                width={1920}
                                                height={1080}
                                                alt=""
                                                src={"https://www.celestegame.com/images/screenshots/05.png"}
                                                className="h-1/2 w-1/3"                                               
                                                 />  
                                            <Image 
                                                width={1920}
                                                height={1080}
                                                alt=""
                                                src={"https://www.celestegame.com/images/screenshots/07.png"}
                                                className="h-1/2 w-1/3"                                               

                                                />  
                                            <Image 
                                                width={1920}
                                                height={1080}
                                                alt=""
                                                src={"https://www.celestegame.com/images/screenshots/08.png"}
                                                className="h-1/2 w-1/3"                                               

                                                />  
                                    </div>
                            </m.div>
                            <Link
                            href={"https://www.celestegame.com"}>
                                <p className='text-left ml-5 mt-5'>Source: Celeste, developed by Maddy Makes Games, 2018. Screenshot. CelesteGame.com, https://www.celestegame.com. Accessed 21 Oct. 2024. </p>
                            </Link>
                        </m.section>       
                        <section className="w-1/4 mx-auto mt-20">
                            <Link href={"https://www.celestegame.com"}
                            target="_blank"
                            >
                                <p className="p-5 mx-auto bg-transparent outline-2 outline-Theme-Colors-BetterBlue outline text-xl font-bold text-Theme-Colors-BetterBlue hover:text-white hover:bg-Theme-Colors-BetterBlue duration-200 hover:scale-125 ">
                                    Buy Now
                                </p> 
                            </Link>                   
                        </section>       
                    </div>
            </m.main>
        </>
    );
}
