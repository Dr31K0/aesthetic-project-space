
import React from 'react';

const Analysis2 = () => {
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="rounded-3xl overflow-hidden shadow-lg bg-black/20 backdrop-blur-sm p-2 max-w-[90%] max-h-[90%]">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="./lovable-uploads/dbb82eb7-f403-4526-ae4c-6bae1f8de206.png"
                alt="Audemars Piguet Analysis"
                className="w-full h-auto object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis2;
