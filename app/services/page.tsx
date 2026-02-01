'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import { StitchCard } from '@/components/ui/StitchCard';

export default function ServicesPage() {
    return (
        <div className="pb-20">
            <section className="relative py-20 bg-primary-light/30 border-b border-white/5 mb-16">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Our Legal <span className="text-accent">Services</span>
                    </motion.h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore our comprehensive range of legal solutions designed to protect your rights and future.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <StitchCard
                            key={service.slug}
                            {...service}
                            href={`/services/${service.slug}`} // Ensure link works
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
