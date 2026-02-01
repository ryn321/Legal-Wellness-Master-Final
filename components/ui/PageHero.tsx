'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageHeroProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#061037]/80 via-[#061037]/60 to-[#061037] z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
                >
                    {title}
                </motion.h1>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-1 bg-accent mx-auto mb-6"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light"
                >
                    {subtitle}
                </motion.p>
            </div>
        </section>
    );
}
