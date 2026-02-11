'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle, Send, Loader2 } from 'lucide-react';

export default function LeadGenForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#061037] via-[#0A1A4A] to-[#061037]" />

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text / Value Prop */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-accent font-bold uppercase tracking-wider text-sm mb-2 block">Powered by Bornman Marlow Inc.</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Helping South Africans faced with <span className="text-accent">Legal Problems.</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                For most, it is financially impossible to employ the services of a lawyer. Your subscription entitles you to unlimited, professional legal advice.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'No additional charges',
                                    'Any topic of the Law',
                                    'Confidential',
                                    'Reliability & Results',
                                    'Unlimited Advice',
                                    'Professional Attorneys'
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center gap-2 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-accent" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="w-8 h-8 text-accent" />
                            <h3 className="text-2xl font-bold text-white">Get Legal Protection</h3>
                        </div>
                        <p className="text-gray-300 text-sm mb-8">
                            Fill in your details and an advisor will contact you shortly.
                        </p>

                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStatus('submitting'); setTimeout(() => setStatus('success'), 1500); }}>
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="py-12 text-center" role="status">
                                        <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                                        <p className="text-gray-300">We&apos;ll contact you shortly.</p>
                                    </motion.div>
                                ) : (
                                    <motion.div key="form" exit={{ opacity: 0, y: -10 }} className="space-y-4">
                                        <div className="space-y-1">
                                            <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase cursor-pointer">Full Name</label>
                                            <input id="name" type="text" required disabled={status === 'submitting'} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors disabled:opacity-50" placeholder="John Doe" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase cursor-pointer">Email</label>
                                                <input id="email" type="email" required disabled={status === 'submitting'} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors disabled:opacity-50" placeholder="john@example.com" />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="phone" className="text-xs font-bold text-gray-400 uppercase cursor-pointer">Phone</label>
                                                <input id="phone" type="tel" required disabled={status === 'submitting'} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors disabled:opacity-50" placeholder="082 123 4567" />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="msg" className="text-xs font-bold text-gray-400 uppercase cursor-pointer">How can we help?</label>
                                            <textarea id="msg" required disabled={status === 'submitting'} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none disabled:opacity-50" rows={3} placeholder="I need help with..." />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            aria-label={status === 'submitting' ? "Submitting form" : "Get Covered Now"}
                                            className="w-full bg-accent hover:bg-yellow-500 text-primary font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
                                        >
                                            {status === 'submitting' ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Get Covered Now <Send className="w-4 h-4" /></>}
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
