import React from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { Target, Eye, Shield, Activity, Microscope, Users } from 'lucide-react';

const MissionVision = () => {
    usePageTitle('Mission & Vision');
    return (
        <div className="bg-white text-gray-900 pt-[72px]">
            {/* High-Impact Visual Split Header */}
            <div className="flex flex-col lg:flex-row h-auto lg:min-h-[600px]">
                {/* Mission Section with Background */}
                <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden group">
                    <img
                        src="/images/mission.jpg"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                        alt="Our Mission Background"
                    />
                    <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px] transition-colors duration-1000 group-hover:bg-primary/70"></div>

                    <div className="relative z-10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                        <Target className="text-accent mb-8" size={64} />
                        <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter italic">Our Mission</h1>
                        <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed font-light">
                            To provide innovative pharmaceutical solutions with credibility, commitment, and quality, ensuring timely delivery to patients worldwide.
                        </p>
                    </div>
                </div>

                {/* Vision Section with Background */}
                <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden group">
                    <img
                        src="/images/vision.jpg"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                        alt="Our Vision Background"
                    />
                    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px] transition-colors duration-1000 group-hover:bg-slate-900/70"></div>

                    <div className="relative z-10">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                        <Eye className="text-secondary mb-8" size={64} />
                        <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter italic">Our Vision</h1>
                        <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light">
                            To be a globally recognized pharmaceutical leader, pioneering advanced drug delivery systems that transform patient care and accessible healthcare.
                        </p>
                    </div>
                </div>
            </div>

            {/* Core Tenets Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-4">Our Core Tenets</h2>
                        <div className="w-24 h-2 bg-accent mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "Integrity", desc: "Upholding the highest ethical standards in every molecule we manufacture." },
                            { icon: Activity, title: "Excellence", desc: "Striving for perfection in our processes and product quality." },
                            { icon: Microscope, title: "Innovation", desc: "Pushing boundaries in modified release pellet technology." },
                            { icon: Users, title: "Client Focus", desc: "Building long-term partnerships through transparency and delivery." }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
                                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-8 shadow-sm">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Roadmap */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-black text-center text-primary mb-20 uppercase tracking-tighter">Strategic Roadmap 2030</h2>
                    <div className="space-y-12">
                        {[
                            { year: "2024 - 2025", title: "Capacity Expansion", desc: "Doubling our pelletization capacity and adding advanced auto-coaters." },
                            { year: "2026 - 2027", title: "Global Footprint", desc: "Entering EU and US markets with strategic generic partnerships." },
                            { year: "2028 - 2030", title: "Innovation Leadership", desc: "Pioneering nano-pellet technology for targeted drug delivery." }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-12 items-center bg-white p-10 rounded-[4rem] shadow-sm border border-slate-200 hover:border-accent group transition-all">
                                <div className="text-4xl md:text-6xl font-black text-slate-200 group-hover:text-accent transition-colors shrink-0">
                                    #{i + 1}
                                </div>
                                <div className="space-y-4">
                                    <div className="inline-block px-4 py-1 bg-primary text-white text-xs font-black rounded-full uppercase tracking-widest">{step.year}</div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-primary">{step.title}</h3>
                                    <p className="text-slate-600 font-medium text-lg">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Quote */}
            <section className="py-24 bg-primary text-white overflow-hidden relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-accent text-6xl font-serif mb-8 text-center italic leading-none">"</div>
                    <p className="text-2xl md:text-4xl font-light italic leading-relaxed mb-12">
                        "At Joshika, our mission is more than just manufacturing; it's about building trust in every tablet. We don't just follow standards—we define them."
                    </p>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-1 bg-accent mb-6 rounded-full"></div>
                        <div className="font-bold uppercase tracking-widest text-blue-200">Joshika Leadership Team</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MissionVision;
