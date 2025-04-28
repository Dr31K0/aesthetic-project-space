
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AVP = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
        <motion.div 
          className="flex items-center justify-center"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ 
            scale: isImageLoaded ? 1 : 0.95, 
            opacity: isImageLoaded ? 1 : 0 
          }}
          transition={{ 
            duration: 0.6, 
            ease: [0.165, 0.84, 0.44, 1]
          }}
        >
          <div className="rounded-3xl overflow-hidden shadow-lg bg-black/20 backdrop-blur-sm p-2 max-w-[90%] max-h-[90%] relative">
            <motion.div 
              className="rounded-3xl overflow-hidden image-hover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/aesthetic-project-space/lovable-uploads/c824da51-363c-4780-ba07-55c95c252608.png"
                alt="Final AVPs concepts"
                className={`w-full h-auto object-contain rounded-3xl transition-opacity duration-700 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsImageLoaded(true)}
              />
              {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-white/20 border-t-white/80 rounded-full animate-spin"></div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AVP;
