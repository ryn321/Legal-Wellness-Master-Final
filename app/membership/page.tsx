'use client';

import PageHero from '@/components/ui/PageHero';
import PricingCard from '@/components/ui/PricingCard';
import LeadGenForm from '@/components/ui/LeadGenForm';

export default function MembershipPage() {
    const plans = [
        {
            title: 'Legal Wellness Membership',
            price: 'R89',
            period: 'pm',
            description: 'Comprehensive legal protection for you and your immediate family.',
            features: [
                'Unlimited Telephonic Advice',
                'Covers Immediate Family',
                'Civil & Criminal Matters',
                'Contract & Document Review',
                'Motor Vehicle Accident Claims',
                'Labour & Consumer Matters'
            ],
            buttonText: 'Get Protected Now',
            isPopular: true
        }
    ];

    return (
        <div className="pb-20">
            <PageHero
                title="Affordable Legal Protection"
                subtitle="Professional legal advice from only R89 p/m. No hidden fees, just peace of mind."
                backgroundImage="/assets/hero-contact.png"
            />

            <section className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Legal Cover</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        With the attorneys of Legal Wellness fighting in your corner, your rights are protected.
                    </p>
                </div>

                <div className="flex justify-center max-w-4xl mx-auto">
                    <div className="w-full max-w-md">
                        {plans.map((plan, idx) => (
                            <PricingCard key={plan.title} {...plan} delay={idx * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Lead Gen Form */}
            <LeadGenForm />
        </div>
    );
}
