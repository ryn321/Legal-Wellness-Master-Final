'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Scale, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Membership', href: '/membership' },
        { name: 'Insights', href: '/news' },
        { name: 'Contact', href: '/contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group z-50">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-yellow-600 flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform duration-300">
                        <Scale className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-wide">
                        LEGAL <span className="text-accent">WELLNESS</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white/80 hover:text-accent font-medium transition-colors text-sm uppercase tracking-wider relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-6 py-2 bg-transparent border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 rounded-full text-sm font-bold uppercase tracking-wider"
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden z-50">
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-white hover:text-accent transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 top-0 left-0 w-full bg-primary flex flex-col items-center justify-center z-40 md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8 px-6 text-center">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-bold text-white hover:text-accent transition-colors uppercase tracking-widest py-2 px-4 block"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="mt-4 px-10 py-4 bg-accent text-primary font-bold rounded-full uppercase tracking-wider text-lg shadow-lg block"
                                >
                                    Get in Touch
                                </Link>
                            </motion.div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
