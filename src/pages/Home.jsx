import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Users, GraduationCap, Leaf, Droplet, Activity, Quote, Sprout, TreePine, BookOpen, ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import Gallery from '../components/ui/Gallery';

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
            className="flex flex-col sm:flex-row gap-4 relative z-30"
          >
            <a href="#donate" className="group px-8 py-3 bg-secondary text-primary rounded-full font-bold text-base hover:bg-yellow-400 hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg">
              <span>Donate Now</span>
              <Heart size={16} className="fill-primary" />
            </a>
            <a href="#programs" className="group px-8 py-3 bg-transparent border border-white/40 rounded-full text-white font-semibold text-base hover:bg-white/10 hover:border-white transition-all duration-300 text-center">
              <span>Join Our Mission</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Why This Foundation Exists */}
      <section className="py-32 bg-white relative z-20 flex flex-col items-center justify-center min-h-[70vh]">
        {/* Subtle Background Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 inline-block relative"
          >
            <h4 className="text-secondary font-heading text-sm md:text-base font-bold uppercase tracking-[0.3em]">
              Why This Foundation Exists
            </h4>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
              className="absolute -bottom-3 left-0 w-full h-1 bg-secondary origin-left"
            ></motion.div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-light text-primary leading-[1.2] mb-16 tracking-tight"
          >
            "Because kindness should <br className="hidden md:block"/> not end with a lifetime."
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-px h-24 bg-gradient-to-b from-secondary via-secondary/50 to-transparent mx-auto mb-16"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl font-body text-gray-500 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Through every child educated, every family supported, and every life transformed, a legacy continues.
          </motion.p>
        </div>
      </section>

      {/* Legacy Memorial Section */}
      <section className="py-20 bg-gradient-to-b from-[#FFFDF9] to-[#F8F6F0] relative z-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 inline-flex justify-center w-full"
          >
            <div className="w-full max-w-3xl h-56 md:h-80 relative rounded-2xl bg-white shadow-2xl flex items-center justify-center p-8 border border-secondary/30 group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_2s_infinite] pointer-events-none rounded-2xl z-20"></div>
              <img 
                src="/psr_logo_and_side_heading.png" 
                alt="Pandu Seshagiri Rao Memorial Foundation" 
                className="w-full h-full object-contain relative z-10"
              />
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-primary mb-12"
          >
            In Loving Memory of <br/>
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="inline-block mt-4 pb-2 pt-1 px-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-500 bg-[length:200%_auto] italic font-extrabold tracking-wide drop-shadow-sm leading-relaxed"
            >
              Pandu Seshagiri Rao
            </motion.span>
          </motion.h2>

          <div className="space-y-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 py-10 px-6 relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-primary leading-relaxed drop-shadow-sm max-w-4xl mx-auto font-light">
                  <span className="font-heading font-bold text-secondary not-italic text-sm md:text-base block mb-6 uppercase tracking-[0.25em]">Today, his legacy lives on</span>
                  through every <span className="text-amber-500 font-normal">child educated</span>, 
                  every <span className="text-amber-500 font-normal">girl empowered</span>, 
                  every <span className="text-amber-500 font-normal">family supported</span>, 
                  and every <span className="text-amber-500 font-normal">community transformed</span>.
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Founder Story Section */}
      <section id="about" className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-cream border-8 border-white group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="/psr nanaku image.jpeg" 
                  alt="Founder Story" 
                  className="w-full h-full object-contain p-4 z-0 drop-shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-secondary font-heading text-xs font-bold uppercase tracking-widest mb-2">Our Foundation Story</h4>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8">A Daughter's Promise. A Father's Legacy.</h2>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                {[
                  "A lifelong commitment to compassion and community service",
                  "Encouragement and unwavering support toward education",
                  "Dedicated support for girls and differently-abled individuals",
                  "The spiritual journey and pilgrimage dream",
                  "An unexpected and profound loss",
                  "The birth of PSR Memorial Foundation to continue his work"
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    key={i} 
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white bg-secondary/20 group-hover:bg-secondary text-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                    <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] px-4 py-3 rounded-xl border border-gray-100 bg-white shadow-sm font-body text-xs md:text-sm text-text/80 group-hover:border-secondary/30 group-hover:shadow-md transition-all duration-300">
                      {item}
                    </div>
                  </motion.div>
                ))}
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
               <img src="/psr_logo.png" alt="PSR Logo" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl md:text-2xl font-heading italic font-light text-white leading-relaxed">
              "One act of kindness can transform generations."
            </h3>
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
                <img src="/founder pic.jpeg" alt="Founder" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white z-10 w-full">
                  <h3 className="text-2xl font-heading font-bold mb-1">Message from the Founder</h3>
                  <div className="w-10 h-1 bg-secondary rounded-full mt-2 mb-2"></div>
                  <p className="text-sm font-body text-gray-200 uppercase tracking-widest">PSR Memorial Foundation</p>
                </div>
              </div>
              <div className="md:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
                <Quote size={80} className="text-secondary/10 absolute top-8 right-8" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 leading-tight relative z-10">
                  "Compassion is an action that can permanently change the trajectory of someone's life."
                </h2>
                <div className="space-y-4 text-text/80 font-body leading-relaxed mb-10 relative z-10">
                  <p>
                    When the PSR Memorial Foundation was established, it was born out of profound loss, but fueled by an unwavering commitment to continue a legacy of boundless kindness. We believe that every child deserves an education, every community deserves access to healthcare, and no one should sleep hungry.
                  </p>
                  <p>
                    Through holistic empowerment and direct support, we are not just providing temporary relief—we are building a foundation for sustainable, generational change. I personally invite you to join us in this mission of hope, dignity, and transformational impact. Together, we can build a world that is gentler, more equitable, and deeply compassionate.
                  </p>
                </div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Heart size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-primary text-lg">Selsiya</h4>
                    <p className="text-xs text-gray-500 font-body uppercase tracking-wider">Founder & Chairperson</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-20 bg-light-bg relative z-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3">Our Impact So Far</h2>
            <p className="text-sm font-body text-muted-text max-w-xl mx-auto">Together, we are creating sustainable change and building brighter futures across communities.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              { value: 5000, label: 'Students Supported', image: '/education.png' },
              { value: 10000, label: 'Girls Empowered', image: '/girls education.png' },
              { value: 500, label: 'Health Camps', image: '/healthcare camp.png' },
              { value: 50000, label: 'Meals Provided', image: '/food serving.png' },
              { value: 1200, label: 'Volunteers', image: '/volunteers.png' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl group h-64 shadow-xl border border-gray-200"
              >
                <img 
                  src={stat.image} 
                  alt={stat.label} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
                <div className="absolute inset-0 z-20 flex flex-col justify-end pb-4">
                  <AnimatedCounter
                    value={stat.value}
                    label={stat.label}
                    colorClass="text-white"
                    bgClass="transparent"
                    textColorClass="text-white drop-shadow-md"
                    labelColorClass="text-blue-100 font-semibold drop-shadow-md"
                    delay={index * 0.1}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="programs" className="py-20 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3">Our Focus Areas</h2>
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
              { title: 'Education Support', desc: 'Providing scholarships, learning materials, and infrastructure for underprivileged children.', icon: GraduationCap, image: '/3 education.png' },
              { title: 'Healthcare Assistance', desc: 'Organizing medical camps and providing essential healthcare access to remote communities.', icon: Activity, image: '/3 health camp.png' },
              { title: 'Women Empowerment', desc: 'Skill development and advocacy programs to ensure equal opportunities for women.', icon: Users, image: '/girl child empowerment 3.png' },
              { title: 'Food & Nutrition', desc: 'Ensuring zero hunger by distributing nutritious meals to marginalized communities.', icon: Droplet, image: '/food erving nutrition 3.png' },
              { title: 'Volunteer Engagement', desc: 'Mobilizing passionate individuals to create grassroots impact and community support.', icon: Heart, image: '/3 volunterr experience.png' },
              { title: 'Girl Child Education', desc: 'Dedicated programs focusing on removing barriers to education for young girls.', icon: BookOpen, image: '/educating girl child.png' }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl group h-80 shadow-xl cursor-pointer border border-white/10"
              >
                <img src={area.image} alt={area.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0" />
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

      {/* Imagine The Difference Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        {/* Cinematic Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
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
            <img src="/psr_logo.png" alt="PSR Logo" className="w-full h-full object-contain" />
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
            Your generosity goes beyond transactions—it creates lasting transformation. Join us in building a future where every individual has the opportunity to thrive.
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
