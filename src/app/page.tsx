'use client'
import Image from "next/image";
import React from 'react'; 
import GameCard from "./components/gamecards"
import { url } from "inspector";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <m.div 
    initial={{opacity: 0}} 
    animate={{opacity: 100}}
    transition={{duration: 0.3,  ease: 'linear'}}
    >
      <header className="flex w-full items-center flex-wrap align-middle justify-center font-bold bg-center bg-cover min-h-[75vh] bg-fixed">
          <Image 
          width={1920}
          height={1080}
          src={"https://preview.redd.it/mdtsc6cx5d4c1.png?width=3440&format=png&auto=webp&s=5dcde5df9cf783ca87b756f03e047918039b5293"}
          alt="Cyberpunk 2077 background"
          className="w-full h-full opacity-55 -z-10 fixed"
          />
          <h1 className=" text-7xl text-white font-bold text-center opacity-100 absolute p-5 ">GENERIC VIDEOGAME COMPANY</h1>
      </header>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-Theme-Colors-Charcoal text-white">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
        </div>
        <h1 className="text-center mx-auto text-6xl mt-20 font-bold">Games</h1>
        <div className="gap-10 items-start justify-items-center align-middle flex-1  flex flex-row flex-grow">
          <GameCard pageLink="/games/detroit" pageName="Detroit: Become Human" imageLink="https://cdn1.epicgames.com/columbine/offer/DETROIT2-860x1148-a03ac8673f779b286dcccc83dbe75249.jpg" gameDeveloper="Quantic Dream"/>    
          <GameCard pageLink="/games/bioshock" pageName="Bioshock The Collection" imageLink="https://static.wikia.nocookie.net/bioshock/images/0/09/BIOSHOCK_THE_COLLECTION_BOX_ART.jpg/revision/latest?cb=20160701002243" gameDeveloper="Irrational Games (2K)" />    
          <GameCard pageLink="/games/celeste" pageName="Celeste" imageLink="https://upload.wikimedia.org/wikipedia/commons/0/0f/Celeste_box_art_full.png" gameDeveloper="Maddy Makes Games" />    
        </div>
        </main>
      </div>
    </m.div>
  );
}
