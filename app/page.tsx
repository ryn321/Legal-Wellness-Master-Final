'use client';

import { motion } from 'framer-motion';
import { Scale, Users, Shield, BookOpen, Briefcase, Home } from 'lucide-react';
import { StitchCard } from '@/components/ui/StitchCard';

export default function HomePage() {
  const services = [
    {
      title: 'Consumer Matters',
      description: 'Expert guidance on consumer rights, credit disputes, and fair trading practices.',
      icon: Users,
      href: '/services/consumer-matters',
    },
    {
      title: 'MVA Claims',
      description: 'Specialized assistance with Road Accident Fund claims and motor vehicle accident recovery.',
      icon: Shield,
      href: '/services/mva',
    },
    {
      title: 'Deceased Estates',
      description: 'Compassionate and efficient winding up of estates and trust administration.',
      icon: BookOpen,
      href: '/services/estates',
    },
    {
      title: 'Property Law',
      description: 'Conveyancing, property transfers, and lease agreement management.',
      icon: Home,
      href: '/services/property',
    },
    {
      title: 'Commercial Law',
      description: 'Comprehensive legal solutions for businesses, contracts, and corporate governance.',
      icon: Briefcase, // Better icon for Commercial
      href: '/services/commercial',
    },
    {
      title: 'Medical Negligence',
      description: 'Fighting for justice in cases of medical malpractice and professional negligence.',
      icon: Scale,
      href: '/services/medical-negligence',
    },
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/80 z-10" />
          {/* 
                NOTE: Ideally replace with an actual <video> tag if asset is available.
                For now, using a gradient placeholder as per plan if video missing or until verification.
            */}
          <div className="w-full h-full bg-gradient-to-br from-primary via-primary-light to-primary" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
              Your Partner in <span className="text-accent relative inline-block">
                Legal Wellness
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Experience the perfect balance of authority and empathy. We provide dignity, integrity, and excellence in every legal matter we handle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-accent to-yellow-600 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:scale-105 uppercase tracking-wide text-sm">
              Schedule a Consultation
            </a>
            <a href="/services" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm uppercase tracking-wide text-sm">
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-accent rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Areas of Expertise</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-gray-400">
            Comprehensive legal solutions tailored to your personal and professional needs. We navigate the complexities of the law so you can focus on what matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <StitchCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Call to Action Strip */}
      <section className="bg-primary-light border-y border-white/5 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to secure your legal future?</h2>
          <a href="/contact" className="inline-block px-10 py-5 bg-transparent border-2 border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-primary transition-all duration-300 text-lg">
            Get in Touch Today
          </a>
        </div>
      </section>
    </div>
  );
}
