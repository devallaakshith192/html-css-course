import usePageTitle from '../hooks/usePageTitle';

const About = () => {
    usePageTitle('About Us');
    return (
        <div className="bg-white pt-[72px]">
            {/* Immersive Header */}
            <div className="relative h-[450px] flex items-center justify-center overflow-hidden">
                <img
                    src="/images/legacy-future.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Joshika Legacy & Future"
                />
                <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl sm:text-6xl font-black mb-6 uppercase tracking-tight">Our Legacy. Our Future.</h1>
                    <div className="w-24 h-2 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-medium">
                        Crafting high-quality generic solutions since 2016.
                    </p>
                </div>
            </div>

            {/* Company Profile with Stats Overlay */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight">Empowering Healthcare through Pelletization</h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-light">
                                Joshika Pharma Pvt. Ltd. is a leading pharmaceutical formulation developer and manufacturer. We specialize in Modified Release Pellets, helping pharma companies optimize drug delivery for better patient outcomes.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { label: "Founded", val: "2016" },
                                    { label: "Capacity", val: "600MT/yr" },
                                    { label: "Products", val: "50+" },
                                    { label: "Markets", val: "Domestic & Exports" }
                                ].map((stat, i) => (
                                    <div key={i} className="border-l-4 border-accent pl-6 py-2">
                                        <div className="text-2xl font-bold text-primary">{stat.val}</div>
                                        <div className="text-sm font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative group">
                            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative">
                                <img src="/images/about-capsule.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="About Joshika" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                            </div>
                            <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent text-primary rounded-[2rem] p-8 flex flex-col justify-center shadow-xl rotate-3 group-hover:rotate-0 transition-transform">
                                <div className="text-4xl font-black mb-1 leading-tight">GMP</div>
                                <div className="text-xs font-bold leading-tight">CERTIFIED FACILITY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-slate-900 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-20 uppercase tracking-tighter">Our Journey</h2>
                    <div className="relative">
                        <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-white/10 -translate-y-1/2"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                { year: "2016", title: "Inception", d: "Founded in Hyderabad with a focus on R&D." },
                                { year: "2018", title: "Scale Up", d: "Setup high-capacity semi-automated plant." },
                                { year: "2021", title: "Exports", d: "Started international supply to emerging markets." },
                                { year: "2024", title: "Precision", d: "Commissioning of next-gen auto-coating units." }
                            ].map((event, i) => (
                                <div key={i} className="relative z-10 bg-white/5 backdrop-blur-lg p-10 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-colors group">
                                    <div className="text-5xl font-black text-accent mb-6 group-hover:scale-110 transition-transform">{event.year}</div>
                                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{event.title}</h3>
                                    <p className="text-blue-100/60 text-sm leading-relaxed">{event.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Culture & Environment */}
            <section className="py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-last lg:order-first grid grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <img src="/images/culture-lab-1.jpg" className="rounded-3xl shadow-lg" alt="Joshika Research" />
                                <img src="/images/culture-corridor.jpg" className="rounded-3xl shadow-lg lg:translate-x-12" alt=" Joshika Facility Corridor" />
                            </div>
                            <div className="space-y-6 pt-12">
                                <img src="/images/culture-lab-2.jpg" className="rounded-3xl shadow-lg" alt="Quality Analysis" />
                                <img src="/images/culture-capsule.jpg" className="rounded-3xl shadow-lg -translate-x-12" alt="Product Innovation" />
                            </div>
                        </div>
                        <div className="space-y-10">
                            <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight">A Culture of Precision & Care</h2>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Our workspace is more than a factory; it's a laboratory of collaboration. We believe in nurturing talent and providing an environment where every employee is a partner in our success.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { t: "Safety First", d: "Automated systems ensure minimal manual handling for safety." },
                                    { t: "Continuous Learning", d: "Regular training sessions on latest cGMP guidelines." },
                                    { t: "Equality & Merit", d: "Inclusive workplace with merit-based growth opportunities." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-12 h-12 bg-blue-50 text-primary shrink-0 flex items-center justify-center rounded-2xl">
                                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900">{item.t}</h4>
                                            <p className="text-slate-500 text-sm">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
