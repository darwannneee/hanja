'use client'; // Tambahkan ini di bagian atas untuk menjadikan komponen ini Client Component

import localFont from "next/font/local";
import { FormEvent } from "react";

const FuturaStdCondensed = localFont({ src: "../../app/fonts/FuturaStdCondensed.otf" });
const FutureStdBook = localFont({ src: "../../app/fonts/FuturaStdBook.otf" });
const Peristiwa = localFont({ src: "../../app/fonts/Peristiwa.otf" });
const FuturaStdLight = localFont({ src: "../../app/fonts/FuturaStdLight.otf" });

export default function Footer() {

    async function onFormData(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Mencegah form melakukan reload halaman

        try {
            // Ambil data form
            const formData = new FormData(event.currentTarget);

            // Tambahkan timestamp ke form data
            const timestamp = new Date().toISOString(); // ISO string untuk timestamp yang jelas
            formData.append('timestamp', timestamp);

            // Kirim request ke API dengan form data
            const response = await fetch('https://api.hanjagroup.com/api/postData', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                console.error('Error submitting form:', response.statusText);
            } else {
                console.log('Form submitted successfully');
            }
        } catch (error) {
            console.log('Error input data : ', error);
        }
    }

    return (
        <footer className="bg-[rgb(27,77,137)] text-[#faf6e5] px-14 py-5 ">
            <div className="text-center pt-5">
                <h1 className={`${Peristiwa.className} text-5xl`}>Sail With Us</h1>
                <h1 className={`${FuturaStdCondensed.className} font-semibold text-sm md:text-lg pt-3 md:pt-2`}>REGISTER NOW TO STAY INFORMED ABOUT OUR EXCEPTIONAL DINING EXPERIENCES, EXCLUSIVE UPDATES, AND SPECIAL OFFERS</h1>
            </div>
            
            {/* Form Contact */}
            <form onSubmit={onFormData}>
                <div className={`pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center ${FutureStdBook.className}`}>
                    <input type="text" name="name" className="border-[#faf6e5] border-2 bg-[rgb(27,77,137)] w-full max-w-md h-10 text-[#faf6e5] pl-2" placeholder="Name" />
                    <input type="text" name="phone" className="border-[#faf6e5] border-2 bg-[rgb(27,77,137)] w-full max-w-md h-10 text-[#faf6e5] pl-2" placeholder="Phone Number" />
                    <input type="text" name="email" className="border-[#faf6e5] border-2 bg-[rgb(27,77,137)] w-full max-w-md h-10 text-[#faf6e5] pl-2" placeholder="Email" />
                    <input type="text" hidden />
                </div>

                {/* Button di tengah */}
                <div className="flex justify-center pt-6">
                    <button className={`bg-[#faf6e5] text-[rgb(27,77,137)] w-48 h-10 text-center rounded-full ${FutureStdBook.className}`}>
                        Submit
                    </button>
                </div>
            </form>

            <div className={`text-center text-sm pt-8 ${FuturaStdLight.className}`}>
                <h1>WE ARE DEDICATED TO SAFEGUARD YOUR PERSONAL INFORMATION WHILE YOU EXPLORE OUR WEBSITE.</h1>
                <h1>IF YOU WISH TO OPT OUT ANY TIME, SIMPLY CLICK &apos;UNSUBSCRIBE&apos; IN ANY EMAIL WE SEND YOU.</h1>
            </div>
        </footer>
    );
}
