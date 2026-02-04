import React from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
    usePageTitle('Contact Us');
    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        companyName: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fullName, email, companyName, subject, message } = formData;

        // Constructing Gmail compose URL
        const body = `Name: ${fullName}%0D%0AEmail: ${email}%0D%0ACompany: ${companyName}%0D%0A%0D%0AMessage: ${message}`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@joshikapharma.com&su=${encodeURIComponent(subject)}&body=${body}`;

        // Try opening Gmail, fallback to mailto
        window.open(gmailUrl, '_blank');
    };

    return (
        <div className="bg-white text-gray-900 pt-[72px]">
            {/* Page Header */}
            <div className="bg-primary py-20 text-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Get in touch with our team to discuss your pharmaceutical needs and discover how we can help.
                    </p>
                </div>
            </div>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Info */}
                        <div className="lg:w-1/3 space-y-10">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Ready to discuss your pharmaceutical needs? Our team is here to provide you with detailed information about our products and services.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Email</h4>
                                        <a href="mailto:info@joshikapharma.com" className="text-gray-600 hover:text-primary transition-colors">info@joshikapharma.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Phone</h4>
                                        <a href="tel:+918977433658" className="text-gray-600 hover:text-primary transition-colors">+91 8977433658</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Address</h4>
                                        <p className="text-gray-600">Plot No.208, 8, IDA, Phase-2, Cherlapalli<br />Hyderabad, Telangana State, India</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Business Hours</h4>
                                        <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:w-2/3 bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                                    <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="John Doe" className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white" />
                                </div>
                                <div className="flex flex-col gap-2 sm:col-span-2">
                                    <label className="text-sm font-bold text-gray-700">Company Name</label>
                                    <input type="text" name="companyName" required value={formData.companyName} onChange={handleChange} placeholder="Your Company Ltd" className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white" />
                                </div>
                                <div className="flex flex-col gap-2 sm:col-span-2">
                                    <label className="text-sm font-bold text-gray-700">Subject</label>
                                    <select
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="Product Inquiry">Product Inquiry</option>
                                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                                        <option value="Technical Support">Technical Support</option>
                                        <option value="General Information">General Information</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2 sm:col-span-2">
                                    <label className="text-sm font-bold text-gray-700">Message</label>
                                    <textarea name="message" required value={formData.message} onChange={handleChange} rows="4" placeholder="How can we help you?" className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"></textarea>
                                </div>
                                <button type="submit" className="sm:col-span-2 bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2">
                                    <Send size={20} /> Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ready to Get Started Section */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Get Started?</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Contact us today to discuss your pharmaceutical needs and discover how our expertise in Modified Release Pellets can benefit your projects.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@joshikapharma.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-12 py-4 bg-[#213b8a] text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
                        >
                            Email Us Now
                        </a>
                        <a
                            href="https://maps.app.goo.gl/6if7FesB6RqCG31i6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-12 py-4 bg-white text-[#213b8a] font-bold rounded-xl border-2 border-[#213b8a] hover:bg-blue-50 transition-all"
                        >
                            Get Location
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
