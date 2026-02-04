import React from 'react';
import { Pill, Database, Beaker } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';

const mainProducts = [
    {
        title: "Sustained Release Pellets",
        description: "Advanced pellet formulations designed for controlled drug release over extended periods.",
        features: ["Customized release profiles", "Various API combinations", "Regulatory compliant"],
        icon: Pill
    },
    {
        title: "Enteric Coated Pellets",
        description: "Specialized coating technology for targeted drug delivery and enhanced bioavailability.",
        features: ["Gastric protection", "Targeted release", "Improved stability"],
        icon: Database
    },
    {
        title: "Multi-Particulate Systems",
        description: "Complex formulations combining multiple APIs for enhanced therapeutic outcomes.",
        features: ["Multiple API combinations", "Synchronized release", "Enhanced efficacy"],
        icon: Beaker
    }
];



const licensedProducts = [
    {
        category: "GASTROINTESTINAL DRUG PELLETS",
        items: [
            ["Omeprazole EC Pellets", "7.5%, 8.5%, 10%,15%, 22.5%& 17%"],
            ["Lansoprazole EC Pellets", "8.5%, 10%, 11.20%"],
            ["Rabeprazole EC Pellets", "8.50%, 11.20% & 20%"],
            ["Pantoprazole EC Pellets", "15%, 23.5%"],
            ["Esomeprazole EC Pellets", "8.5%, 17%, 22.50%, 23.5& 26.66%"],
            ["Blended pellets of Omeprazole EC + Domperidone IR", "20mg + 10mg"],
            ["Blended pellets of Omeprazole EC + Domperidone SR", "20mg + 30mg"],
            ["Blended pellets of Rabeprazole EC + Domperidone SR", "20mg + 30mg"],
            ["Blended pellets of Pantoprazole EC + Domperidone SR", "40mg + 30mg"],
            ["Blended pellets of Rabeprazole EC + Itopride SR", "20mg + 150mg"],
            ["Blended pellets of Pantoprazole EC + Itopride SR", "40mg + 150mg"],
            ["Blended pellets of Rabeprazole EC + Levosulpiride SR", "20mg + 75mg"],
            ["Dex-Lansoprazole EC Pellets", "8.5%, 12.5%"],
            ["Dex-Rabeprazole EC Pellets", "17% & 20%"],
            ["Blended pellets of Esomeprazole + Domperidone SR", "40mg+30mg"],
            ["Blended pellets of Pantoprazole EC + Domperidone IR", "20mg + 10mg"],
            ["Blended pellets of Pantoprazole EC + Levosulpiride SR", "40mg + 75mg"],
            ["Blended pellets of Esomeprazole EC + Levosulpiride SR", "40mg + 75mg"]
        ]
    },
    {
        category: "RESPIRATORY DRUG PELLETS",
        items: [
            ["Blended pellets of Levocetirizine IR + Ambroxol SR", "5mg + 75mg"],
            ["Chlorpheniramine maleate IR Pellets", "10%"],
            ["Ambroxol SR Pellets", "25%"],
            ["Blended pellets of Chlorpheniramine maleate IR + Phenylephrine IR", "4mg +5mg"]
        ]
    },
    {
        category: "UROLOGICAL DRUG PELLETS",
        items: [
            ["Tamsulosin HCl SR Pellets", "0.12%, 0.16%, 0.20%"],
            ["Blended Pellets of Tamsulosin HCl + Dutasteride", "0.4mg+0.5mg"]
        ]
    },
    {
        category: "ANTI OBESITY DRUG PELLETS",
        items: [
            ["Orlistat IR Pellets", "40% & 50%"]
        ]
    },
    {
        category: "ANTI DEPRESSANT DRUG PELLETS",
        items: [
            ["Duloxetine HCl EC Pellets", "17% & 20%"]
        ]
    },
    {
        category: "TASTE MASKING DRUG PELLETS",
        items: [
            ["Ciprofloxacin HCl Taste Mask Pellets", "17% & 20%"],
            ["Azithromycin Taste Mask Pellets", "7.5%"],
            ["Clarithromycin Taste Mask Pellets", "7.5%"]
        ]
    },
    {
        category: "CARDIOVASCULAR DRUG PELLETS",
        items: [
            ["Diltiazem HCl SR Pellets", "40% & 50%"],
            ["Proponolol SR Pellets", "15%"],
            ["Nifedipine SR Pellets", "11%"],
            ["Aspirin EC Pellets", "50% & 65%"],
            ["Clopidogrel IR Pellets", "50%"],
            ["Atorvastatin IR Pellets", "7.5% & 15%"],
            ["Rosuvastatin IR Pellets", "7.5% & 15%"]
        ]
    },
    {
        category: "PAIN MANAGEMENT DRUG PELLETS",
        items: [
            ["Diclofenac Sodium SR Pellets", "33% & 40%"],
            ["Tramadol HCl IR Pellets", "60%"],
            ["Ketoprofen SR Pellets", "65%"],
            ["Mebeverine SR Pellets", "60%, 80%"]
        ]
    },
    {
        category: "ANTI-MICROBIAL, ANTI-INFECTIVE & ADJUVANT DRUGS PELLETS",
        items: [
            ["Doxycycline Hyclate IR Pellets", "25%"],
            ["Itraconazole IR Pellets", "20%, 22%, 40%, 44%"],
            ["Blended Pellets of Doxycycline EC and Lactic acid bacillus", "100mg and 5 billion spores"]
        ]
    },
    {
        category: "CENTRAL NERVOUS SYSTEM DRUG PELLETS",
        items: [
            ["Venlafaxine HCl SR Pellets", "33% & 39%"],
            ["Fluoxetine HCl EC Pellets", "35%"],
            ["Sildenafil Citrate IR Pellets", "10% & 20%"]
        ]
    },
    {
        category: "ANTI CHOLESTROL DRUG PELLETS",
        items: [
            ["Fenofibrate SR Pellets", "60%"]
        ]
    },
    {
        category: "ANTI INFLAMMATORY DRUG PELLETS",
        items: [
            ["Indomethanin IR Pellets", "28%"]
        ]
    },
    {
        category: "SKELETAL MUSCLE RELAXANTS DRUG PELLETS",
        items: [
            ["Eperisone SR Pellets", "60%"]
        ]
    },
    {
        category: "NUTRITION AND FOOD SUPPLIMENT DRUG PELLETS",
        items: [
            ["Dried Ferrous Sulphate Pellets", "75%"],
            ["Folic Acid Pellets", "0.15%"],
            ["Blended pellets of Dried ferrous sulphate and Folic acid", "150mg+0.5mg"],
            ["Blended pellets of Carbonyl Iron, Zinc Sulphate and Folic acid", "50mg +61.8mg +0.5mg"],
            ["Vitamin C Pellets", "70%"],
            ["Vitamin B12 Pellets", "0.20%"]
        ]
    },
    {
        category: "DUMMY PELLETS & SUGAR SPHERES",
        isSizeTable: true,
        items: [
            ["Non Pareil Seeds (Dummy Pellets)", "12 # 16, 12#18, 16#20"],
            ["Sugar Spheres", "12#16, 24#30, 20#24"]
        ]
    }
];

