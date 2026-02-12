'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/ui/PageHero';

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
    };

    return (
        <div className="pb-20">
            <PageHero
                title="Get in Touch"
                subtitle="We are here to listen and provide the legal support you need. Reach out today."
                backgroundImage="/assets/hero-contact.png"
            />

            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">Contact Information</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Our dedicated team is ready to assist you. Whether you have a specific legal question or need to schedule a consultation, we look forward to hearing from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Visit Us</h3>
                                    <p className="text-gray-400">Block B, 300 Middel & Veale Street</p>
                                    <p className="text-gray-400">Nieuw Muckleneuk</p>
                                    <p className="text-gray-400">Pretoria, 0181</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Call Us</h3>
                                    <p className="text-gray-400">012 054 5285</p>
                                    <p className="text-sm text-gray-500">Mon - Fri, 8am - 5pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Email Us</h3>
                                    <p className="text-gray-400">client@legalwellness.co.za</p>
                                    <p className="text-sm text-gray-500">We respond within 24 hours.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm min-h-[510px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-4" role="status">
                                    <CheckCircle2 className="w-16 h-16 text-accent mx-auto" />
                                    <h2 className="text-2xl font-bold text-white">Message Sent!</h2>
                                    <p className="text-gray-400">Thank you. We&apos;ll get back to you within 24 hours.</p>
                                    <button onClick={() => setStatus('idle')} className="text-accent hover:underline font-bold uppercase text-sm tracking-wide">Send Another Message</button>
                                </motion.div>
                            ) : (
                                <motion.form key="form" onSubmit={handleSubmit} className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-label="Contact form">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold text-gray-300 uppercase tracking-wide">Name</label>
                                            <input required disabled={status === 'submitting'} type="text" id="name" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent disabled:opacity-50" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold text-gray-300 uppercase tracking-wide">Email</label>
                                            <input required disabled={status === 'submitting'} type="email" id="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent disabled:opacity-50" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-bold text-gray-300 uppercase tracking-wide">Subject</label>
                                        <select disabled={status === 'submitting'} id="subject" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent disabled:opacity-50">
                                            <option value="general">General Inquiry</option>
                                            <option value="consultation">Request Consultation</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-bold text-gray-300 uppercase tracking-wide">Message</label>
                                        <textarea required disabled={status === 'submitting'} id="message" rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent disabled:opacity-50" placeholder="How can we help?"></textarea>
                                    </div>
                                    <button disabled={status === 'submitting'} type="submit" className="w-full bg-gradient-to-r from-accent to-yellow-600 text-white font-bold py-4 rounded-lg transition-all uppercase tracking-wide flex items-center justify-center gap-2 disabled:opacity-70">
                                        {status === 'submitting' ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <>Send Message <Send className="w-5 h-5" /></>}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-20 h-80 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                    <iframe
                        title="Legal Wellness Location Map"
                        src="https://maps.google.com/maps?q=-25.7705721,28.2328217&z=15&output=embed"
                        width="100%"
                        height="100%"
                        className="border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </div>
    );
}
