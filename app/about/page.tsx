'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Award } from 'lucide-react';
import { StitchCard } from '@/components/ui/StitchCard';

export default function AboutPage() {
    const values = [
        {
            title: 'Integrity',
            description: 'We uphold the highest ethical standards in every action and decision.',
            icon: Award
        },
        {
            title: 'Empathy',
            description: 'Understanding your situation is the first step to resolving it.',
            icon: Heart
        },
        {
            title: 'Excellence',
            description: 'We strive for perfection in our legal practice and client service.',
            icon: Target
        }
    ];

    return (
        <div className="pb-20">
            {/* Header */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-primary-light/30 border-b border-white/5">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        About Legal <span className="text-accent">Wellness</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Dignity. Integrity. Excellence. We are more than just a law firm; we are your partners in navigating life's legal complexities.
                    </motion.p>
                </div>
            </section>

            {/* Mission */}
            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent blur-3xl opacity-20" />
                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-sm">
                                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    At Legal Wellness, our mission is to provide accessible, high-quality legal services that empower individuals and businesses. We believe that legal support should not just be a service, but a pathway to peace of mind and stability.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    We combine deep legal expertise with a compassionate approach, ensuring that every client feels heard, understood, and championed.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {values.map((value, idx) => (
                            <StitchCard
                                key={value.title}
                                {...value}
                                delay={idx * 0.1}
                                className="h-auto"
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team Content could go here */}
            <section className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-12">Our Specialists</h2>
                <p className="text-gray-400">Team section placeholder - Content to be provided.</p>
            </section>
        </div>
    );
}
