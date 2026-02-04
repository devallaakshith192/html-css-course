import React from 'react';
import { Beaker, Shield, Globe, Users } from 'lucide-react';

const features = [
    {
        title: "Advanced Manufacturing",
        description: "State-of-the-art pharmaceutical manufacturing facilities with cutting-edge technology and equipment.",
        icon: Beaker
    },
    {
        title: "Stringent Quality Control",
        description: "Rigorous testing and quality assurance at every stage ensures compliance with international standards.",
        icon: Shield
    },
    {
        title: "Global Supply Capability",
        description: "Reliable distribution network reaching customers worldwide with timely and efficient delivery.",
        icon: Globe
    },
    {
        title: "Experienced Professionals",
        description: "Expert team of scientists, pharmacists, and technicians with decades of industry experience.",
        icon: Users
    }
];

const WhyJoshika = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Why Joshika Pharma?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We are committed to delivering excellence across every aspect of our pharmaceutical operations
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-blue-50 transition-all duration-300 flex flex-col items-center text-center space-y-4">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <feature.icon className="text-primary w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyJoshika;
