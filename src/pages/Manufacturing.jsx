import React from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { Microscope, Settings, Activity, CheckCircle } from 'lucide-react';

const steps = [
    { title: "Raw Material Testing", desc: "Comprehensive testing of all incoming raw materials to ensure quality standards.", icon: Microscope },
    { title: "Pellet Formation", desc: "Advanced pelletization techniques using state-of-the-art equipment.", icon: Settings },
    { title: "Coating Process", desc: "Precision coating application for controlled release characteristics.", icon: Activity },
    { title: "Quality Control", desc: "Final testing and quality assurance before product release.", icon: CheckCircle }
];

const Manufacturing = () => {
    usePageTitle('Manufacturing');
    return (
        <div className="bg-white pt-[72px]">
            {/* Extended Page Header */}
            <div className="bg-primary py-24 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/50 backdrop-blur-sm"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl sm:text-6xl font-black mb-6 uppercase tracking-tighter">Manufacturing Excellence</h1>
                    <div className="w-24 h-2 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-medium">
                        World-class facilities adhering to global pharmaceutical standards.
                    </p>
                </div>
            </div>

            {/* Process Flow Diagram */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Our Process Flow</h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">Advanced manufacturing cycles designed for precision and scale.</p>
                    </div>

                    <div className="relative group">
                        <div className="hidden lg:block absolute top-[5.5rem] left-[15%] right-[15%] h-1 bg-slate-100 -z-10 group-hover:bg-accent/20 transition-colors duration-500"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {steps.map((step, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-44 h-44 bg-white border border-slate-100 rounded-[2.5rem] flex items-center justify-center mb-8 shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(30,58,138,0.15)] transition-all duration-500 hover:-translate-y-4 group/icon">
                                        <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center text-primary group-hover/icon:bg-primary group-hover/icon:text-white transition-colors duration-500">
                                            <step.icon size={48} />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-primary text-center uppercase tracking-wider">{step.title}</h3>
                                    <p className="text-slate-600 text-center text-sm leading-relaxed px-4">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipment & Technology */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-black mb-8 text-primary">State-of-the-Art Technology</h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                Our facility is equipped with high-end machinery including Fluid Bed Processors, Auto-coaters, and sophisticated analytical instruments.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Fluid Bed Processors", desc: "Top-spray and Bottom-spray capabilities." },
                                    { title: "High Speed Pelletizer", desc: "Consistent particle size distribution." },
                                    { title: "Auto Coaters", desc: "Precision coating for modified release." },
                                    { title: "HPLC/GC Labs", desc: "Fully automated quality control cycles." }
                                ].map((eq, i) => (
                                    <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                                        <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4">
                                            <Settings size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-2">{eq.title}</h4>
                                        <p className="text-xs text-slate-500">{eq.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative group">
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                                <img src="/images/manufacturing-hero.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" alt="Manufacturing Unit" />
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-1000"></div>
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent text-primary p-8 rounded-[2rem] shadow-2xl flex flex-col justify-center animate-pulse">
                                <div className="text-4xl font-black">100%</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest">Quality Pass</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Compliance Section */}
            <section className="py-24 bg-primary text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black mb-6">Global Compliance Standards</h2>
                            <p className="text-xl text-blue-100/80 leading-relaxed font-light">
                                Our manufacturing processes strictly adhere to International Safety and Quality Standards, including GMP, ISO 9001:2015, and other global regulatory requirements.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {["GMP", "ISO 9001:2015"].map((cert, i) => (
                                    <div key={i} className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-bold tracking-widest uppercase">
                                        {cert}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { val: "24/7", label: "Quality Monitoring" },
                                { val: "Zero", label: "Compliance Deviations" },
                                { val: "Global", label: "Delivery Standards" },
                                { val: "Safe", label: "Drug Formulations" }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-blue-900/50 rounded-[2.5rem] border border-white/10 text-center">
                                    <div className="text-3xl font-black text-accent mb-2">{item.val}</div>
                                    <div className="text-[10px] uppercase font-bold tracking-widest text-blue-200">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Manufacturing;
