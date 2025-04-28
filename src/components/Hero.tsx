
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      } 
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <motion.div 
          className="max-w-4xl ml-0 md:ml-8 lg:ml-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="overflow-hidden mb-10">
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-4 text-white">
              <span className="block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Zakharenkov Andre
              </span>
            </h1>
          </motion.div>
          <motion.div variants={itemVariants} className="overflow-hidden mb-6">
            <p className="text-xl md:text-2xl text-neutral-300 font-medium max-w-2xl leading-relaxed">
              Product Designer
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="overflow-hidden">
            <div className="relative">
              <a 
                href="#work"
                className="group inline-flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <span className="text-base uppercase tracking-wider relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  View Work
                </span>
                <div className="w-12 h-[1px] bg-current transform origin-left transition-all duration-300 group-hover:w-20" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
