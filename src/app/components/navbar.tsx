'use client'
import Link from "next/link";
import NavButton from "./navbutton";
import { useRef } from "react";
import React from 'react'; 

// import resumePDF from "";
export default function Navbar() {
    return(
        <>
            <nav className="relative md:absolute top-0 flex flex-wrap py-3 bg-transperant min-w-full bg-Theme-Colors-Charcoal z-10">
                    <ul className="flex flex-col lg:flex-row">
                        <NavButton pageLink="/" pageName="Home" />
                    </ul>
            </nav>
        
        
        
        </>
    );
}
