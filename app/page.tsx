import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Import Image
import HanjaGroup_CoffeFootage from "@/public/assets/img/HanjaGroup_CoffeFootage.png"
import HanjaGroup_SunsetFootage from "@/public/assets/img/HanjaGroup_SunsetFootage.png"
import localFont from "next/font/local";

const Peristiwa = localFont({ src: "./fonts/Peristiwa.otf" });
const FuturaStdCondensed = localFont({ src: "./fonts/FuturaStdCondensed.otf" });

export default function Home() {
  return (
    <main className="bg-[#faf6e5]">
      <Navbar />

      <div className="pt-24">
        {/* Image */}
        <img 
            src={HanjaGroup_CoffeFootage.src} 
            className="w-full h-full object-contain px-8 md:px-14" 
            alt="Ecoute Footage" 
        />

        <div className="text-center text-[#1b4d89] pt-14">
          <h1 className={`${Peristiwa.className} text-4xl md:text-5xl`}>Rooted in Nusantara</h1>
          <h1 className={`${FuturaStdCondensed.className} text-base md:text-xl`}>WHERE AUTHENTIC MEETS ADAPTABILITY</h1>
        </div>

        <div className="relative w-full h-[40vh] md:h-[60vh] mt-20 md:mt-32">
          {/* Gambar sebagai latar belakang */}
          <img 
              src={HanjaGroup_SunsetFootage.src} 
              className="w-full h-full object-cover" 
              alt="Ecoute Footage" 
          />

          {/* Teks yang berada di tengah gambar */}
          <h1 className={`absolute inset-0 flex items-center justify-center text-sm md:text-xl text-white text-center px-4 ${FuturaStdCondensed.className} px-12 md:mx-36`}>
              HANJA GROUP SEAMLESSLY INTEGRATES THE RICH HERITAGE OF NUSANTARA WITH ADVANCED, ADAPTABLE SOLUTIONS, DELIVERING A BUSINESS EXPERIENCE THAT COMBINES TIMELESS AUTHENTICITY WITH CONTEMPORARY INNOVATION. OUR MULTI-SECTOR APPROACH REFLECTS ENDURING VALUES WHILE ADDRESSING THE EVOLVING DEMANDS OF THE MODERN MARKET.
          </h1>
      </div>
      </div>

      <Footer />
    </main>
  );
}
