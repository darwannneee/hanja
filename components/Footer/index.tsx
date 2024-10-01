'use client'; // Client component to handle event

import localFont from "next/font/local";
import { useState, FormEvent } from "react";

const FuturaStdCondensed = localFont({ src: "../../app/fonts/FuturaStdCondensed.otf" });
const FutureStdBook = localFont({ src: "../../app/fonts/FuturaStdBook.otf" });
const Peristiwa = localFont({ src: "../../app/fonts/Peristiwa.otf" });
const FuturaStdLight = localFont({ src: "../../app/fonts/FuturaStdLight.otf" });

export default function Footer() {
    const [isSubmitted, setIsSubmitted] = useState(false); // State to control modal visibility

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

            // Send the form data to the API
            const response = await fetch('https://api.hanjagroup.com/api/postData', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Error submitting form:', errorMessage);
            } else {
                console.log('Form submitted successfully');
                setIsSubmitted(true); // Show modal when submission is successful
            }
        } catch (error) {
            console.log('Error input data:', error);
        }
    }

    return (
        <footer className="bg-[rgb(27,77,137)] text-[#faf6e5] px-14 py-5">
            <div className="text-center pt-5">
                <h1 className={`${Peristiwa.className} text-5xl`}>Sail With Us</h1>
                <h1 className={`${FuturaStdCondensed.className} font-semibold text-sm md:text-lg pt-3 md:pt-2`}>
                    REGISTER NOW TO STAY INFORMED ABOUT OUR EXCEPTIONAL DINING EXPERIENCES, EXCLUSIVE UPDATES, AND SPECIAL OFFERS
                </h1>
            </div>
            
            {/* Form Contact */}
            <form onSubmit={onFormData}>
                <div className={`pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center ${FutureStdBook.className}`}>
                    <input 
                        type="text" 
                        name="name"
                        className="border-[#faf6e5] border-2 bg-[rgb(27,77,137)] w-full max-w-md h-10 text-[#faf6e5] pl-2" 
                        placeholder="Name" 
                        required
                    />
                    <input 
                        type="text" 
                        name="phone"
                        className="border-[#faf6e5] border-2 bg-[rgb(27,77,137)] w-full max-w-md h-10 text-[#faf6e5] pl-2" 
                        placeholder="Phone Number" 
                        required
                    />
                    <input 
                        type="email" 
                        name="email"
                        className="border-[#faf6e5] border-2 bg-[rgb(27,77,137)] w-full max-w-md h-10 text-[#faf6e5] pl-2" 
                        placeholder="Email" 
                        required
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
                <h1>IF YOU WISH TO OPT OUT ANY TIME, SIMPLY CLICK &apos;UNSUBSCRIBE&apos; IN ANY EMAIL WE SEND YOU.</h1>
            </div>

            {/* Modal for successful submission */}
            {isSubmitted && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
                        <h2 className="text-lg font-semibold mb-4">Form Submitted Successfully!</h2>
                        <p>Thank you for registering. We will be in touch soon.</p>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => setIsSubmitted(false)} // Close the modal
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </footer>
    );
}
