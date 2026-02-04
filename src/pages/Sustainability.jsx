import React from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { Leaf, Droplets, Recycle, ShieldCheck, Sun, Globe } from 'lucide-react';

const Sustainability = () => {
    usePageTitle('Sustainability');
    return (
        <div className="bg-white pt-[72px]">
            {/* Immersive Hero Section */}
            <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <img
                    src="/images/sustainability-globe.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Sustainable Future Globe"
                />
                <div className="absolute inset-0 bg-primary/60 backdrop-blur-[1px]"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <span className="inline-block px-4 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                        Our Commitment
                    </span>
                    <h1 className="text-5xl sm:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
                        Driven by <span className="text-accent">Nature</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Pioneering pharmaceutical excellence with a deep-rooted responsibility
                        towards preserving our planet's future.
                    </p>
                </div>
            </div>

            {/* Visionary Introduction */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <img
                                src="/images/sustainability-earth.png"
                                alt="Green Earth Concept"
                                className="w-full max-w-md mx-auto hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl font-black text-primary leading-tight">
                                Harmonizing Healthcare <br />With Environmental Care
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-light italic border-l-4 border-accent pl-8">
                                "At Joshika Pharma, sustainability isn't an initiative; it's our foundational principle.
                                We recognize that the health of humanity is inextricably linked to the health of our environment."
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <ShieldCheck className="text-primary mb-4" size={32} />
                                    <h4 className="font-bold text-slate-900 mb-2 tracking-wide uppercase text-sm">Eco-Adherence</h4>
                                    <p className="text-xs text-slate-500">100% compliance with environmental safety regulations.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <Recycle className="text-primary mb-4" size={32} />
                                    <h4 className="font-bold text-slate-900 mb-2 tracking-wide uppercase text-sm">Circular Economy</h4>
                                    <p className="text-xs text-slate-500">Integrating waste reduction across all life cycles.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillar 1: Green Manufacturing */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 space-y-8">
                            <Leaf className="text-accent" size={56} />
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                                Green <br /><span className="text-accent">Manufacturing</span>
                            </h2>
                            <p className="text-lg text-blue-100/70 leading-relaxed">
                                Our manufacturing facility is a testament to industrial harmony. We utilize
                                advanced filtration and energy-efficient systems to minimize our industrial footprint.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Zero Liquid Discharge (ZLD) enabled facility.",
                                    "Transitioning to 30% solar power by 2026.",
                                    "Emission-neutral processing technology.",
                                    "Strict hazardous waste management protocols."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-sm font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5">
                                <img
                                    src="/images/sustainability-factory.jpg"
                                    alt="Green Factory Concept"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillar 2: Green Packaging */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
                        <div className="lg:w-1/2 space-y-8">
                            <div className="w-16 h-1 bg-accent rounded-full"></div>
                            <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter">
                                Conscious <br />Packaging
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Packaging is a huge responsibility. We are investing in R&D to adopt
                                biodegradable and recyclable materials for our generic formulations
                                without compromising drug stability or safety.
                            </p>
                            <div className="p-8 bg-primary rounded-[2rem] text-white">
                                <h4 className="text-accent font-bold mb-4 uppercase tracking-widest">Our Packaging Goal</h4>
                                <p className="text-blue-100/80 italic leading-relaxed">
                                    "Developing pill packaging that leaves behind a footprint of health, not a mountain of waste."
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
                                <img
                                    src="/images/sustainability-packaging.jpg"
                                    alt="Green Packaging Initiative"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillar 3: Water Conservation */}
            <section className="py-24 bg-blue-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 space-y-8">
                            <Droplets className="text-primary" size={56} />
                            <h2 className="text-4xl font-black text-primary uppercase tracking-tighter leading-tight">
                                Strategic Water <br />Conservation
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Water is the lifeblood of our processes. Our facility employs multi-stage
                                water recycling and rainwater harvesting to ensure we give back more than we take.
                            </p>
                            <div className="flex gap-4">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex-1">
                                    <div className="text-3xl font-black text-primary mb-1">90%</div>
                                    <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Water Recycled</div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex-1">
                                    <div className="text-3xl font-black text-primary mb-1">100%</div>
                                    <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Zero Liquid Discharge</div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative group">
                                <img
                                    src="/images/sustainability-water.jpg"
                                    alt="Water Conservation"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Sustainability Pledge */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent rounded-full blur-[150px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
                            Our Sustainability Pledge
                        </h2>
                        <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
                            By 2030, Joshika Pharma commits to:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-10 border border-white/20 hover:bg-white/15 transition-all group">
                            <div className="text-center">
                                <div className="text-6xl font-black text-accent mb-4 group-hover:scale-110 transition-transform">50%</div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Carbon Footprint Reduction</h3>
                                <p className="text-sm text-blue-100/70 leading-relaxed">
                                    Minimize our environmental impact through energy efficiency and renewable resources.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-10 border border-white/20 hover:bg-white/15 transition-all group">
                            <div className="text-center">
                                <div className="text-6xl font-black text-accent mb-4 group-hover:scale-110 transition-transform">100%</div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Recyclable Packaging</h3>
                                <p className="text-sm text-blue-100/70 leading-relaxed">
                                    Transition all finished product packaging to fully recyclable materials.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-10 border border-white/20 hover:bg-white/15 transition-all group">
                            <div className="text-center">
                                <div className="text-6xl font-black text-accent mb-4 group-hover:scale-110 transition-transform">Zero</div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Waste Production</h3>
                                <p className="text-sm text-blue-100/70 leading-relaxed">
                                    Achieve zero-waste manufacturing across all production facilities.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-blue-100/60 italic text-sm max-w-3xl mx-auto leading-relaxed">
                            We believe sustainability is not a destination but a continuous journey. Through transparency,
                            accountability, and collaborative efforts, Joshika Pharma is dedicated to building a healthier, more
                            sustainable future for all.
                        </p>
                    </div>
                </div>
            </section>

            {/* Global Promise */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400 rounded-full blur-[120px]"></div>
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <Globe className="text-accent mx-auto mb-8 animate-pulse" size={64} />
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                        A Global Promise for <br /><span className="text-accent">Generations</span>
                    </h2>
                    <p className="text-xl text-blue-100/80 font-light mb-12">
                        We don't just manufacture medicine; we curate a legacy of responsibility.
                        Every innovation at Joshika is a step towards a greener, healthier world.
                    </p>
                    <div className="h-2 w-32 bg-accent mx-auto rounded-full"></div>
                </div>
            </section>
        </div>
    );
};

export default Sustainability;
