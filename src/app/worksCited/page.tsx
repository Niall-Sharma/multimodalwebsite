import Image from "next/image";
import React from 'react'; 
import { url } from "inspector";
export default function Home() {
  return (
    <div>
      <header className="flex w-full items-center flex-wrap align-middle justify-center font-bold bg-center bg-cover min-h-[75vh] bg-fixed">
          <Image 
          width={1920}
          height={1080}
          src={"https://preview.redd.it/mdtsc6cx5d4c1.png?width=3440&format=png&auto=webp&s=5dcde5df9cf783ca87b756f03e047918039b5293"}
          alt="Cyberpunk 2077 background"
          className="w-full h-full opacity-55 -z-10 fixed"
          />
          <h1 className=" text-7xl text-white font-bold text-center opacity-100 absolute p-5 ">Works Cited</h1>
      </header>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-Theme-Colors-Charcoal">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <ul>
            <li>Main Page</li>
            <li>            
              <ul>
                <li>SOURCE</li>
              </ul>
            </li>
            <li>Detroit: Become Human Page</li>
            <li>            
              <ul>
                <li>SOURCE</li>
              </ul>
            </li>
            <li>Bioshock Page</li>
            <li>            
              <ul>
                <li>SOURCE</li>
              </ul>
            </li>
            <li>Celeste Page</li>
            <li>            
              <ul>
                <li>SOURCE</li>
              </ul>
            </li>
          </ul>
        </div>
        </main>
      </div>
    </div>
  );
}
