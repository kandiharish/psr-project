import React from 'react';
import { motion } from 'framer-motion';

const impactStories = [
  {
    id: 1,
    image: '/WhatsApp Image 2026-06-17 at 11.57.31 PM.webp',
    category: 'Student Support',
  },
  {
    id: 2,
    image: '/WhatsApp Image 2026-06-17 at 11.57.31 PM (1).webp',
    category: 'Donor Recognition',
  },
  {
    id: 3,
    image: '/WhatsApp Image 2026-06-17 at 11.57.31 PM (2).webp',
    category: 'Student Support',
  },
  {
    id: 4,
    image: '/WhatsApp Image 2026-06-17 at 11.57.32 PM.webp',
    category: 'Donor Recognition',
  },
  {
    id: 5,
    image: '/WhatsApp Image 2026-06-17 at 11.57.32 PM (1).webp',
    category: 'Student Support',
  },
  {
    id: 6,
    image: '/WhatsApp Image 2026-06-17 at 11.57.32 PM (2).webp',
    category: 'Donor Recognition',
  }
];

// Triplicate the array to create a seamless infinite loop
const duplicatedStories = [...impactStories, ...impactStories, ...impactStories];

const MomentsOfImpact = () => {
  return (
    <section id="gallery" className="py-24 bg-[#F8F6F0] relative z-20 overflow-hidden border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6 tracking-tight">
            Moments Created by Our Father
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-500 font-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Every photograph is a testament to his enduring compassion and lifelong vision. Witness the lives touched, the futures brightened, and the incredible partners who help carry his legacy forward.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden flex pb-12 pt-4">
        <motion.div 
          className="flex gap-8 w-max pr-8" // w-max ensures it takes up the full width of all items
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 35, // Adjust this for faster/slower scrolling
            ease: "linear",
          }}
        >
          {duplicatedStories.map((story, index) => (
            <div 
              key={`${story.id}-${index}`} 
              className="relative w-[280px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden shadow-lg border border-gray-200 group bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(245,158,11,0.2)] hover:border-amber-400/50"
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                {/* Shiny hover effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_1.5s_infinite] z-20 pointer-events-none"></div>

                <img 
                  loading="lazy"
                  src={story.image} 
                  alt="Impact Story"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Subtle gradient overlay for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MomentsOfImpact;
