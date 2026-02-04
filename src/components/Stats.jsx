import React, { useState, useEffect, useRef } from 'react';

const StatCard = ({ label, value, emoji, targetValue }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const end = parseInt(targetValue);
            if (isNaN(end)) return;

            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isVisible, targetValue]);

    return (
        <div ref={cardRef} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[3rem] p-10 text-center transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-4 group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform"></div>
            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{emoji}</div>
            <div className="text-5xl md:text-6xl font-black text-accent mb-3 group-hover:text-primary transition-colors">
                {count}+
            </div>
            <p className="text-sm text-blue-100 font-bold uppercase tracking-widest group-hover:text-slate-500 transition-colors">{label}</p>
        </div>
    );
};

const stats = [
    { label: "Years of Experience", value: "10+", target: 10, emoji: "⏱️" },
    { label: "Products", value: "200+", target: 200, emoji: "💊" },
    { label: "Satisfied Clients", value: "150+", target: 150, emoji: "👥" },
    { label: "State-of-the-Art Units", value: "1+", target: 1, emoji: "🏭" }
];

const Stats = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-primary to-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Growth in Numbers</h2>
                    <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">Delivering quality pharmaceuticals with proven expertise</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            label={stat.label}
                            value={stat.value}
                            emoji={stat.emoji}
                            targetValue={stat.target}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