const licensedCapsules = [
    {
        category: "GASTROINTESTINAL DRUGS",
        items: [
            ["Omeprazole EC Capsules", "20mg"],
            ["Lansoprazole EC Capsules", "30 mg"],
            ["Rabeprazole EC + Domperidone SR Capsules", "20mg + 30mg"],
            ["Omeprazole EC + Domperidone IR Capsules", "20mg + 10mg"],
            ["Omeprazole EC + Domperidone SR Capsules", "20mg + 30mg"],
            ["Pantoprazole EC + Domperidone IR Capsules", "20mg + 10mg"],
            ["Pantoprazole EC + Domperidone SR Capsules", "40mg + 30mg"],
            ["Rabeprazole EC + Itopride SR Capsules", "20mg + 150mg"],
            ["Pantoprazole EC + Itopride SR Capsules", "40mg + 150mg"],
            ["Rabeprazole EC + Levosulpiride SR Capsules", "20mg + 75mg"],
            ["Rabeprazole EC + Aceclofenac SR", "20mg + 200mg"],
            ["Levocetirizine IR with Ambroxol SR Capsules", "5mg + 75mg"],
            ["Esomeprazole EC + Itopride SR Capsules", "40mg + 150mg"],
            ["Esomeprazole EC + Domperidone SR Capsules", "20mg + 30mg"]
        ]
    },
    {
        category: "RESPIRATORY DRUG PELLETS",
        items: [
            ["Chlorpheniramine maleate IR + Phenylephrine Capsules", "4mg + 5mg"]
        ]
    },
    {
        category: "NUTRITION AND FOOD SUPPLIMENT DRUG PELLETS",
        items: [
            ["Dried ferrous sulphate and Folic acid Capsules", "150mg + 0.5mg"],
            ["Carbonyl Iron, Zinc Sulphate and Folic acid Capsules", "50mg + 61.8mg +0.5mg"]
        ]
    }
];

