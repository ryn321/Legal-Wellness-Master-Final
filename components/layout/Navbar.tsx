import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Scale } from 'lucide-react';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
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

                {/* Mobile Nav Placeholder (Can be expanded later) */}
                <div className="md:hidden">
                    {/* Add mobile menu toggle here */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
