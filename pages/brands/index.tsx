import Navbar from "@/components/Navbar";
import BG_Brands from "@/public/assets/img/Header_Brands.png"
import localFont from "next/font/local";
import BrandFootage from "@/public/assets/img/BrandFootage.png"
import MenuFootage from "@/public/assets/img/MenuFootage.png"
// Import CSS
import "@/app/globals.css"

// Import Image
import SalingNgerti from "@/public/assets/img/SalingNgerti.png"
import Footer from "@/components/Footer";

const FuturaStdCondensed = localFont({ src: "../../app/fonts/FuturaStdCondensed.otf" });
const Peristiwa = localFont({ src: "../../app/fonts/Peristiwa.otf" });
const FuturaStdMedium = localFont({ src: "../../app/fonts/FuturaStdMedium.otf" });
const FuturaStdCondensedLight = localFont({ src: "../../app/fonts/FuturaStdCondensedLight.otf" });

export default function  Brands() {
    return (
        <main className="bg-[#faf6e5]">
            <Navbar />
            <div className="pt-20">
                <div className="w-full h-[65vh] relative">
                    {/* Gambar sebagai latar belakang */}
                    <img 
                        src={BG_Brands.src} 
                        className="w-full h-full object-cover" 
                        alt="Ecoute Footage" 
                    />

                    {/* Image di tengah-tengah */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img src={SalingNgerti.src} className="w-96" alt="" />
                    </div>
                </div>
            </div>

            <div className={`text-center pt-14 text-[#1b4d89]`}>
                <h1 className={`${Peristiwa.className}  text-6xl`}>Saling Ngerti</h1>
                <h1 className={`${FuturaStdMedium.className} px-14 md:px-36 pt-5`}>Step into "Saling Ngerti", where the charm of a bygone era meets the vibrancy of modern Indonesian coffe culture. In our vintage-inspired cafe. every detail whispers stories of tradition while embracing today's style. Delight in our carefully roosted Indonesian beans, brewed to perfection by passionate baristas. Here, classic elegance dances with cantemporary comfort, offering a sip of heritage and a taste of innovation in every cup</h1>

                {/* Alamat */}
                <div className={`${FuturaStdCondensedLight.className} px-14 pt-8 text-base md:text-xl`}>
                    <h1>Jl. Rawa Buntu Utara Blok S No.11, Griya Loka, BSD</h1>
                    <h1>9AM - 10PM | +628111726437 | sang.ngerti@gmail.com | Instagram: saling.ngerti</h1>
                </div>
            </div>

            <div className="pt-10">
                    <img 
                        src={BrandFootage.src} 
                        className="w-full h-full object-cover" 
                        alt="Ecoute Footage" 
                    />
                    <div className="w-full h-full relative">
                    {/* Gambar sebagai latar belakang */}
                    <img 
                        src={MenuFootage.src} 
                        className="w-full h-full object-cover" 
                        alt="Ecoute Footage" 
                    />

                    {/* Image di tengah-tengah */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className={`text-white md:text-7xl ${Peristiwa.className}`}>Menu</h1>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}