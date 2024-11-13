import Link from "next/link";
import NavButton from "./navbutton";
import { useRef } from "react";
import React from 'react'; 

// import resumePDF from "";
export default function Footer() {
    return(
        <>
            <hr className="mt-20" />
            <footer className="relative flex flex-wrap py-3 min-w-full p-20 min-h-[20vh] bg-Theme-Colors-Charcoal">
                    <ul className="flex flex-col lg:flex-row">
                    <h1>FOOTER TEXT</h1>
                    </ul>
            </footer>
        </>
    );
}
