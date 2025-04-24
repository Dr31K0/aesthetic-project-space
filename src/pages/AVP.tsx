
import React from 'react';

const AVP = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-32 flex items-center justify-center">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="relative z-10 container mx-auto px-4 w-full">
        <div className="flex items-center justify-center my-8 w-full">
          <div className="rounded-3xl overflow-hidden shadow-lg bg-black/20 backdrop-blur-sm p-2 max-w-full">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/lovable-uploads/c824da51-363c-4780-ba07-55c95c252608.png"
                alt="Final AVPs concepts"
                className="w-full h-auto object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AVP;
