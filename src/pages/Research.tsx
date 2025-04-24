
import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="rounded-3xl overflow-hidden shadow-lg bg-black/20 backdrop-blur-sm p-2 max-w-[90%] max-h-[90%]">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/aesthetic-project-space/lovable-uploads/3e9db280-3066-403c-a385-2e6e9208ab19.png"
                alt="Clock design sketches"
                className="w-full h-auto object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Research;
