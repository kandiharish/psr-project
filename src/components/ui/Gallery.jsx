import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

// Using high-quality unsplash placeholders relevant to the categories
const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop', category: 'Education Support', alt: 'Children learning in a classroom' },
  { id: 2, src: 'https://images.unsplash.com/photo-1593113565637-ea96e6d1c290?q=80&w=2070&auto=format&fit=crop', category: 'Health Initiatives', alt: 'Medical professional helping patient' },
  { id: 3, src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop', category: 'Environmental Activities', alt: 'Planting trees' },
  { id: 4, src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop', category: 'Community Service', alt: 'Volunteers organizing supplies' },
  { id: 5, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop', category: 'Education Support', alt: 'School supplies' },
  { id: 6, src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop', category: 'Program Activities', alt: 'Community gathering' },
];

const categories = ['All', 'Education Support', 'Health Initiatives', 'Environmental Activities', 'Community Service', 'Program Activities'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all duration-300 ${
              filter === cat 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-white text-muted-text hover:bg-gray-100 hover:text-text border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow break-inside-avoid"
              onClick={() => setSelectedImage(image)}
            >
              <img loading="lazy" 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <ZoomIn className="text-white mb-2" size={24} />
                <span className="text-white font-heading font-bold text-sm">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <img loading="lazy" 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h4 className="text-white font-heading font-bold text-lg">{selectedImage.category}</h4>
                <p className="text-gray-400 font-body text-sm mt-1">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
