'use client';

import { services } from '@/lib/data';
import { StitchCard } from '@/components/ui/StitchCard';
import PageHero from '@/components/ui/PageHero';

export default function ServicesPage() {
    return (
        <div className="pb-20">
            <PageHero
                title="Our Legal Services"
                subtitle="Explore our comprehensive range of legal solutions designed to protect your rights and future."
                backgroundImage="/assets/hero-services.png"
            />

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
