import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import HanjaGroup_SunsetFootage from "@/public/assets/img/HanjaGroup_SunsetFootage.png"
import HanjaGroup_SunsetCoffe from "@/public/assets/img/HanjaGroup_SunsetCoffe.png"

const FuturaStdCondensed = localFont({ src: "../../app/fonts/FuturaStdCondensed.otf" });
const FuturaStdLightOblique = localFont({ src: "../../app/fonts/FuturaStdLightOblique.otf" });
const Peristiwa = localFont({ src: "../../app/fonts/Peristiwa.otf" });
const FuturaStdMedium = localFont({ src: "../../app/fonts/FuturaStdMedium.otf" });
const FuturaStdCondensedLight = localFont({ src: "../../app/fonts/FuturaStdCondensedLight.otf" });
const FuturaStdCondensedBoldObl = localFont({ src: "../../app/fonts/FuturaStdCondensedBoldObl.otf" });
const FuturaStdBook = localFont({ src: "../../app/fonts/FuturaStdBook.otf" });
// Import CSS
import "@/app/globals.css"


// Import Logo Image
import Logo_BangCen from "@/public/assets/img/Logo_BangCen.png"
import Logo_SalingNgerti from "@/public/assets/img/Logo_SalingNgerti.png"
import Logo_Pasisi from "@/public/assets/img/Logo_Pasisi.png"
import Logo_Sandya from "@/public/assets/img/Logo_Sandya.png"
import Logo_Kayin from "@/public/assets/img/Logo_Kayin.png"
import localFont from "next/font/local";

