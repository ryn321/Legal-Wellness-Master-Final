import { Shield, Users, BookOpen, Home, Briefcase, Scale, Heart } from 'lucide-react';

export const services = [
    {
        slug: 'consumer-matters',
        title: 'Consumer Matters',
        description: 'Expert guidance on consumer rights, credit disputes, and fair trading practices.',
        longDescription: 'We provide comprehensive legal assistance for consumer protection issues, including managing disputes with creditors, blacklisting removal, and ensuring fair treatment under the Consumer Protection Act.',
        icon: Users,
    },
    {
        slug: 'mva',
        title: 'MVA Claims',
        description: 'Specialized assistance with Road Accident Fund claims and motor vehicle accident recovery.',
        longDescription: 'Our team specializes in Motor Vehicle Accident (MVA) claims, helping victims recover the compensation they deserve from the Road Accident Fund. We handle the entire process from claim lodgement to litigation.',
        icon: Shield,
    },
    {
        slug: 'estates',
        title: 'Deceased Estates',
        description: 'Compassionate and efficient winding up of estates and trust administration.',
        longDescription: 'Losing a loved one is difficult enough. We take the burden of estate administration off your shoulders, ensuring that the winding up process is handled with dignity, speed, and accuracy.',
        icon: BookOpen,
    },
    {
        slug: 'property',
        title: 'Property Law',
        description: 'Conveyancing, property transfers, and lease agreement management.',
        longDescription: 'Whether you are buying, selling, or leasing, our property law experts ensure seamless transactions. We handle transfer of ownership, lease disputes, and eviction proceedings with professionalism.',
        icon: Home,
    },
    {
        slug: 'commercial',
        title: 'Commercial Law',
        description: 'Comprehensive legal solutions for businesses, contracts, and corporate governance.',
        longDescription: 'We support businesses of all sizes with contract drafting, dispute resolution, compliance, and corporate governance. Let us handle the legalities so you can focus on growth.',
        icon: Briefcase,
    },
    {
        slug: 'medical-negligence',
        title: 'Medical Negligence',
        description: 'Fighting for justice in cases of medical malpractice and professional negligence.',
        longDescription: 'If you have suffered due to medical malpractice, we are here to fight for your rights. Our experienced team handles complex negligence claims against healthcare providers and institutions.',
        icon: Scale,
    },
];
