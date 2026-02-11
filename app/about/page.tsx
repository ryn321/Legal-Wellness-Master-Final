'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Award } from 'lucide-react';
import { StitchCard } from '@/components/ui/StitchCard';
import PageHero from '@/components/ui/PageHero';
import { team } from '@/lib/team';

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
            <PageHero
                title="About Legal Wellness"
                subtitle="Dignity. Integrity. Excellence. We are more than just a law firm; we are your partners in navigating life's legal complexities."
                backgroundImage="/assets/hero-about.png"
            />

            {/* Mission */}
            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="h-full"
                    >
                        <div className="relative h-full">
                            <div className="absolute inset-0 bg-accent blur-3xl opacity-20" />
                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-sm h-full flex flex-col justify-center">
                                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Legal Wellness is a product of <strong className="text-accent">Bornman Marlow Inc. Attorneys</strong>. Our mission is to provide accessible, high-quality legal services that empower South Africans who would otherwise find it financially impossible to employ a lawyer.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    We combine the deep legal expertise of a Pretoria-based firm with a compassionate approach, ensuring that every member has unlimited access to professional legal advice on any topic of law.
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

            {/* Team Content */}
            <section className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-12">Our Specialists</h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {team.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group"
                        >
                            {/* Avatar Placeholder */}
                            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-yellow-600 p-1 mb-6 group-hover:scale-105 transition-transform duration-300">
                                <div className="w-full h-full rounded-full bg-primary-light flex items-center justify-center overflow-hidden border-2 border-primary">
                                    <span className="text-4xl font-bold text-white/20">{member.name.charAt(0)}</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-accent text-sm font-bold uppercase tracking-wider mb-4">{member.role}</p>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                                {member.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
