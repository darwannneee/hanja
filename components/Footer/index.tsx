'use client'; // Client component to handle event

import localFont from "next/font/local";
import { FormEvent } from "react";

const FuturaStdCondensed = localFont({ src: "../../app/fonts/FuturaStdCondensed.otf" });
const FutureStdBook = localFont({ src: "../../app/fonts/FuturaStdBook.otf" });
const Peristiwa = localFont({ src: "../../app/fonts/Peristiwa.otf" });
const FuturaStdLight = localFont({ src: "../../app/fonts/FuturaStdLight.otf" });

export default function Footer() {

    async function onFormData(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Prevent page reload on form submission

        try {
            // Create FormData object and populate it with form data
            const formData = new FormData(event.currentTarget);

            // Get individual form field values using FormData.get()
            const name = formData.get('name');
            const phone = formData.get('phone');
            const email = formData.get('email');

            // Add the timestamp manually
            const timestamp = new Date().toISOString();
            formData.append('timestamp', timestamp);

            // Debugging - Print form data to verify
            console.log('Name:', name);
            console.log('Phone:', phone);
            console.log('Email:', email);
            console.log('Timestamp:', timestamp);

            // Send the form data to the API
            const response = await fetch('https://api.hanjagroup.com/api/inputData', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Error submitting form:', errorMessage);
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
                    <input 
                        type="text" 
                        name="name"  // Add the correct name attribute
                        className="border-[#faf6e5] border-2 bg-[rgb(27,77,137)] w-full max-w-md h-10 text-[#faf6e5] pl-2" 
                        placeholder="Name" 
                        required  // Mark as required to ensure it's filled
                    />
                    <input 
                        type="text" 
                        name="phone"  // Add the correct name attribute
                        className="border-[#faf6e5] border-2 bg-[rgb(27,77,137)] w-full max-w-md h-10 text-[#faf6e5] pl-2" 
                        placeholder="Phone Number" 
                        required  // Mark as required to ensure it's filled
                    />
                    <input 
                        type="email" 
                        name="email"  // Add the correct name attribute
                        className="border-[#faf6e5] border-2 bg-[rgb(27,77,137)] w-full max-w-md h-10 text-[#faf6e5] pl-2" 
                        placeholder="Email" 
                        required  // Mark as required to ensure it's filled
                    />
                    <input type="text" hidden />
                </div>

                {/* Button di tengah */}
                <div className="flex justify-center pt-6">
                    <button type="submit" className={`bg-[#faf6e5] text-[rgb(27,77,137)] w-48 h-10 text-center rounded-full ${FutureStdBook.className}`}>
                        Submit
                    </button>
                </div>
            </form>

            <div className={`text-center text-sm pt-8 ${FuturaStdLight.className}`}>
                <h1>WE ARE DEDICATED TO SAFEGUARD YOUR PERSONAL INFORMATION WHILE YOU EXPLORE OUR WEBSITE.</h1>
                <h1>IF YOU WISH TO OPT OUT ANY TIME, SIMPLY CLICK 'UNSUBSCRIBE' IN ANY EMAIL WE SEND YOU.</h1>
            </div>
        </footer>
    );
}
