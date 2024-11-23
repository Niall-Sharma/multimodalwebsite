import Link from "next/link";
import NavButton from "./navbutton";
import { useRef } from "react";
import React from 'react'; 

// import resumePDF from "";
export default function Footer() {
    return(
        <>
            <footer className="relative flex flex-wrap py-3 min-w-full p-20 min-h-[20vh] bg-Theme-Colors-Charcoal text-white items-center justify-center">
                    <ul className="flex flex-col text-xl font-bold uppercase gap-5 mr-20">
                        <p className="font-normal no-underline">Made with -- React, Tailwind, NextJS</p>
                        <Link 
                        href={"https://github.com/Niall-Sharma/multimodalwebsite"}
                        target="_blank">
                            <p className="underline">Source Code Here</p>
                        </Link>

                    </ul>
                    <ul className="flex flex-row text-xl font-bold uppercase gap-5 end-0 ml-auto">
                        <Link
                         href={"/"}>
                            <h1 className="underline">Home</h1>
                        </Link>
                        <Link
                         href={"/worksCited"}>
                            <h1 className="underline">Works Cited</h1>
                        </Link>
                    </ul>

            </footer>
        </>
    );
}