export default function AboutUs() {
    return (
        <main className="bg-[#faf6e5]">
            <Navbar />
            <div className="pt-20">
                <div className="w-full h-64 relative">
                    {/* Gambar sebagai latar belakang */}
                    <img 
                        src={HanjaGroup_SunsetFootage.src} 
                        className="w-full h-full object-cover md:object-cover" 
                        alt="Ecoute Footage" 
                    />

                    {/* Teks di tengah-tengah */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className={`text-white text-center px-4 md:px-72 ${FuturaStdCondensed.className} text-xl md:text-3xl`}>
                            &quot;A multi sector enterprise with a distinctive Nusantara theme, offering both authentic experiences and adaptive solutions tailored for today's discerning wanderers.&quot;
                        </h1>
                    </div>
                </div>
            </div>


            <div className="text-center text-[#1b4d89] px-10 pt-10">
                <h1 className={`${FuturaStdLightOblique.className} text-lg`}>&quot;Immerse yourself in a rich tapestry of Nusantara cultures, each offering unique and captivaitng experiences.&quot;</h1>
            </div>


            <div className="grid md:grid-cols-2 pt-20 text-[#1b4d89]">
                <img src={HanjaGroup_SunsetCoffe.src} alt="" className="px-5 md:px-0" />
                
                <div className="md:pl-10 2xl:pl-2 pt-16 text-center md:text-left px-10 2xl:px-0articles
                 md:px0">
                    <h1 className={`text-5xl md:text-6xl ${Peristiwa.className}`}>Hanja Tales</h1>
                    
                    <div className="pt-3">
                        <h1 className={`${FuturaStdMedium.className} md:text-xl`}>(Haluan Senja)</h1>
                        <h1 className={`${FuturaStdCondensedLight.className} text-base md:text-lg md:pr-56`}>Ha.lu.an: direction; destination; previous or leading; the front part of the boat (ship); guide Sen.ja; time (day) half-dark after sunset</h1>
                    </div>

                    <div className="pt-5">
                        <h1 className={`${FuturaStdMedium.className} md:pr-20 md:text-xl`}>
                            As Indonesian culture gently fades with the setting sun of time, Hanja invites you to embark on a journey of rediscovery. Join us in exploring the rich beauty of Indonesian heritage and experience its revival as it begins to shine with renewed brilliance.
                        </h1>
                    </div>
                </div>
            </div>


            <div className={`bg-[#1b4d89] ${FuturaStdCondensedBoldObl.className} w-full py-12 text-center text-[#faf6e5] mt-20 flex items-center justify-center`}>
                <h1 className="text-center text-xl">The future is sculpted by the echoes of history, civilizations blossom through the threads of culture, <br /> and the sun ascends only after its descent.</h1>
            </div>



            {/* Vision and Mission */}
            <div className="grid md:grid-cols-2 text-[#1b4d89] pt-20 mx-10 md:mx-20 md:space-x-10">
                {/* Vision */}
                <div className="text-center">
                    <h1 className={`${Peristiwa.className} text-5xl`}>Vision</h1>

                    <div className={`w-full h-80 mt-5 bg-[#1b4d89] text-[#faf6e5] flex items-center justify-center px-8 ${FuturaStdMedium.className}`}>
                        <h1 className="text-2xl">To establish ourselves as a foremost multi-sector enterprise that consistently elevates Nusantara culture through dynamic and innovative adaption..</h1>
                    </div>
                </div>

                {/* Mission */}
                <div className="text-center pt-10 md:pt-0">
                    <h1 className={`${Peristiwa.className} text-5xl`}>Mission</h1>

                    <div className={`w-full h-80 ${FuturaStdMedium.className} bg-[#1b4d89] text-[#faf6e5] flex flex-col items-center justify-center px-8 mt-5 text-sm md:text-lg`}>
                        <h1>Expanding our business while upholding a multicultural Nusantara theme.</h1>
                        <h1 className="pt-2">Delivering deeply immersive and memorable cultural experiences to every customer.</h1>
                        <h1 className="pt-2">Showcasing the unique cultural heritage of regions from Sabang to Merauke through our brands.</h1>
                        <h1 className="pt-2">Enhancing the well-being and development of humans resources by fastering both professional skills and a strong nationalistic character.</h1>
                    </div>
                </div>
            </div>

            <div className={`pt-20 text-center text-[#1b4d89] mx-10 md:mx-20 ${FuturaStdBook.className}`}>
                <h1>PT. Multi Aneka Cipta (Hanja Group) is a dynamic multi-sector enterprise deeply rooted in the rich and authentic heritage of Nusantara culture, facilitaling the introduction of regional uniqueness across diverse areas. Committed to continuous adaption and growth, we operate in various sectors including dining, entertainment, retail, and services, while embbedding the essence of Nusatara into each of these fields.</h1>

                <h1 className="pt-6">Our adaptive approach allows us to steer our ventures towards ongiong expansion, ensuring both sustainable progress and long-term success. Throught our initiatives, PT Hanja Group is dedicated to preserving Indonesia's cultural legacy and implementing practices that educate the public about its diminishing aspects, By valuing the past, shaping the present, and envisioning a bright future, PT Hanja Group aims to benefit both its workforce and the wider community.</h1>
            </div>


            {/* Our Brands */}
            <div className="text-[#1b4d89] text-center pt-20 pb-10">
                <h1 className={`text-3xl font-bold mb-6 ${Peristiwa.className} text-5xl`}>Our Brands</h1>

                {/* List Brands */}
                <div className="grid md:grid-cols-5 gap-8 items-center justify-items-center">
                    <img src={Logo_BangCen.src} alt="Bang Cen" className="w-52 h-52 object-contain" />
                    <img src={Logo_SalingNgerti.src} alt="Saling Ngerti" className="w-52 h-52 object-contain" />
                    <img src={Logo_Pasisi.src} alt="Pasisi" className="w-52 h-52 object-contain" />
                    <img src={Logo_Sandya.src} alt="Sandya" className="w-52 h-52 object-contain" />
                    <img src={Logo_Kayin.src} alt="Kayin" className="w-52 h-52 object-contain" />
                </div>
            </div>

            <Footer />
        </main>
    )
}