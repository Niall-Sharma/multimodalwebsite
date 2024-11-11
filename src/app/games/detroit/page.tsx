import Navbar from "../../components/navbar";
import React from 'react'; 

import Image from "next/image";
export default function Page( {pageLink, pageName}:any ) {
    return(
        <>
            <Navbar />
            <main className="bg-Theme-Colors-Charcoal min-h-screen py-10">
                <div className="grid grid-cols-2 p-20 gap-10">
                    <div className="h-1/2">
                        <Image 
                        src={"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222140/capsule_616x353.jpg?t=1667468479"} 
                        alt="game image" 
                        width={1920}
                        height={1080}
                        />
                    </div>
                    <div>
                        <h1 className="text-6xl text-center">Detroit: Become Human</h1>
                        <h1 className="text-4xl text-center">Quantic Dreams</h1>
                    </div>
                </div>
            </main>
        </>
    );
}
