import Navbar from "../../components/navbar";
import React from 'react'; 

import Image from "next/image";
export default function Page( {pageLink, pageName}:any ) {
    return(
        <>
            <Navbar />
            <header className="flex w-full items-center flex-wrap align-middle justify-center font-bold bg-center bg-cover min-h-[75vh] bg-fixed">
                <Image 
                width={1920}
                height={1080}
                src={"https://images6.alphacoders.com/920/thumb-1920-920991.jpg"}
                alt="Cyberpunk 2077 background"
                className="w-full h-full opacity-55 -z-10 fixed"
                />
            </header>
            <main className="bg-Theme-Colors-Charcoal min-h-screen py-10">
                <div className="mt-20 mb-40">
                    <h1 className="text-3xl font-bold mt-20 text-center">Trailer</h1>
                    <div className="mx-auto text-center flex justify-center mt-5">
                        <iframe 
                            src="https://www.youtube.com/embed/8a-EObAhYrg?si=pdBfdG5t2rusEoAJ"
                            allowFullScreen
                            width={"65%"}
                            height={"500px"}
                        />
                    </div>
                </div>
                <div className="h-1/4 w-1/2 text-center mx-auto">
                        <Image 
                            width={1920}
                            height={1080}
                            alt="3 androids phasing"
                            src={"https://steamuserimages-a.akamaihd.net/ugc/921430377870915819/DAB6165E156CE60182BDE85E44AE716518431210/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"}
                        />
                    </div>
                    <div className="text-center">
                        <section>
                            <p className="text-2xl mt-10 text-center mb-10">A narrative adventure where the player follows three androids as they navigate a distopian society.</p>
                            <hr className="w-1/2 mx-auto my-40" />
                            <h1 className="font-bold uppercase text-6xl text-Theme-Colors-ElectricBlue">Choices Matter</h1>
                            <p className="mt-5 mb-20 text-xl text-wrap w-1/2 mx-auto">The player is faced with many choices throughout the game. Each choice effects each character and the world around them, leading to vastly different endings</p>
                            <Image 
                                width={1920}
                                height={1080}
                                alt="Connor picking between 2 choices"
                                src={"https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Detroit-Become-Human-Choices.jpg"}
                                className="h-1/4 w-[150vh] mx-auto"
                            />  
                        </section>    
                        <section>
                            <hr className="w-1/2 mx-auto my-40" />
                            <h1 className="font-bold uppercase text-6xl text-Theme-Colors-ElectricBlue">Conform or Rebel?</h1>
                            <p className="mt-5 mb-20 text-xl text-wrap w-1/2 mx-auto">Will you lead a revolution? Will you conform to the world around you? The player can follow their ethics and create a world that agrees to them</p>
                        </section>              
                    </div>
            </main>
        </>
    );
}
