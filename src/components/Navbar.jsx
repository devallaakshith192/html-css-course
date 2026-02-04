import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'PRODUCTS', path: '/products' },
        { name: 'MANUFACTURING', path: '/manufacturing' },
        { name: 'QUALITY', path: '/quality' },
        { name: 'GALLERY', path: '/gallery' },
        { name: 'CONTACT', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 py-3 shadow-xl backdrop-blur-md' : 'bg-primary py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo Section with hexagonal logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <img
                            src="/joshika-logo.png"
                            alt="Joshika Pharma Logo"
                            className={`transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}
                        />
                        <div className="block">
                            <h1 className={`font-bold text-white leading-none transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>JOSHIKA</h1>
                            <p className={`text-blue-200 transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm'}`}>Pharma Pvt Ltd</p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {/* Nav Items */}
                        {navLinks.slice(0, 1).map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${isActive(link.path) ? 'text-accent' : 'text-blue-100 hover:text-accent'}`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* ABOUT US Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsAboutOpen(true)}
                            onMouseLeave={() => setIsAboutOpen(false)}
                        >
                            <button className={`text-sm font-semibold tracking-wide transition-colors duration-200 flex items-center gap-1 ${['/about', '/mission-vision', '/sustainability'].includes(location.pathname) ? 'text-accent' : 'text-blue-100 hover:text-accent'}`}>
                                ABOUT US <ChevronDown size={14} className={`transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`absolute left-0 mt-0 w-48 bg-white shadow-2xl rounded-md transition-all duration-300 py-2 z-50 ${isAboutOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                <Link to="/about" className="block px-4 py-2 text-sm font-medium text-primary hover:bg-blue-50 hover:text-accent transition-colors duration-200">About Joshika</Link>
                                <Link to="/mission-vision" className="block px-4 py-2 text-sm font-medium text-primary hover:bg-blue-50 hover:text-accent transition-colors duration-200">M & V</Link>
                                <Link to="/sustainability" className="block px-4 py-2 text-sm font-medium text-primary hover:bg-blue-50 hover:text-accent transition-colors duration-200">Sustainability</Link>
                            </div>
                        </div>

                        {navLinks.slice(1).map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${isActive(link.path) ? 'text-accent' : 'text-blue-100 hover:text-accent'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <button onClick={toggleMenu} className="lg:hidden text-white p-2 hover:bg-primary-dark rounded-md transition-colors">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`lg:hidden bg-primary overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100 border-t border-blue-800' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 py-6 space-y-4">
                    {navLinks.slice(0, 1).map((link) => (
                        <Link key={link.name} to={link.path} onClick={toggleMenu} className={`block font-semibold ${isActive(link.path) ? 'text-accent' : 'text-blue-100'}`}>{link.name}</Link>
                    ))}
                    <div className="space-y-2">
                        <p className="text-blue-300 text-xs font-bold tracking-widest uppercase">About Us</p>
                        <Link to="/about" onClick={toggleMenu} className="block pl-4 text-blue-100 hover:text-accent">About Joshika</Link>
                        <Link to="/mission-vision" onClick={toggleMenu} className="block pl-4 text-blue-100 hover:text-accent">M & V</Link>
                        <Link to="/sustainability" onClick={toggleMenu} className="block pl-4 text-blue-100 hover:text-accent">Sustainability</Link>
                    </div>
                    {navLinks.slice(1).map((link) => (
                        <Link key={link.name} to={link.path} onClick={toggleMenu} className={`block font-semibold ${isActive(link.path) ? 'text-accent' : 'text-blue-100'}`}>{link.name}</Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
