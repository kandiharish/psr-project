import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedCounter = ({ value, label, icon: Icon, colorClass, bgClass, textColorClass = "text-text", labelColorClass = "text-muted-text", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Use spring for a bouncy, natural counting effect
  const springValue = useSpring(0, {
    damping: 40,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setTimeout(() => {
        springValue.set(value);
        setHasAnimated(true);
      }, delay * 1000);
    }
  }, [isInView, springValue, value, delay, hasAnimated]);

  const displayValue = useTransform(springValue, (current) => {
    return Math.floor(current).toLocaleString() + '+';
  });

  return (
    <div ref={ref} className="text-center p-6 flex flex-col items-center justify-center relative group h-full z-10">
      <motion.div 
        className={`w-16 h-16 rounded-full ${bgClass} ${colorClass} flex items-center justify-center mb-4 relative z-10 transition-transform duration-500`}
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ type: "spring", delay: delay + 0.2 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {/* Glow effect behind icon */}
        <div className={`absolute inset-0 rounded-full ${bgClass} opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300 -z-10`} />
        {Icon && <Icon size={32} />}
      </motion.div>
      
      <motion.h3 className={`text-3xl font-heading font-bold ${textColorClass} mb-2 tracking-tight`}>
        {displayValue}
      </motion.h3>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: delay + 0.4 }}
        className={`text-sm font-body ${labelColorClass} font-medium`}
      >
        {label}
      </motion.p>
    </div>
  );
};

export default AnimatedCounter;
