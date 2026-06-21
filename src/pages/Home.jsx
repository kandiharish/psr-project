import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Users, GraduationCap, Leaf, Droplet, Activity, Quote, Sprout, TreePine, BookOpen, ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import Gallery from '../components/ui/Gallery';
import MomentsOfImpact from '../components/layout/MomentsOfImpact';
import { handleDonateClick } from '../utils/payment';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Staggered text variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, staggerChildren: 0.05 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const headline = "Empowering Lives Through Education, Health, Nutrition & Compassion";

  return (
    <div className="flex flex-col w-full overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#051124] overflow-hidden perspective-1000">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-black/70 z-10"></div>
        
        {/* Parallax Video Background */}
        <motion.div 
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ y: yImage }}
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src="/Create_a_cinematic_looping_bac.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        {/* Floating Particles/Breathing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[120px] z-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, -70, 0],
            y: [0, 70, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <motion.div 
          className="container mx-auto px-4 z-20 text-center flex flex-col items-center mt-12"
          style={{ y: yText, opacity: opacityText }}
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 mb-6"
          >
            <span className="text-secondary font-heading text-sm md:text-base font-semibold tracking-[0.2em] uppercase">Inspire</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-white/40"></span>
            <span className="text-white font-heading text-sm md:text-base font-semibold tracking-[0.2em] uppercase">Support</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-white/40"></span>
            <span className="text-white font-heading text-sm md:text-base font-semibold tracking-[0.2em] uppercase">Transform</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight max-w-4xl tracking-tight"
          >
            Empowering Lives Through <span className="text-secondary font-extrabold drop-shadow-md">Education, Health, Nutrition & Compassion</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-gray-200 mb-10 max-w-3xl font-body relative leading-relaxed font-light"
          >
            Continuing a legacy of kindness, dignity, and service by supporting children, empowering girls, improving community health, promoting nutrition, and protecting our environment.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col items-center gap-4 relative z-30"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#donate" onClick={handleDonateClick} className="group px-8 py-3 bg-secondary text-primary rounded-full font-bold text-base hover:bg-yellow-400 hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg">
                <span>Donate Now</span>
                <Heart size={16} className="fill-primary" />
              </a>
              <a href="#programs" className="group px-8 py-3 bg-transparent border border-white/40 rounded-full text-white font-semibold text-base hover:bg-white/10 hover:border-white transition-all duration-300 text-center">
                <span>Join Our Mission</span>
              </a>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-2 text-xs md:text-sm text-gray-300/80 italic font-body"
            >
              100% of your contribution goes directly to the field.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Foundation & Legacy Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-[#F8F6F0] relative z-20 min-h-screen flex flex-col justify-center items-center border-b border-gray-200">
        {/* Subtle Background Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10 flex flex-col items-center justify-center h-full">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 w-full overflow-hidden max-w-5xl mx-auto"
          >
            <div className="w-full relative py-6 overflow-hidden">
              <div
                className="flex w-max gap-8 animate-marquee py-4"
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-8 flex-shrink-0">
                    {/* Item 1 */}
                    <div className="flex-shrink-0 w-[18rem] bg-white rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-100/80 flex flex-col overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.06)] hover:border-secondary/30">
                      <div className="h-[16rem] overflow-hidden relative">
                        <img src="/Speaker.webp" alt="Shri Gaddam Prasad Garu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 left-4 right-4 text-left">
                          <p className="text-white text-xs font-semibold drop-shadow-md">On June 20, 2026</p>
                          <p className="text-gray-200 text-[10px] italic drop-shadow-md">Birthday of Pandu Sheshagiri Rao</p>
                        </div>
                      </div>
                      <div className="p-4 text-center bg-white flex-1 flex flex-col justify-center">
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Logo Launch By</p>
                        <h4 className="text-base font-heading font-bold text-primary mb-0.5 leading-tight group-hover:text-secondary transition-colors duration-300">Shri Gaddam Prasad Garu</h4>
                        <p className="text-xs font-body text-secondary font-bold">Speaker</p>
                        <p className="text-[10px] font-body text-gray-600 mt-0.5">Telangana State Legislative Assembly</p>
                      </div>
                    </div>
                    
                    {/* Item 2 */}
                    <div className="flex-shrink-0 w-[18rem] bg-white rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-100/80 flex flex-col overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.06)] hover:border-secondary/30">
                      <div className="h-[16rem] overflow-hidden relative">
                        <img src="/speaker2.webp" alt="Shri Gaddam Prasad Garu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 left-4 right-4 text-left">
                          <p className="text-white text-xs font-semibold drop-shadow-md">On June 20, 2026</p>
                          <p className="text-gray-200 text-[10px] italic drop-shadow-md">Birthday of Pandu Sheshagiri Rao</p>
                        </div>
                      </div>
                      <div className="p-4 text-center bg-white flex-1 flex flex-col justify-center">
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Logo Launch By</p>
                        <h4 className="text-base font-heading font-bold text-primary mb-0.5 leading-tight group-hover:text-secondary transition-colors duration-300">Shri Gaddam Prasad Garu</h4>
                        <p className="text-sm font-body text-secondary font-bold">Speaker</p>
                        <p className="text-[10px] font-body text-gray-600 mt-0.5">Telangana State Legislative Assembly</p>
                      </div>
                    </div>
 
                    {/* Item 3 */}
                    <div className="flex-shrink-0 w-[18rem] bg-white rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-100/80 flex flex-col overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.06)] hover:border-secondary/30">
                      <div className="h-[16rem] overflow-hidden relative">
                        <img src="/MV Gona Reddy .webp" alt="MV Gona Reddy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 left-4 right-4 text-left">
                          <p className="text-white text-xs font-semibold drop-shadow-md">On June 20, 2026</p>
                          <p className="text-gray-200 text-[10px] italic drop-shadow-md">Birthday of Pandu Sheshagiri Rao</p>
                        </div>
                      </div>
                      <div className="p-4 text-center bg-white flex-1 flex flex-col justify-center">
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Logo Launch By</p>
                        <h4 className="text-base font-heading font-bold text-primary mb-0.5 leading-tight group-hover:text-secondary transition-colors duration-300">MV Gona Reddy</h4>
                        <p className="text-sm font-body text-secondary font-bold">CEO</p>
                        <p className="text-[10px] font-body text-gray-600 mt-0.5">Prateek Foundation</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block relative mt-2"
          >
            <h4 className="text-secondary font-heading text-sm md:text-base font-bold uppercase tracking-[0.3em]">
              Why This Foundation Exists
            </h4>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
              className="absolute -bottom-2 left-0 w-full h-1 bg-secondary origin-left"
            ></motion.div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-heading font-bold text-primary mb-4"
          >
            In Loving Memory of <br/>
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="inline-block mt-2 pb-1 pt-1 px-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-500 bg-[length:200%_auto] italic font-extrabold tracking-wide drop-shadow-sm leading-relaxed"
            >
              Pandu Seshagiri Rao
            </motion.span>
          </motion.h2>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-3xl font-heading font-light text-primary leading-[1.2] mb-6 tracking-tight"
          >
            "Because kindness should not end with a lifetime."
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-2 relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            
            <div className="relative z-10 text-center pt-6 pb-2">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-serif italic text-primary leading-relaxed drop-shadow-sm max-w-4xl mx-auto font-light">
                <span className="font-heading font-bold text-secondary not-italic text-xs md:text-sm block mb-3 uppercase tracking-[0.25em]">Today, his legacy lives on</span>
                through every <span className="text-amber-500 font-normal">child educated</span>, 
                every <span className="text-amber-500 font-normal">girl empowered</span>, 
                every <span className="text-amber-500 font-normal">family supported</span>, 
                and every <span className="text-amber-500 font-normal">community transformed</span>.
              </h3>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Message from the Founder Section */}
      <section className="py-24 bg-[#F8F6F0] relative z-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 items-stretch">
              <div className="md:col-span-2 relative h-[400px] md:h-auto overflow-hidden group">
                <img loading="lazy" src="/founder pic.webp" alt="Founder" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white z-10 w-full">
                  <h3 className="text-2xl font-heading font-bold mb-1">Message from the Founder</h3>
                  <div className="w-10 h-1 bg-secondary rounded-full mt-2 mb-2"></div>
                  <p className="text-sm font-body text-gray-200 uppercase tracking-widest">PSR Memorial Foundation</p>
                </div>
              </div>
              <div className="md:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 leading-tight relative z-10">
                  Compassion is an action that can permanently change the trajectory of someone's life.
                </h2>
                <div className="space-y-4 text-text/80 font-serif leading-relaxed mb-10 relative z-10">
                  <p>
                    When the PSR Memorial Foundation was established, it was born out of profound loss, but fueled by an unwavering commitment to continue a legacy of boundless kindness. We believe that every child deserves an education, every community deserves access to healthcare, and no one should sleep hungry.
                  </p>
                  <p>
                    Through holistic empowerment and direct support, we are not just providing temporary relief, we are building a foundation for sustainable, generational change. I personally invite you to join us in this mission of hope, dignity, and transformational impact. Together, we can build a world that is gentler, more equitable, and deeply compassionate.
                  </p>
                </div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Heart size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-signature font-bold text-primary text-3xl md:text-4xl mt-1">Princy Selsiya</h4>
                    <p className="text-xs text-gray-500 font-body uppercase tracking-wider">Founder & Chairperson</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="programs" className="py-20 bg-light-bg relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3">Where We Put Our Hearts</h2>
              <p className="text-sm font-body text-muted-text">We work across multiple dimensions of social development to create holistic, long-lasting impact.</p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0 text-xs font-semibold group flex items-center gap-2">
              View All Programs
              <motion.span 
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
              >→</motion.span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Education Support', desc: 'Providing scholarships, learning materials, and infrastructure for underprivileged children.', icon: GraduationCap, image: '/3 education.webp' },
              { title: 'Healthcare Assistance', desc: 'Organizing medical camps and providing essential healthcare access to remote communities.', icon: Activity, image: '/3 health camp.webp' },
              { title: 'Women Empowerment', desc: 'Skill development and advocacy programs to ensure equal opportunities for women.', icon: Users, image: '/girl child empowerment 3.webp' },
              { title: 'Food & Nutrition', desc: 'Ensuring zero hunger by distributing nutritious meals to marginalized communities.', icon: Droplet, image: '/food erving nutrition 3.webp' },
              { title: 'Volunteer Engagement', desc: 'Mobilizing passionate individuals to create grassroots impact and community support.', icon: Heart, image: '/3 volunterr experience.webp' },
              { title: 'Girl Child Education', desc: 'Dedicated programs focusing on removing barriers to education for young girls.', icon: BookOpen, image: '/educating girl child.webp' }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl group h-80 shadow-xl cursor-pointer border border-white/10"
              >
                <img loading="lazy" src={area.image} alt={area.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082f6e]/95 via-[#082f6e]/60 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
                
                <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-primary text-white transition-all duration-300 transform group-hover:-translate-y-2 shadow-lg">
                    <area.icon size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-secondary transition-colors transform group-hover:-translate-y-2 duration-300 drop-shadow-md">{area.title}</h3>
                  <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-sm font-body text-blue-50 leading-relaxed drop-shadow-sm mt-2">{area.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Media Highlight Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-[#F8F6F0] relative z-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side: Modern Glassmorphism Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group order-2 lg:order-1"
            >
              {/* Glassmorphism Container */}
              <div className="relative aspect-square md:aspect-auto md:h-[550px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white/40 backdrop-blur-2xl border border-white/60 p-3 lg:p-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    src="/psr nanaku image.webp" 
                    alt="Podcast Feature - Nannaku Prematho" 
                    className="w-full h-full object-cover object-top z-0"
                  />
                  

                </div>
              </div>
              
              {/* Decorative Blur Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            {/* Right Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 bg-red-500/10 text-red-600 border border-red-500/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Featured Media Highlight
                </span>
                <span className="text-sm font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">19-06-2026</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-primary mb-6 leading-[1.2] tracking-tight">
                నాన్నకు ప్రేమతో... <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-secondary pb-2 inline-block text-2xl md:text-3xl mt-2 font-bold tracking-normal">
                  CHARCHA With Real Leaders - 4 | Fathers Day Special
                </span>
              </h2>
              
              <div className="space-y-5 font-serif text-text/80 text-base md:text-lg leading-relaxed mb-10">
                <p>
                  In a heartfelt <span className="font-semibold text-primary">Father's Day Special</span> on <span className="font-semibold italic text-primary">Charcha with Real Leader</span> (Episode 04), our Founder, <span className="font-semibold text-primary">Princy Selsiya</span>, sits down with host Vinil Reddy to share the emotional and inspiring origin of the PSR Memorial Foundation.
                </p>
                <p>
                  Discover the profound story of a lifelong commitment to compassion, an unexpected loss, and how one father's dream for his daughter transformed into a powerful legacy of empowerment, education, and community service.
                </p>
              </div>

              {/* Platform Buttons */}
              <div className="flex flex-row flex-wrap items-center gap-3 pt-4 border-t border-gray-200/60 mt-4">
                <a href="https://www.talradio.org/podcasts/6a34d2f24f72892852c5242f" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#E50914] text-white rounded-xl font-bold hover:bg-[#b80710] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><circle cx="12" cy="12" r="3"/><path d="M12 6a6.007 6.007 0 0 0-6 6h2a4.005 4.005 0 0 1 4-4v-2zm4.243 1.757l1.414-1.414A7.962 7.962 0 0 0 12 4v2a5.97 5.97 0 0 1 4.243 1.757z"/></svg>
                  TAL Radio
                </a>
                <a href="https://open.spotify.com/episode/5nID0fV3QroFIJLl9QQSPe?si=jzHrE_TCTqqESy-MwRrmvA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1DB954] text-white rounded-xl font-bold hover:bg-[#189945] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.836 17.347c-.244.397-.751.528-1.144.283-3.136-1.916-7.078-2.348-11.716-1.285-.452.103-.9-.176-1.003-.628-.103-.452.176-.9.628-1.003 5.068-1.159 9.426-.677 12.951 1.48.396.242.527.75.284 1.153zm1.428-3.189c-.305.495-.945.659-1.439.354-3.593-2.206-9.088-2.825-13.065-1.547-.561.181-1.15-.126-1.332-.687-.181-.561.126-1.15.687-1.332 4.549-1.461 10.603-.764 14.793 1.808.495.305.659.944.356 1.404zm.147-3.344c-4.29-2.548-11.365-2.782-15.485-1.543-.68.204-1.4-.183-1.604-.863-.204-.68.183-1.4.863-1.604 4.75-1.428 12.564-1.161 17.514 1.782.617.367.821 1.166.453 1.783-.367.617-1.165.822-1.741.445z"/></svg>
                  Spotify
                </a>
                <a href="https://podcasts.apple.com/in/podcast/id1607828622?i=1000773369769" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#B150E2] text-white rounded-xl font-bold hover:bg-[#9643bf] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z"/></svg>
                  Apple Podcasts
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Interactive Experience: One Act of Kindness */}
      <section className="py-24 bg-primary text-white relative z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-16"
          >
            One Act of Kindness
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
            {[
              { icon: Sprout, label: "Seed" },
              { icon: Leaf, label: "Plant" },
              { icon: TreePine, label: "Tree" },
              { icon: Users, label: "Community" },
              { icon: BookOpen, label: "Children Learning" }
            ].map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:border-secondary transition-colors duration-500 shadow-lg">
                    <step.icon size={28} className="text-white group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-heading text-xs uppercase tracking-wider font-semibold text-blue-200 group-hover:text-white transition-colors">{step.label}</span>
                </motion.div>
                {index < 4 && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "auto" }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.1, duration: 0.5 }}
                    className="hidden md:block w-12 h-px bg-gradient-to-r from-secondary to-transparent"
                  ></motion.div>
                )}
                {index < 4 && (
                  <div className="md:hidden h-8 w-px bg-gradient-to-b from-secondary to-transparent my-2"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full bg-white flex items-center justify-center p-3 mb-10 shadow-2xl">
               <img loading="lazy" src="/psr_logo.webp" alt="PSR Logo" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl md:text-2xl font-heading italic font-light text-white leading-relaxed">
              "One act of kindness can transform generations."
            </h3>
          </motion.div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-24 bg-primary relative z-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051124]/95 via-primary/95 to-[#051124]/95 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h4 className="text-secondary font-heading text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-4">Our Enduring Impact</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">A Legacy of Light</h2>
            <p className="text-base md:text-lg font-body text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              We measure our success not in numbers, but in smiles restored, futures secured, and communities transformed by compassion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: 'Illuminating Minds', desc: 'Bringing the light of education to children who dare to dream beyond their circumstances.', image: '/education.webp' },
              { title: 'Uplifting Women', desc: 'Fostering independence, dignity, and unstoppable confidence in young girls.', image: '/girls education.webp' },
              { title: 'Healing Communities', desc: 'Delivering vital care, nourishment, and hope to families in their most vulnerable hours.', image: '/healthcare camp.webp' }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative overflow-hidden rounded-3xl group h-[400px] md:h-[450px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10"
              >
                <img loading="lazy" 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 z-0 grayscale-[30%] group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">{pillar.title}</h3>
                  <div className="w-12 h-1 bg-secondary rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                  <p className="text-sm md:text-base font-body text-gray-200 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories of Change Section */}
      <section className="py-12 md:py-16 bg-white relative z-20 flex items-center min-h-[80vh]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 bg-light-bg rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100"
          >
            <div className="w-full lg:w-1/3 relative flex items-center justify-center">
              <div className="w-full max-w-[320px] lg:max-w-full rounded-2xl overflow-hidden shadow-xl relative bg-white p-2 border border-gray-100 group">
                <div className="overflow-hidden rounded-xl relative">
                  <img loading="lazy" src="/stories%20of%20change.webp" alt="Determination to Dreams" className="w-full h-[300px] md:h-[350px] lg:h-[420px] object-cover object-center scale-110 transition-transform duration-700 group-hover:scale-125" />
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col justify-center space-y-4">
              <div>
                <h3 className="text-secondary font-heading text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-1">Stories of Change</h3>
                <h2 className="text-xl md:text-3xl font-heading font-bold text-primary leading-tight">From Determination to Dreams</h2>
              </div>
              
              <div className="space-y-3 text-sm md:text-base text-text/80 font-serif leading-relaxed">
                <p>
                  Growing up, my father, <span className="font-semibold text-primary">Pandu Seshagiri Rao</span>, held a profound belief: a girl's education holds the power to transform not just a single life, but entire generations. While society often prioritized sons, my father dreamt differently.
                </p>
                <p>
                  When our family faced financial hardships, he made the difficult choice to have my brother work in a photography studio, all to ensure my education would never stop. His strong will and unwavering conviction in my potential became the foundation of my success.
                </p>
                <p>
                  Because he dreamt bigger for his daughter than the world expected, I am now pursuing my Master's degree. His sacrifice was the greatest lesson in compassion and equity I ever received.
                </p>
                <div className="p-4 bg-white rounded-xl border-l-4 border-secondary shadow-sm my-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <p className="italic text-gray-700 text-sm font-medium relative z-10">
                    His journey taught me that when a father champions his daughter's education, he doesn't just change her future, he inspires a legacy.
                  </p>
                </div>
                <p className="font-heading font-bold text-primary text-base md:text-lg uppercase tracking-wide">
                  Every girl deserves a champion. Every dream deserves a chance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MomentsOfImpact />

      {/* Imagine The Difference Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        {/* Cinematic Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img loading="lazy" 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
            alt="Imagine The Difference" 
            className="w-full h-full object-cover filter blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-[#082f6e]/80 to-[#051124]/95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-100 mb-6 tracking-tight drop-shadow-lg">
              Imagine The Difference
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full shadow-[0_0_15px_rgba(251,191,36,0.6)]"></div>
          </motion.div>

          <div className="space-y-12 md:space-y-16 py-8">
            {[
              "Imagine a child returning to school.",
              "Imagine a girl believing in her future.",
              "Imagine a family receiving care when they need it most.",
              "Imagine a community growing stronger together."
            ].map((text, index, array) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 150, filter: 'blur(15px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center"
                >
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif italic font-light text-white leading-relaxed drop-shadow-2xl tracking-wide">
                    {text}
                  </h3>
                </motion.div>
                {index < array.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: "auto" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="w-px h-16 md:h-24 bg-gradient-to-b from-secondary to-transparent"></div>
                    <ChevronDown className="text-secondary -mt-4 animate-pulse" size={32} strokeWidth={1.5} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* What Your Support Creates Section */}
      <section id="impact-outcomes" className="py-24 bg-gradient-to-b from-white to-[#F8F6F0] relative z-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 text-center max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full border border-gray-100 shadow-md bg-white p-3 mb-8"
          >
            <img loading="lazy" src="/psr_logo.webp" alt="PSR Logo" className="w-full h-full object-contain" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6"
          >
            What Your Support Creates
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg font-body text-text/70 max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Your generosity goes beyond transactions, it creates lasting transformation. Join us in building a future where every individual has the opportunity to thrive.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { outcome: "A Child Learns", desc: "Access to education, breaking the cycle of poverty.", icon: BookOpen },
              { outcome: "A Girl Succeeds", desc: "Empowerment, skills, and the confidence to lead.", icon: Users },
              { outcome: "A Family Receives Care", desc: "Vital medical support during their most vulnerable times.", icon: Activity },
              { outcome: "A Community Thrives", desc: "Sustainable development and collective resilience.", icon: Heart }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-secondary/30 transition-all duration-500 group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-light-bg group-hover:bg-secondary/10 flex items-center justify-center mb-6 transition-colors duration-500">
                  <card.icon size={28} className="text-secondary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">{card.outcome}</h3>
                <p className="text-sm font-body text-gray-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" className="w-full sm:w-auto px-12 py-4 bg-primary hover:bg-blue-800 text-white shadow-xl hover:shadow-2xl relative overflow-hidden group rounded-full">
              <span className="relative z-10 font-bold tracking-wide text-lg">Support Our Mission</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] z-0"></div>
            </Button>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[11px] font-body text-gray-400 uppercase tracking-widest font-semibold">
              <span className="flex items-center gap-1"><Heart size={12} className="text-secondary" /> Transformational Impact</span>
              <span className="hidden sm:inline">•</span>
              <span>100% Transparency</span>
              <span className="hidden sm:inline">•</span>
              <span>80G Tax Exemption</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
