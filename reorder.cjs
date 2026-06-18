const fs = require('fs');
const content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// The goal is to rearrange the sections and modify the text

let heroEnd = content.indexOf('{/* Why This Foundation Exists */}');
let legacyEnd = content.indexOf('{/* Featured Founder Story Section */}');
let featuredFounderEnd = content.indexOf('{/* Signature Interactive Experience: One Act of Kindness */}');
let oneActEnd = content.indexOf('{/* Message from the Founder Section */}');
let founderMsgEnd = content.indexOf('{/* Impact Highlights */}');
let impactEnd = content.indexOf('{/* Stories of Change Section */}');
let storiesChangeEnd = content.indexOf('<MomentsOfImpact />');
let momentsEnd = content.indexOf('{/* Focus Areas */}');
let focusEnd = content.indexOf('{/* Imagine The Difference Section */}');

let hero = content.slice(0, heroEnd);
let whyAndLegacy = content.slice(heroEnd, legacyEnd);
let featuredFounder = content.slice(legacyEnd, featuredFounderEnd);
let oneAct = content.slice(featuredFounderEnd, oneActEnd);
let founderMsg = content.slice(oneActEnd, founderMsgEnd);
let impactStats = content.slice(founderMsgEnd, impactEnd);
let storiesChange = content.slice(impactEnd, storiesChangeEnd);
let moments = content.slice(storiesChangeEnd, momentsEnd);
let focus = content.slice(momentsEnd, focusEnd);
let rest = content.slice(focusEnd);

// Replace name in founderMsg
founderMsg = founderMsg.replace('>Selsiya<', '>Selsiya Princy<');

// Combine whyAndLegacy
const combinedWhyLegacy = `      {/* Combined Why This Foundation Exists & Legacy Memorial */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F8F6F0] relative z-20 min-h-screen flex flex-col items-center justify-center border-b border-gray-200">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10 flex flex-col items-center justify-center h-full gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-secondary font-heading text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-4">
              Why This Foundation Exists
            </h4>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light text-primary leading-[1.2] mb-6 tracking-tight">
              "Because kindness should <br className="hidden md:block"/> not end with a lifetime."
            </h2>
            <p className="text-lg md:text-xl font-body text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
              Through every child educated, every family supported, and every life transformed, a legacy continues.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-px h-16 bg-gradient-to-b from-secondary via-secondary/50 to-transparent mx-auto"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-full max-w-lg h-32 md:h-48 relative rounded-2xl bg-white shadow-xl flex items-center justify-center p-6 border border-secondary/30 group mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_2s_infinite] pointer-events-none rounded-2xl z-20"></div>
              <img loading="lazy" 
                src="/psr_logo_and_side_heading.png" 
                alt="Pandu Seshagiri Rao Memorial Foundation" 
                className="w-full h-full object-contain relative z-10"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-serif italic text-primary leading-relaxed drop-shadow-sm font-light">
              In Loving Memory of <br/>
              <span className="text-amber-500 font-extrabold not-italic tracking-wide text-2xl md:text-3xl">Pandu Seshagiri Rao</span>
            </h3>
          </motion.div>
          
        </div>
      </section>

`;

const storiesOfImpact = `      {/* Stories of Impact Section */}
      <section className="py-24 bg-white relative z-20 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Stories of Impact</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Empowering Young Minds", image: "/WhatsApp Image 2026-06-17 at 11.57.31 PM.jpeg" },
              { title: "Supporting Dreams", image: "/WhatsApp Image 2026-06-17 at 11.57.31 PM (2).jpeg" },
              { title: "Celebrating Generosity", image: "/WhatsApp Image 2026-06-17 at 11.57.32 PM.jpeg" },
              { title: "Creating Lasting Change", image: "/WhatsApp Image 2026-06-17 at 11.57.32 PM (2).jpeg" }
            ].map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl group h-80 shadow-lg border border-gray-100"
              >
                <img loading="lazy" src={story.image} alt={story.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent z-10"></div>
                <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end">
                  <h3 className="text-2xl font-heading font-bold text-white drop-shadow-md group-hover:text-secondary transition-colors duration-300">
                    {story.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

`;

const newContent = 
  hero +
  combinedWhyLegacy +
  founderMsg +
  focus +
  featuredFounder +
  oneAct +
  storiesOfImpact +
  moments +
  rest;

// Remove AnimatedCounter import since we removed stats
const cleanedContent = newContent.replace("import AnimatedCounter from '../components/ui/AnimatedCounter';\n", '');

fs.writeFileSync('src/pages/Home.jsx', cleanedContent);
console.log('Successfully reordered and updated Home.jsx');
