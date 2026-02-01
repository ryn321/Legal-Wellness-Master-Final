'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { articles } from '@/lib/news';
import PageHero from '@/components/ui/PageHero';

export default function NewsIndexPage() {
    return (
        <div className="pb-20">
            <PageHero
                title="Legal Insights"
                subtitle="Stay informed with the latest legal updates, consumer rights advice, and expert opinions from our specialists."
                backgroundImage="/assets/hero-news.png"
            />

            {/* Articles Grid */}
            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <motion.div
                            key={article.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-300 flex flex-col h-full"
                        >
                            {/* Image Placeholder (Gradient Fallback) */}
                            <div className="h-48 relative overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/0 transition-colors duration-500" />
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                                    {article.category}
                                </div>
                            </div>


                            <div className="p-8 flex flex-col flex-grow">
                                {/* Meta Data */}
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {article.author}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                                    <Link href={`/news/${article.slug}`}>
                                        <span className="absolute inset-0 z-10" />
                                        {article.title}
                                    </Link>
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <div className="mt-auto flex items-center text-accent font-bold text-sm uppercase tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
