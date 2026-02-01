'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface StitchCardProps {
    title: string;
    description: string;
    icon?: LucideIcon;
    href?: string;
    className?: string;
    delay?: number;
}

export function StitchCard({ title, description, icon: Icon, href, className, delay = 0 }: StitchCardProps) {
    const Content = (
        <div className="h-full p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-accent/50 transition-all duration-300 group backdrop-blur-sm relative overflow-hidden">
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon */}
            {Icon && (
                <div className="mb-6 w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300 shadow-lg shadow-black/20">
                    <Icon className="w-6 h-6" />
                </div>
            )}

            {/* Text */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {title}
            </h3>
            <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {description}
            </p>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/10 to-transparent -mr-8 -mt-8 rounded-bl-3xl transition-all duration-300 group-hover:from-accent/20" />
        </div>
    );

    const wrapperClass = cn("block h-full", className);

    if (href) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
                viewport={{ once: true }}
            >
                <Link href={href} className={wrapperClass}>
                    {Content}
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className={wrapperClass}
        >
            {Content}
        </motion.div>
    );
}
