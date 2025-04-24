
import { RainbowBar } from "./RainbowBar";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <section id="about" className="py-32 bg-white/10 backdrop-blur-xl border-y border-white/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="overflow-hidden">
                <motion.h2 
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-light tracking-tighter"
                >
                  About
                </motion.h2>
                <RainbowBar className="mt-2 w-24" />
              </div>
              <div className="overflow-hidden">
                <motion.p 
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-neutral-300 text-lg leading-relaxed hover:text-white transition-colors"
                >
                  I'm a product designer focused on creating intuitive and impactful digital experiences. With a passion for user-centered design, I transform complex problems into elegant solutions.
                </motion.p>
              </div>
              <div className="space-y-8">
                <div className="overflow-hidden">
                  <motion.h3 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl font-light tracking-tight mb-4"
                  >
                    Experience
                  </motion.h3>
                  <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-neutral-300"
                  >
                    5+ years designing digital products for startups and established companies
                  </motion.p>
                </div>
                <div className="overflow-hidden">
                  <motion.h3 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl font-light tracking-tight mb-4"
                  >
                    Expertise
                  </motion.h3>
                  <motion.ul 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="grid grid-cols-2 gap-y-2 text-neutral-300"
                  >
                    <li className="hover:text-white transition-colors duration-300">UI/UX Design</li>
                    <li className="hover:text-white transition-colors duration-300">Design Systems</li>
                    <li className="hover:text-white transition-colors duration-300">User Research</li>
                    <li className="hover:text-white transition-colors duration-300">Prototyping</li>
                  </motion.ul>
                </div>
              </div>
            </div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/5] glass-card rounded-2xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                alt="Workspace"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
