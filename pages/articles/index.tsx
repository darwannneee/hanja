import ArticlesFootage from "@/public/assets/img/ArticleFootage.png"
import localFont from "next/font/local";

const Peristiwa = localFont({ src: "../../app/fonts/Peristiwa.otf" });
const FuturaStdMedium = localFont({ src: "../../app/fonts/FuturaStdMedium.otf" });
const FuturaStdCondensedLight = localFont({ src: "../../app/fonts/FuturaStdCondensedLight.otf" });
const FuturaStdCondensedBold = localFont({ src: "../../app/fonts/FuturaStdCondensedBold.otf" });

// Import CSS
import "@/app/globals.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Articles() {
    return (
        <main className="bg-[#faf6e5]">
            <Navbar />
            
            <h1 className={`text-5xl md:text-5xl pt-28 ${Peristiwa.className} text-[#1b4d89] px-5 md:px-10`}>Saling Ngerti</h1>
            <div className="grid md:grid-cols-2 text-[#1b4d89] px-5 md:px-10 pt-1">
                <img src={ArticlesFootage.src} alt="" className="" />
                
                <div className="md:pl-8 text-center md:text-left pt-8 md:pt-0 px-5 md:px-10">
                    <h1 className={`text-5xl md:text-6xl ${FuturaStdCondensedBold.className}`}>TRIAL OPENING</h1>
                    <h1 className={`${FuturaStdCondensedLight.className} md:text-xl`}>27/08/2024, TANGERANG</h1>
                    
                    <div className="pt-10">
                        <h1 className={`${FuturaStdMedium.className} md:text-2xl`}>TANGERANG - The vibrant city of Tangerang has just gained a new gem for coffe enthusiasts and vintage lovers alike. Saling Ngerti, a contemporary coffe shop and roast-ery, has made its debut, transforming a charming old house into a modern classic-themed cafe that promises to enchant and delight <span>.... MORE</span></h1>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center text-center space-x-4 py-8">
                <div className="w-5 h-5 bg-zinc-200 rounded-full"></div>
                <div className="w-8 h-8 mb-5 bg-[#1b4d89] rounded-full"></div>
                <div className="w-5 h-5 bg-zinc-200 rounded-full"></div>
            </div>

            <Footer />
        </main>
    )
}