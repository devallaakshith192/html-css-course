import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
    const slides = [
        {
            image: '/images/hero-lab-collage.jpg',
            title: 'Innovative Pharmaceutical Solutions',
            subtitle: 'Crafting high-quality generic healthcare solutions since 2016.',
            cta: 'View Products',
            link: '/products'
        },
        {
            image: '/images/hero-scientist-machine.jpg',
            title: 'State-of-the-Art Pelletization',
            subtitle: 'Advanced facilities ensuring precision in every micro-pellet.',
            cta: 'Manufacturing',
            link: '/manufacturing'
        },
        {
            image: '/images/hero-capsule-pellets.jpg',
            title: 'Uncompromising Quality Standards',
            subtitle: 'GMP certified facilities with rigorous 5-stage testing.',
            cta: 'Our Quality',
            link: '/quality'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);

    return (
        <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-slate-900 mt-[72px]">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'}`}
                >
                    {/* Background with Zoom Effect */}
                    <div className="absolute inset-0 overflow-hidden">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-linear ${index === currentIndex ? 'scale-110' : 'scale-100'}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
                    </div>

                    {/* Content with Staggered Animation */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className={`max-w-2xl transition-all duration-1000 delay-300 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] uppercase tracking-tighter italic">
                                    {slide.title}
                                </h2>
                                <p className="text-lg md:text-2xl text-blue-100 mb-10 font-medium leading-relaxed max-w-xl">
                                    {slide.subtitle}
                                </p>
                                <div className="flex gap-4">
                                    <Link to={slide.link} className="bg-accent text-primary px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-xl">
                                        {slide.cta}
                                    </Link>
                                    <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white/20 transition-all">
                                        Inquire Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Premium Controls */}
            <div className="absolute bottom-12 right-12 z-20 flex gap-4">
                <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all group">
                    <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all group">
                    <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Counter Overlay */}
            <div className="absolute top-12 right-12 z-20 hidden md:block">
                <div className="text-white font-black text-6xl opacity-10 italic">
                    0{currentIndex + 1}
                </div>
            </div>
        </section>
    );
};

export default Hero;
