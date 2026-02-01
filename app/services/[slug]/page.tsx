import { services } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Generate static params for all services
export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: 'Service Not Found | Legal Wellness',
        };
    }

    return {
        title: `${service.title} | Legal Wellness`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <div className="pb-20">
            {/* Hero */}
            <section className="relative py-20 bg-primary-light/20 border-b border-white/5 mb-12">
                <div className="container mx-auto px-6">
                    <Link href="/services" className="inline-flex items-center gap-2 text-accent mb-8 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Services
                    </Link>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-yellow-600 flex items-center justify-center text-white shadow-xl shadow-black/30 shrink-0">
                            <Icon className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-4">{service.title}</h1>
                            <p className="text-xl text-gray-300 max-w-2xl">{service.description}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-white mb-4">About this Service</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {service.longDescription}
                        </p>
                        <div className="mt-8 space-y-4">
                            <h3 className="text-xl font-bold text-white">How we can help:</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 marker:text-accent">
                                <li>Initial consultation and assessment</li>
                                <li>Case strategy and planning</li>
                                <li>Representation and litigation</li>
                                <li>Ongoing support and advice</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-primary-light/50 border border-white/10 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4">Need Assistance?</h3>
                        <p className="text-gray-400 text-sm mb-6">
                            Our team is ready to help you with your {service.title} needs. Contact us today.
                        </p>
                        <Link href="/contact" className="block w-full text-center py-3 bg-accent text-primary font-bold rounded-lg hover:bg-white transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
