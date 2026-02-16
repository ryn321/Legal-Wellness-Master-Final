import { articles } from '@/lib/news';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    // Await params first (Next.js 15 requirement)
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <article className="pb-20">
            {/* Article Header */}
            <header className="relative pt-32 pb-20 bg-primary-light/30 border-b border-white/5">
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <Link href="/news" className="inline-flex items-center text-accent hover:text-white mb-8 transition-colors duration-300">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                    </Link>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6 font-mono">
                        <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10 text-accent uppercase tracking-wider text-xs font-bold">
                            {article.category}
                        </span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> {article.author}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                        {article.title}
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed font-light border-l-4 border-accent pl-6">
                        {article.excerpt}
                    </p>
                </div>
            </header>

            {/* Article Content */}
            <div className="container mx-auto px-6 max-w-4xl py-12">
                {/*
                  SENTINEL: Content is currently static in lib/news.ts.
                  If this data source becomes dynamic (e.g., from a CMS or API),
                  HTML sanitization (e.g., DOMPurify) MUST be implemented here.
                */}
                <div
                    className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-accent prose-strong:text-white"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </div>
        </article>
    );
}
