import Link from "next/link";
import Image from "next/image";
import React from 'react'; 

export default function GameCard( {pageLink, pageName, gameDeveloper, imageLink}:any ) {
    return(
        <div className="group relative drop-shadow-xl break-all hover:scale-105 hover:ease-in-out transition-transform duration-500 w-1/3 flex-col flex-auto h-full">
            <Link href={pageLink} className="">
                    <Image 
                    src={imageLink} 
                    alt="game image" 
                    height={1920}
                    width={1080}
                    className="group-hover:brightness-50 hover:ease-in transition-all h-1/2"
                    />

                <div className="absolute top-0 h-full flex justify-center align-middle flex-wrap">
                        <div className= "relative h-1/2 top-1/3 text-center mx-auto transition-opacity duration-500 group-hover:opacity-100 opacity-0 justify-center">  
                                    <p className="relative text-4xl uppercase font-bold text-Theme-Colors-ElectricBlue break-normal text-center mx-auto text-wrap">
                                        {pageName}
                                    </p>
                        </div>
                        <div className= "relative h-1/2 text-center transition-opacity duration-500 group-hover:opacity-100 opacity-0 justify-center flex flex-grow  mr-auto ml-auto w-full">  
                            <div className=""> 
                                    <p className="text-3xl relative uppercase font-normal text-white break-normal mx-auto text-center">
                                        {gameDeveloper}
                                    </p>
                            </div>
                        </div>
                </div>  
            </Link>
        </div>
    );
}
