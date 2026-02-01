'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingCardProps {
    title: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    buttonText: string;
    isPopular?: boolean;
    delay?: number;
}

export default function PricingCard({
    title,
    price,
    period,
    description,
    features,
    buttonText,
    isPopular = false,
    delay = 0
}: PricingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "relative rounded-2xl p-8 backdrop-blur-sm border transition-all duration-300 flex flex-col h-full",
                isPopular
                    ? "bg-[#0A1A4A] border-accent shadow-[0_0_30px_rgba(212,175,55,0.15)] md:scale-105 z-10"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
            )}
        >
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary font-bold text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                </div>
            )}

            <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-6 h-8">{description}</p>
                <div className="flex items-baseline justify-center gap-1 text-white">
                    <span className="text-4xl font-bold">{price}</span>
                    <span className="text-gray-400 text-sm">/{period}</span>
                </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="w-5 h-5 text-accent shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <button className={cn(
                "w-full py-3 rounded-lg font-bold uppercase tracking-wide text-sm transition-all duration-300",
                isPopular
                    ? "bg-gradient-to-r from-accent to-yellow-600 text-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    : "bg-white/10 text-white hover:bg-white/20 hover:text-accent"
            )}>
                {buttonText}
            </button>

        </motion.div>
    );
}
