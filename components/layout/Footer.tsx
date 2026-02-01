import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-light text-white/70 py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">LEGAL <span className="text-accent">WELLNESS</span></h2>
                    <p className="text-sm leading-relaxed">
                        Dignity, Integrity, and Excellence in every case we handle. We are committed to your legal wellness.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
                        <li><Link href="/membership" className="hover:text-accent transition-colors">Membership</Link></li>
                        <li><Link href="/news" className="hover:text-accent transition-colors">Insights</Link></li>
                        <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legal Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/services/consumer-matters" className="hover:text-accent transition-colors">Consumer Matters</Link></li>
                        <li><Link href="/services/mva" className="hover:text-accent transition-colors">Motor Vehicle Accidents</Link></li>
                        <li><Link href="/services/estates" className="hover:text-accent transition-colors">Winding Up Estates</Link></li>
                        <li><Link href="/services/property" className="hover:text-accent transition-colors">Property Law</Link></li>
                        <li><Link href="/services/commercial" className="hover:text-accent transition-colors">Commercial Matters</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h3>
                    <address className="not-italic text-sm space-y-2">
                        <p>Block B, 300 Middel & Veale Street</p>
                        <p>Nieuw Muckleneuk</p>
                        <p>Pretoria, 0181</p>
                        <p className="pt-2"><a href="tel:0120545285" className="hover:text-accent transition-colors">012 054 5285</a></p>
                        <p><a href="mailto:client@legalwellness.co.za" className="hover:text-accent transition-colors">client@legalwellness.co.za</a></p>
                    </address>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-xs">
                <p>&copy; {currentYear} Legal Wellness. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
