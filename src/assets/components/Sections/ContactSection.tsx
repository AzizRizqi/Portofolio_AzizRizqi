// src/components/sections/ContactSection/ContactSection.tsx
import React, { useState, useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactSection: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        // Validasi format email sebelum mengirim
        if (!validateEmail(formData.email)) {
            toast.error('Please enter a valid email address.');
            return; // Hentikan pengiriman jika email tidak valid
        }

        setIsSending(true);

        // Membaca kunci dari Environment Variables
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Pemeriksaan keamanan: pastikan variabel ada sebelum mengirim
        if (!serviceID || !templateID || !publicKey) {
            console.error("EmailJS environment variables are not set.");
            toast.error("The contact form is currently unavailable. Please try again later.");
            setIsSending(false);
            return;
        }

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                toast.success('Message sent successfully! I will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.log(error.text);
                toast.error('Failed to send the message, please try again.');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="py-20 px-4 container mx-auto text-center">
            <h2
                className="text-4xl font-bold mb-12 gradient-text"
                data-aos="fade-up"
            >
                Contact Me
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-800/50 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-2xl border border-white/10">
                {/* Contact Info */}
                <div className="space-y-6 text-left" data-aos="fade-right">
                    <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
                    <p className="text-white/80 leading-relaxed mb-6">
                        Feel free to reach out to me for any inquiries, collaborations, or just to say hello. I'm always open to new opportunities and discussions.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-500/20 p-3 rounded-full">
                                <FaEnvelope className="text-purple-400 text-xl" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Email</h4>
                                <a href="mailto:azizrizqi2005@gmail.com" className="text-white/80 hover:text-white transition-colors">azizrizqi2005@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-sky-500/20 p-3 rounded-full">
                                <FaPhone className="text-sky-400 text-xl" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Phone</h4>
                                <span className="text-white/80">+62 878 8521 1422</span>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-pink-500/20 p-3 rounded-full">
                                <FaMapMarkerAlt className="text-pink-400 text-xl" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Location</h4>
                                <span className="text-white/80">Jakarta, Indonesia</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div data-aos="fade-left">
                    <h3 className="text-2xl font-semibold text-white mb-6 text-left">Send Me a Message</h3>
                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg bg-slate-700/50 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg bg-slate-700/50 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg bg-slate-700/50 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-y"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSending}
                            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSending ? 'Sending...' : 'Send Message'}
                            {!isSending && <FaPaperPlane className="ml-2" />}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;