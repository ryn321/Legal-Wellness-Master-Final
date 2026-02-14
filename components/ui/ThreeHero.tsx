'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
// @ts-expect-error - maath types may not be fully resolved in this environment
import * as random from 'maath/random/dist/maath-random.esm';
import Image from 'next/image';
import * as THREE from 'three';

/**
 * GoldenParticles component that renders a sphere of points.
 * Memoized to prevent unnecessary re-renders when the parent component updates.
 */
const GoldenParticles = React.memo(function GoldenParticles(props: Record<string, unknown>) {
    const ref = useRef<THREE.Points>(null);
    // 5001 points for the golden sphere effect
    const sphere = useMemo(() => random.inSphere(new Float32Array(5001), { radius: 1.5 }), []);

    useFrame((_state, delta) => {
        if (ref.current) {
            // Subtle rotation for a dynamic feel
            ref.current.rotation.x -= delta / 20;
            ref.current.rotation.y -= delta / 30;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#D4AF37" // Stitch Gold
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
});

GoldenParticles.displayName = 'GoldenParticles';

export default function ThreeHero() {
    const [isVisible, setIsVisible] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    // Performance optimization: Stop the R3F render loop when the hero is not visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0 }
        );

        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 bg-primary">
            {/* Background Image Layer - Preserving the user's approved image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#061037] via-[#0a1a5c] to-[#040b29]" />
                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                    <Image
                        src="/assets/hero-home.png"
                        alt="Legal Wellness Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            <div className="absolute inset-0 z-10 w-full h-full opacity-80">
                <Canvas
                    camera={{ position: [0, 0, 1] }}
                    dpr={[1, 2]} // Cap DPR to 2 for performance on high-DPI screens
                    frameloop={isVisible ? 'always' : 'never'} // Disable loop when out of view
                >
                    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
                        <GoldenParticles />
                    </Float>
                </Canvas>
            </div>

            {/* Vignette Overlay for Depth */}
            <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,16,55,0.6)_100%)] pointer-events-none" />
        </div>
    );
}
