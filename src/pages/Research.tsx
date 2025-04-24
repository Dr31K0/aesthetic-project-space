
import React from 'react';

const Research = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-32 flex items-center justify-center">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="relative z-10 container mx-auto px-4 w-full">
        <div className="flex items-center justify-center my-8 w-full">
          <div className="rounded-3xl overflow-hidden shadow-lg bg-black/20 backdrop-blur-sm p-2 max-w-full">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/lovable-uploads/3e9db280-3066-403c-a385-2e6e9208ab19.png"
                alt="Clock design sketches"
                className="w-full h-auto object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
