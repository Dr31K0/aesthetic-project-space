
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden mb-12">
            <h1 className="reveal text-7xl md:text-8xl font-light tracking-tighter mb-6 creative-hover">
              Zakharenkov Andre
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="reveal reveal-delay-1 text-2xl md:text-3xl text-neutral-400 max-w-2xl leading-relaxed mb-16">
              Product Designer
            </p>
          </div>
          <div className="overflow-hidden">
            <div className="reveal reveal-delay-2">
              <a 
                href="#work"
                className="group inline-flex items-center gap-4 text-neutral-400 hover:text-white transition-all duration-500 creative-hover"
              >
                <span className="text-lg">View Work</span>
                <div className="w-32 h-[1px] bg-current transform origin-left transition-all duration-500 group-hover:w-48" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
