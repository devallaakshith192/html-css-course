import React from 'react';

const CTA = () => {
    return (
        <section className="py-20 md:py-24 bg-gradient-to-r from-primary to-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-8 text-center">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Looking for a reliable pharmaceutical partner?</h2>
                        <p className="text-lg md:text-xl text-blue-100">Partner with Joshika Pharma for quality, compliance, and consistency.</p>
                    </div>
                    <a href="/contact">
                        <button className="bg-accent hover:bg-accent-dark text-primary font-bold text-lg px-10 py-6 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-md">
                            Enquire Now
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
