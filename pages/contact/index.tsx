import localFont from "next/font/local";

const Peristiwa = localFont({ src: "../../app/fonts/Peristiwa.otf" });
const FuturaStdMedium = localFont({ src: "../../app/fonts/FuturaStdMedium.otf" });
const FuturaStdCondensedLight = localFont({ src: "../../app/fonts/FuturaStdCondensedLight.otf" });

// Import CSS
import "@/app/globals.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <main className="bg-[#faf6e5] text-center">
            <Navbar />

            <div className="pt-10 md:pt-24 2xl:pt-44 text-[#1b4d89]">
                <h1 className={`${Peristiwa.className} text-6xl pt-24`}>Let&apos;s Connect</h1>

                <div className="pt-10 md:pt-20 2xl:pt-32">
                    <h1 className={`${FuturaStdMedium.className} text-3xl`}>HANJA GROUP HEAD QUARTERS</h1>
                    <h1 className={`${FuturaStdCondensedLight.className} mx-14 md:mx-0 pt-2`}>Jl. BSD Raya Pusat, Ruko Vanya Lokaside Blok G5/1, Vanya Park, BSD, Kab. Tangerang, Provinsi Banten</h1>
                </div>

                <div className="py-10 md:py-20 2xl:py-32">
                    <h1 className={`${FuturaStdMedium.className} text-xl md:text-2xl mx-14 md:mx-0`}>+62811681611 | pt.mac.multianelacipta@gmail.com</h1>
                </div>
            </div>
            
            <Footer />
        </main>
    )
}