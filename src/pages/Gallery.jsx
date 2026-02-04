import React, { useState } from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { X, Maximize2, ArrowLeft } from 'lucide-react';

const galleryData = {
    "Manufacturing Facility": [
        { id: 'm-main', image: '/images/gallery-main-m.png', title: 'Manufacturing Operations' },
        { id: 'm-2', image: '/images/gallery-m-2.jpg', title: 'Coating Pan System' },
        { id: 'm-3', image: '/images/gallery-m-3.jpg', title: 'Vibratory Sifter' },
        { id: 'm-4', image: '/images/gallery-m-4.jpg', title: 'Pulverizing Unit' },
        { id: 'm-5', image: '/images/gallery-m-5.jpg', title: 'Rapid Drying Oven' },
        { id: 'm-6', image: '/images/gallery-m-6.jpg', title: 'Industrial Cabinet Dryer' },
        { id: 'm-7', image: '/images/gallery-m-7.jpg', title: 'Precision Coating Unit' },
        { id: 'm-8', image: '/images/gallery-m-8.jpg', title: 'High-Capacity Blender' },
        { id: 'm-9', image: '/images/gallery-m-9.jpg', title: 'Advanced Processing Unit' },
        { id: 'm-10', image: '/images/gallery-m-10.jpg', title: 'Industrial Processing System' },
        { id: 'm-11', image: '/images/gallery-m-11.jpg', title: 'Heavy Manufacturing Unit' },
    ],
    "Quality Assurance": [
        { id: 'qa-main', image: '/images/gallery-main-qa.jpg', title: 'Quality Analysis Center' },
        { id: 'qa-1', image: '/images/gallery-qa-1.jpg', title: 'HPLC Analysis Stack' },
        { id: 'qa-2', image: '/images/gallery-qa-2.jpg', title: 'Dissolution Testing Apparatus' },
        { id: 'qa-3', image: '/images/gallery-qa-3.jpg', title: 'Automated QC Analysis' },
    ],
    "Research & Development": [
        { id: 'r-main', image: '/images/gallery-main-r.jpg', title: 'Research & Innovation Lab' },
        { id: 'r-1', image: '/images/gallery-r-1.jpg', title: 'R&D Extrusion Line' },
        { id: 'r-2', image: '/images/gallery-r-2.jpg', title: 'Spheronization System' },
        { id: 'r-3', image: '/images/gallery-r-3.jpg', title: 'Fluid Bed Coating Unit' },
        { id: 'r-4', image: '/images/gallery-r-4.jpg', title: 'Advanced Research Unit' },
    ],
    "Storage Facility": [
        { id: 's-main', image: '/images/gallery-main-s.jpg', title: 'Storage & Logistics Facility' },
        { id: 's-1', image: '/images/gallery-s-1.jpg', title: 'Raw Material Storage (Drums)' },
        { id: 's-2', image: '/images/gallery-s-2.jpg', title: 'Controlled Temperature Freezer' },
        { id: 's-3', image: '/images/gallery-s-3.jpg', title: 'Inventory Racking System' },
        { id: 's-4', image: '/images/gallery-s-4.jpg', title: 'Material Inventory Management' },
        { id: 's-5', image: '/images/gallery-s-5.jpg', title: 'High-Density Racking' },
        { id: 's-6', image: '/images/gallery-s-6.jpg', title: 'Warehouse Storage Section' },
        { id: 's-7', image: '/images/gallery-s-7.jpg', title: 'Finished Goods Storage' },
    ]
};

const Gallery = () => {
    usePageTitle('Gallery');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedImg, setSelectedImg] = useState(null);

    const categories = Object.keys(galleryData).map(title => ({
        title,
        image: galleryData[title][0].image
    }));

    return (
        <div className="bg-white pt-[72px]">
            {/* Lightbox Modal */}
            {selectedImg && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
                    <button
                        onClick={() => setSelectedImg(null)}
                        className="absolute top-6 right-6 text-white hover:text-accent transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md"
                    >
                        <X size={32} />
                    </button>
                    <div className="max-w-5xl w-full">
                        <img src={selectedImg.image} alt={selectedImg.title} className="w-full h-auto rounded-2xl shadow-2xl" />
                        <p className="text-white text-center mt-6 text-2xl font-bold">{selectedImg.title}</p>
                    </div>
                </div>
            )}

            {/* Page Header */}
            <div className="bg-primary py-20 text-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Gallery</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Explore our state-of-the-art infrastructure and facilities.
                    </p>
                </div>
            </div>

            <section className="py-20 min-h-[600px]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {!selectedCategory ? (
                        <>
                            <p className="text-lg text-gray-600 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
                                Witness our commitment to excellence through our manufacturing units, quality control laboratories, research capabilities, and efficient storage infrastructure.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                {categories.map((cat, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setSelectedCategory(cat.title)}
                                        className="group relative rounded-3xl overflow-hidden shadow-xl aspect-video cursor-pointer border border-gray-100"
                                    >
                                        <img
                                            src={cat.image}
                                            alt={cat.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 group-hover:from-primary/80 transition-all duration-500">
                                            <div className="flex justify-between items-end w-full">
                                                <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
                                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                                    <Maximize2 size={24} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div>
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors mb-12"
                            >
                                <ArrowLeft size={20} /> Back to Categories
                            </button>

                            <h2 className="text-3xl font-bold text-primary mb-12 border-b-2 border-accent pb-4 inline-block">
                                {selectedCategory}
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {galleryData[selectedCategory]
                                    .filter(img => !img.id.includes('main'))
                                    .map((img) => (
                                        <div
                                            key={img.id}
                                            onClick={() => setSelectedImg(img)}
                                            className="group relative rounded-xl overflow-hidden aspect-square shadow-md cursor-pointer hover:shadow-2xl transition-all"
                                        >
                                            <img src={img.image} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <Maximize2 className="text-white" size={32} />
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
