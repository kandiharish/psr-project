import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

const Preloader = ({ onVideoEnd }) => {
  const videoRef = React.useRef(null);

  useEffect(() => {
    // Attempt to play video instantly with sound.
    // WARNING: Modern browsers (Chrome, Safari) strictly block autoplay with sound
    // unless the user has previously interacted with the webpage. 
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error("Audio autoplay blocked by browser:", e));
    }
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* The Video Layer */}
        <motion.video 
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={onVideoEnd}
          className="absolute inset-0 w-full h-full object-cover pointer-events-auto"
          onClick={(e) => {
            e.target.muted = !e.target.muted;
          }}
        >
          <source src="/logo formation video.mp4" type="video/mp4" />
        </motion.video>
      </div>
    </motion.div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  // Fallback timer in case video fails to load
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (loading) {
        setLoading(false);
      }
    }, 15000); // Allow up to 15 seconds for the full video to play
    
    return () => clearTimeout(fallbackTimer);
  }, [loading]);

  const handleVideoEnd = () => {
    // Immediately remove preloader when video ends
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <Preloader onVideoEnd={handleVideoEnd} />
        )}
      </AnimatePresence>

      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Layout>
          <Home />
        </Layout>
      </div>
    </>
  );
};

export default App;
