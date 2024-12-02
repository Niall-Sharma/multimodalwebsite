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
                src={"https://cdn2.unrealengine.com/egs-bioshockthecollection-massmediagames-g1c-00-1920x1080-4269d4245e1e.jpg?resize=1&w=1920&h=1080&quality=medium"}
                alt="Bioshock Background"
                className="w-full h-full -z-10 fixed"
                />
            </header>
            <m.main className="bg-Theme-Colors-Charcoal min-h-screen py-10 text-white" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: .5}}>
                <div className="mt-20 mb-40">
                    <div className="mx-auto text-center flex justify-center mt-5">
                        <iframe 
                            src="https://www.youtube.com/embed/gvtZVzQe8GY?si=MBAMYTNd_MpkG6no"
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
                            <p>2007 BAFTA: Won Best Game </p>
                        </li>
                        <li>
                            <p>2008 Interactive Achievement: Won Outstanding Achievement in Original Music Composition</p>
                        </li>
                        <li>
                            <p>2008 Interactive Achievement: Won Outstanding Achievement in Art Direction</p>
                        </li>
                        <li>
                            <p> 2007 Best of E3: Won Best Action/Adventure Game</p>
                        </li>
                        <li>
                            <p> 2008 Game Developers Choice Awards: Won Best Wriing</p>
                        </li>
                        <li>
                            <p> 2008 Game Developers Choice Awards: Won Best Visual Arts</p>
                        </li>
                        <li>
                            <p> 2008 NAVGTR: Won Game of the Year</p>
                        </li>
                        <li>
                            <p> 2007 Spike Video Game Awards: Won Best Xbox 360 Game</p>
                        </li>
                        <li>
                            <p> And nominated for much more...</p>
                        </li>
                    </ul> {/* https://www.imdb.com/title/tt1094581/awards/ */}
                    <Link 
                    href={"https://www.imdb.com/title/tt1094581/awards/  "}
                    className='text-center underline text-white'
                    >
                        <p>Information from IMDB</p>
                    </Link>
                </section>
                <hr className="w-1/2 mx-auto my-40" />
                    <div className=" w-full  h-full min-h-screen relative mx-auto">
                        <div className="text-6xl text-center  text-Theme-Colors-ElectricBlue uppercase font-bold absolute h-full p-20  w-1/2 top-1/2">
                            <p className="relative p-5 bg-Theme-Colors-Charcoal shadow-md rounded-lg bg-opacity-80">Rapture: An Underwater Paradise.</p>
                        </div>
                        <Image 
                            width={1920}
                            height={1080}
                            alt="Outside view of Rapture"
                            src={"https://i.redd.it/46cnws216sub1.png"}
                            className="mx-auto"
                        />
                    </div>
                    <div className=" w-full  h-full min-h-screen relative">
                        <div className="text-6xl text-center  text-Theme-Colors-ElectricBlue uppercase font-bold absolute h-full p-20  w-1/2 top-1/2">
                            <p className="relative p-5 bg-Theme-Colors-Charcoal shadow-md rounded-lg bg-opacity-80">At least on the surface...</p>
                        </div>                        <Image 
                                width={1920}
                                height={1080}
                                alt="Inside Rapture"
                                src={"https://bloximages.newyork1.vip.townnews.com/dailytoreador.com/content/tncms/assets/v3/editorial/3/99/399d91e8-f986-11e6-b3da-933732682285/58af6eff256e5.image.png?resize=1396%2C785"}
                                className="mx-auto"
                                />
                    </div>
                    <div className='w-3/4'>
                        <p className='mb-4'>Figure 1. BioShock, developed by 2K Boston, 2K Games, 2007. Screenshot. Reddit, https://i.redd.it/46cnws216sub1.png. Accessed 21 Oct. 2024.</p>
                        <p>Figure 2. BioShock, developed by 2K Boston, 2K Games, 2007. Screenshot. Daily Toreador, https://bloximages.newyork1.vip.townnews.com/dailytoreador.com/content/tncms/assets/v3/editorial/3/99/399d91e8-f986-11e6-b3da-933732682285/58af6eff256e5.image.png. Accessed 21 Oct. 2024.</p>
                    </div>
                    <div className="text-center">
                    <hr className="w-1/2 mx-auto my-40" />
                        <m.section initial={{transform: "translateX(-200px)", opacity: 0}} whileInView={{transform:"none", opacity: 1}} transition={{duration: 1}}>
                            <h1 className="font-bold uppercase text-6xl text-Theme-Colors-ElectricBlue">Survive the decrepit city</h1>
                            <p className="mt-5 mb-20 text-xl text-wrap w-1/2 mx-auto">A once bustling city turned grim, Rapture is home to many mysteries and secrets for the player to discover</p>
                            <div>
                                <Image 
                                    width={1920}
                                    height={1080}
                                    alt=""
                                    src={"https://preview.redd.it/65qjatgwt1771.jpg?width=640&crop=smart&auto=webp&s=da35ad540703aeff673e712595390b073a90c054"}
                                    className="h-1/4 w-[120vh] mx-auto"
                                />  
                                <p>Source: BioShock, developed by 2K Boston, 2K Games, 2007. Reddit, https://preview.redd.it/65qjatgwt1771.jpg. Accessed 21 Oct. 2024.                                </p>
                            </div>

                        </m.section>    
                        <hr className="w-1/2 mx-auto my-40" />
                        <m.section initial={{transform: "translateX(200px)", opacity: 0}} whileInView={{transform:"none", opacity: 1}} transition={{duration: 1}}>
                            <h1 className="font-bold uppercase text-6xl text-Theme-Colors-ElectricBlue">Save or Destroy?</h1>
                            <p className="mt-5 mb-20 text-xl text-wrap w-1/2 mx-auto">There are victims in this city. Will you save them? Or will you use them for your own gain?</p>
                            <div>
                                <Image 
                                    width={200}
                                    height={139}
                                    alt="Connor picking between 2 choices"
                                    src={"https://media.tenor.com/X27J7JSgawUAAAAM/jealous.gif"}
                                    className="h-1/4 w-[40vh] mx-auto"
                                />  
                                <p>Source: BioShock, developed by 2K Boston, 2K Games, 2007. Reddit, https://i.redd.it/46cnws216sub1.png. Accessed 21 Oct. 2024.</p>
                            </div>
                        </m.section>    
                        <section className="w-1/4 mx-auto mt-20">
                            <Link href={"https://2k.com/en-US/game/bioshock-the-collection/"}
                            target="_blank"
                            >
                                <p className="p-5 mx-auto    bg-transparent outline-2 outline-Theme-Colors-BetterBlue outline text-xl font-bold text-Theme-Colors-BetterBlue hover:text-white hover:bg-Theme-Colors-BetterBlue duration-200 hover:scale-125 ">
                                    Buy Now
                                </p> 
                            </Link>                   
                        </section>       
                    </div>
            </m.main>
        </>
    );
}
