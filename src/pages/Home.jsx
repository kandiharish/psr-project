import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Users, GraduationCap, Leaf, Droplet, Activity, Quote, Sprout, TreePine, BookOpen } from 'lucide-react';
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
      <section className="relative min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-[#082f6e]/95 z-10"></div>
        
        {/* Parallax Video Background */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-40 overflow-hidden"
          style={{ y: yImage }}
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/logo formation video.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        {/* Floating Particles/Breathing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[120px] z-10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -70, 0],
            y: [0, 70, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <motion.div 
          className="container mx-auto px-4 z-20 text-center flex flex-col items-center mt-12"
          style={{ y: yText, opacity: opacityText }}
        >
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 font-heading text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Inspire • Support • Transform
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-3xl md:text-4xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight max-w-4xl drop-shadow-2xl tracking-tight"
          >
            Empowering Lives Through Education, Health, Nutrition & Compassion
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="text-lg md:text-xl text-blue-50 mb-10 max-w-3xl font-body relative leading-relaxed drop-shadow-md font-light"
          >
            Continuing a legacy of kindness, dignity, and service by supporting children, empowering girls, improving community health, promoting nutrition, and protecting our environment.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2, type: 'spring' }}
            className="flex flex-col sm:flex-row gap-6 relative z-30"
          >
            <a href="#donate" className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-full text-primary font-bold text-lg overflow-hidden shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2">
              <span className="relative z-10">Donate Now</span>
              <Heart size={18} className="fill-primary relative z-10" />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_2s_infinite] z-0"></div>
            </a>
            <a href="#programs" className="group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 shadow-xl text-center">
              <span className="relative z-10">Join Our Mission</span>
            </a>
          </motion.div>
        </motion.div>
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
            <div className="w-full max-w-2xl h-40 md:h-64 relative rounded-2xl bg-white shadow-2xl flex items-center justify-center p-8 border border-secondary/30 group">
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
            <span className="inline-block mt-4 text-primary border-b-4 border-secondary pb-1 italic font-extrabold tracking-wide drop-shadow-sm">
              Pandu Seshagiri Rao
            </span>
          </motion.h2>

          <div className="space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-heading text-text/80 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              "His kindness inspired lives. His compassion uplifted families. His values continue to guide every initiative we undertake."
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/60 p-8 rounded-2xl backdrop-blur-sm border border-secondary/10 shadow-lg relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md">
                <Heart size={16} className="fill-white" />
              </div>
              <p className="text-lg md:text-xl font-body text-primary leading-relaxed">
                <span className="font-semibold text-secondary">Today, his legacy lives on</span> through every child educated, every girl empowered, every family supported, and every community transformed.
              </p>
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
            <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center p-1 mb-6 shadow-2xl">
               <img src="/psr_logo.png" alt="PSR Logo" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl md:text-2xl font-heading italic font-light text-white leading-relaxed">
              "One act of kindness can transform generations."
            </h3>
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

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-light-bg relative z-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3">Moments of Impact</h2>
            <p className="text-sm font-body text-muted-text max-w-xl mx-auto">Glimpses of our ongoing journey to transform lives and communities.</p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* High-Converting Donation Section */}
      <section id="donate" className="py-24 bg-white relative z-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 mx-auto rounded-full border border-gray-200 shadow-lg bg-white p-2 mb-8"
          >
            <img src="/psr_logo.png" alt="PSR Logo" className="w-full h-full object-contain" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4"
          >
            Your Contribution Creates Opportunity
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base font-body text-muted-text max-w-2xl mx-auto mb-12"
          >
            No matter how small, every donation helps us provide education, healthcare, and nutrition to those who need it most. Join our mission today.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { amount: "₹500", impact: "Learning Materials" },
              { amount: "₹1000", impact: "Nutrition Support" },
              { amount: "₹2500", impact: "Healthcare Assistance" },
              { amount: "₹5000", impact: "Educational Sponsorship" }
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-2xl font-heading font-bold text-secondary mb-2 group-hover:scale-110 transition-transform">{tier.amount}</div>
                <div className="text-xs font-body text-text font-semibold uppercase tracking-wide">{tier.impact}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" className="w-full sm:w-auto px-12 py-4 bg-primary hover:bg-blue-800 text-white shadow-xl hover:shadow-2xl relative overflow-hidden group">
              <span className="relative z-10 font-bold tracking-wide">Donate Now</span>
              {/* Gold Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-secondary/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite] z-0"></div>
            </Button>
            <div className="mt-4 flex items-center justify-center gap-4 text-[10px] font-body text-muted-text uppercase tracking-widest">
              <span>Secure Payment</span>
              <span>•</span>
              <span>80G Tax Exemption</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
