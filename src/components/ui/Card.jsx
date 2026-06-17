import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const Card = ({ children, className = '', hover = true, delay = 0, ...props }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Spotlight effect coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Magnetic effect coordinates (spring for smooth return)
  const springConfig = { damping: 15, stiffness: 150, mass: 0.5 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current || !hover) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX.set(x);
    mouseY.set(y);

    // Calculate magnetic rotation (subtle)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -4; // Max rotation 4deg
    const rotateYValue = ((x - centerX) / centerX) * 4;
    
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={hover ? { rotateX, rotateY, perspective: 1000 } : {}}
      className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 ${className} ${hover ? 'transition-shadow duration-300 hover:shadow-2xl hover:border-gray-200' : ''}`}
      {...props}
    >
      {/* Spotlight gradient effect */}
      {hover && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                rgba(30, 58, 138, 0.05),
                transparent 80%
              )
            `,
          }}
        />
      )}
      
      {/* Content wrapper */}
      <div className="relative z-20 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