// Original Products component
const Products = () => {
    usePageTitle('Products');
    return (
        <div className="bg-white pt-[72px]">
            {/* Page Header */}
            <div className="bg-primary py-20 text-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 uppercase tracking-tight">Our Products</h1>
                    <div className="w-24 h-2 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto font-medium">
                        Specialized pharmaceutical formulations designed for precision drug delivery.
                    </p>
                </div>
            </div>

            {/* Main Focus */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-4">Modified Release Pellets</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            We specialize in customized development and manufacturing of Modified Release Pellets across 15+ therapeutic categories.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {mainProducts.map((p, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-accent transition-all duration-500 group hover:shadow-2xl">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <p.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-primary uppercase tracking-wide">{p.title}</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed">{p.description}</p>
                                <ul className="space-y-4">
                                    {p.features.map((f, fi) => (
                                        <li key={fi} className="flex items-center text-sm font-medium text-slate-700">
                                            <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* List of Licensed Pellets Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-4 italic">List of Licenced Pellets</h2>
                        <div className="w-32 h-2.5 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-16">
                        {licensedProducts.map((cat, ci) => (
                            <div key={ci} className="relative">
                                <h3 className="text-xl font-black text-primary mb-8 flex items-center gap-4">
                                    <span className="w-2 h-10 bg-accent rounded-full inline-block"></span>
                                    {cat.category}
                                </h3>

                                <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-slate-50 border-b border-slate-200">
                                                <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400 w-20">S.No</th>
                                                <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400">Name of the Product</th>
                                                <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400">
                                                    {cat.isSizeTable ? "Available Sizes" : "Available Strength (w/w)"}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cat.items.map((item, ii) => (
                                                <tr key={ii} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                                    <td className="p-6 font-bold text-slate-400">{ii + 1}.</td>
                                                    <td className="p-6 font-bold text-primary">{item[0]}</td>
                                                    <td className="p-6 text-slate-600 font-medium">{item[1]}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Download Button for Pellets */}
                    <div className="mt-12 text-center">
                        <a
                            href="/List-of-Licensed-Pellets.pdf"
                            download
                            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            <Database size={20} />
                            Download Licensed Pellets PDF
                        </a>
                    </div>
                </div>
            </section>

            {/* List of Licensed Capsules Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-4 italic">List of Licenced Capsules</h2>
                        <div className="w-32 h-2.5 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-16">
                        {licensedCapsules.map((cat, ci) => (
                            <div key={ci} className="relative">
                                <h3 className="text-xl font-black text-primary mb-8 flex items-center gap-4">
                                    <span className="w-2 h-10 bg-accent rounded-full inline-block"></span>
                                    {cat.category}
                                </h3>

                                <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden bg-white">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-slate-50 border-b border-slate-200">
                                                <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400 w-20">S.No</th>
                                                <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400">Name of the Product</th>
                                                <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400">Available Strength (mg)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cat.items.map((item, ii) => (
                                                <tr key={ii} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                                    <td className="p-6 font-bold text-slate-400">{ii + 1}.</td>
                                                    <td className="p-6 font-bold text-primary">{item[0]}</td>
                                                    <td className="p-6 text-slate-600 font-medium">{item[1]}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download Button for Capsules */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <a
                        href="/List-of-Licensed-Capsules.pdf"
                        download
                        className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <Database size={20} />
                        Download Licensed Capsules PDF
                    </a>
                </div>
            </section>

            {/* Technical Data CTA */}
            <section className="py-24 bg-slate-900 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 blur-[120px] rounded-full"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="p-16 rounded-[4rem] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl transition-all hover:bg-white/10 group">
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Looking for a specific formulation?</h3>
                        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            We offer customized development to meet your specific therapeutic requirements and dosage forms. Partner with us for precision manufacturing.
                        </p>
                        <a href="/contact" className="bg-accent text-primary px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 inline-block shadow-xl">
                            Request Technical Data Sheet
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
