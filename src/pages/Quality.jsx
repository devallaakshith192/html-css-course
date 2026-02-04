import React from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { Award, ClipboardList, CheckCircle } from 'lucide-react';



const Quality = () => {
    usePageTitle('Quality');
    return (
        <div className="bg-white pt-[72px]">
            {/* Page Header */}
            <div className="bg-primary py-24 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/40"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl sm:text-6xl font-black mb-6 uppercase tracking-tight">Quality Assurance</h1>
                    <div className="w-24 h-2 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-medium">
                        Uncompromising standards for life-saving medicines.
                    </p>
                </div>
            </div>

            {/* Safety Metrics */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { label: "Purity Level", val: "99.9%", desc: "Batch wise HPLC verification" },
                            { label: "Safety Score", val: "100%", desc: "Zero contamination record" },
                            { label: "Lab Tests", val: "500+", desc: "Tests performed daily" },
                            { label: "Compliance", val: "100%", desc: "Regulatory audit success" }
                        ].map((metric, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center group hover:shadow-xl transition-all">
                                <div className="text-4xl font-black text-primary mb-2 group-hover:text-accent transition-colors">{metric.val}</div>
                                <div className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">{metric.label}</div>
                                <div className="text-[10px] text-slate-500 italic">{metric.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Checklist */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-primary mb-8">Rigorous 5-Stage Checklist</h2>
                            <div className="space-y-4">
                                {[
                                    { t: "Raw Material Quarantine", d: "Strict testing before entry into production zone." },
                                    { t: "Microbiological Monitoring", d: "Aseptic environment verification at all stages." },
                                    { t: "Process Validation", d: "Real-time monitoring of pelletization parameters." },
                                    { t: "Post-Production Analysis", d: "Dissolution and stability profile assessment." },
                                    { t: "Final Quality Release", d: "Authorized signature by QA heads only." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-100 hover:border-accent group transition-all cursor-default">
                                        <div className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                                            <CheckCircle className="text-slate-200 group-hover:text-primary" size={16} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.t}</h4>
                                            <p className="text-sm text-slate-500">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-[3rem] bg-primary overflow-hidden relative group">
                                <img src="/images/precision-testing.jpg" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Precision Testing" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                                <div className="absolute bottom-12 left-12 right-12">
                                    <h3 className="text-3xl font-bold text-white mb-4">Precision Testing</h3>
                                    <p className="text-blue-100 text-lg leading-relaxed">Our laboratories are equipped with the latest Agilent and Waters instrumentation for accurate molecule profiling.</p>
                                </div>
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full flex items-center justify-center p-4 border-8 border-white shadow-2xl pulse">
                                <Award className="text-primary" size={48} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* R&D Integration */}
            <section className="py-24 bg-primary text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black mb-6">Continuous R&D Integration</h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Quality at Joshika is not just a department, it's a dynamic evolution. Our R&D team works closely with QA to develop more stable and effective drug delivery pellets.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { t: "Novel Formulation", d: "Researching advanced release profiles for generic molecules." },
                            { t: "Process Innovation", d: "Optimizing manufacturing to minimize thermal degradation." },
                            { t: "New Molecule R&D", d: "Expanding therapeutic categories with validated studies." }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-blue-900/50 rounded-[2.5rem] border border-white/10 hover:bg-blue-800/50 transition-colors">
                                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary mb-6 shadow-xl">
                                    <ClipboardList size={24} />
                                </div>
                                <h4 className="text-xl font-bold mb-4">{item.t}</h4>
                                <p className="text-blue-200 text-sm leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Quality;
