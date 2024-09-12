"use client";
import { useState } from "react";
import { usePathname } from "next/navigation"; // This hook replaces `useRouter` in Next.js 13 for client-side routing
import HanjaLogo from "@/public/assets/img/Logo_Hanja.png";
import Image from "next/image";
import Link from "next/link"; // Import Link

// Import Font
import localFont from "next/font/local";
const FuturaStdCondensedBold = localFont({ src: "../../app/fonts/FuturaStdCondensedBold.otf" });
const FuturaStdCondensed = localFont({ src: "../../app/fonts/FuturaStdCondensed.otf" });

export default function Navbar() {
    const pathname = usePathname(); // Get the current path

    // State for controlling the burger menu
    const [isOpen, setIsOpen] = useState(false); // Correct, no need for 'any' here, because it infers boolean

    // Toggle function for the burger menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Check if a path is active
    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed w-full z-50 h-20 bg-[#faf6e5] flex justify-between items-center px-8 md:px-14 text-[#1b4d89]">
            {/* Left section (hidden on mobile) */}
            <div className="hidden md:flex flex-col">
                <h1 className={`${FuturaStdCondensedBold.className} text-2xl`}>PT. MULTI ANEKA CIPTA</h1>
                <h1 className={`${FuturaStdCondensed.className} text-md`}>ESTABLISHED SINCE 2023</h1>
            </div>

            {/* Logo in the center */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <Image src={HanjaLogo.src} alt="Hanja Group" width={80} height={80} />
            </div>

            {/* Navigation links (hidden on mobile, visible on desktop) */}
            <div className={`hidden md:flex space-x-10 ${FuturaStdCondensed.className} text-xl`}>
                <Link href="/about" className={`hover:text-[#1b4d89] ${isActive('/aboutus') ? 'border-b-2 border-[#1b4d89]' : ''}`}>
                    ABOUT US
                </Link>
                <Link href="/brands" className={`hover:text-[#1b4d89] ${isActive('/brands') ? 'border-b-2 border-[#1b4d89]' : ''}`}>
                    BRANDS
                </Link>
                <Link href="/articles" className={`hover:text-[#1b4d89] ${isActive('/articles') ? 'border-b-2 border-[#1b4d89]' : ''}`}>
                    ARTICLES
                </Link>
                <Link href="/contact" className={`hover:text-[#1b4d89] ${isActive('/contact') ? 'border-b-2 border-[#1b4d89]' : ''}`}>
                    CONTACT
                </Link>
            </div>

            {/* Burger menu for mobile */}
            <div className="md:hidden ml-auto">
                <button onClick={toggleMenu} className="focus:outline-none">
                    {/* Burger icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1b4d89]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Slide-in menu for mobile */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#faf6e5] text-[#1b4d89] p-6 transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <button onClick={toggleMenu} className="focus:outline-none absolute top-4 right-4">
                    {/* Close icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1b4d89]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Mobile menu links */}
                <nav className="flex flex-col space-y-4 mt-10">
                    <Link href="/about" className={`hover:text-[#1b4d89] ${isActive('/aboutus') ? 'border-b-2 border-[#1b4d89]' : ''}`}>
                        ABOUT US
                    </Link>
                    <Link href="/brands" className={`hover:text-[#1b4d89] ${isActive('/brands') ? 'border-b-2 border-[#1b4d89]' : ''}`}>
                        BRANDS
                    </Link>
                    <Link href="/articles" className={`hover:text-[#1b4d89] ${isActive('/articles') ? 'border-b-2 border-[#1b4d89]' : ''}`}>
                        ARTICLES
                    </Link>
                    <Link href="/contact" className={`hover:text-[#1b4d89] ${isActive('/contact') ? 'border-b-2 border-[#1b4d89]' : ''}`}>
                        CONTACT
                    </Link>
                </nav>
            </div>
        </nav>
    );
}
