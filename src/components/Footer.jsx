import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Contact Us */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <MapPin className="h-6 w-6 mr-2" />
                            Contact Us
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold">Joshika Pharma Pvt. Ltd</p>
                                <p className="text-gray-300">
                                    Plot No.208, 8, IDA, Phase-2, Cherlapalli<br />
                                    Hyderabad, Telangana State, India
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <Mail className="h-5 w-5 mr-2" />
                                <span className="text-xl font-semibold">info@joshikapharma.com</span>
                            </div>

                            <div className="space-y-2">
                                <p className="font-semibold">Ms. Usha Reddy</p>
                                <div className="flex items-center text-gray-300">
                                    <Phone className="h-4 w-4 mr-2" />
                                    <span>+91 8977433658</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <Mail className="h-4 w-4 mr-2" />
                                    <span>ushareddy@joshikapharma.com</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="space-y-2">
                                <p className="font-semibold">Mr. Srinivas</p>
                                <div className="flex items-center text-gray-300">
                                    <Phone className="h-4 w-4 mr-2" />
                                    <span>+91 9908173912</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <Mail className="h-4 w-4 mr-2" />
                                    <span>srinivas@joshikapharma.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <nav className="space-y-3">
                            <Link to="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">About Us</Link>
                            <Link to="/products" className="block text-gray-300 hover:text-white transition-colors duration-200">Products</Link>
                            <Link to="/manufacturing" className="block text-gray-300 hover:text-white transition-colors duration-200">Manufacturing</Link>
                            <Link to="/quality" className="block text-gray-300 hover:text-white transition-colors duration-200">Quality</Link>
                            <Link to="/gallery" className="block text-gray-300 hover:text-white transition-colors duration-200">Gallery</Link>
                            <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">Contact</Link>
                        </nav>
                    </div>
                </div>

                <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
                    <p>Copyright © 2025 Joshika Pharma Pvt Ltd. All Rights Reserved.</p>
                    <p className="mt-4 md:mt-0">Design and Developed by ProGenovaTech</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
