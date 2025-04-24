
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-32">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="max-w-4xl ml-0 md:ml-8 lg:ml-16">
          <div className="overflow-hidden mb-12">
            <h1 className="reveal text-6xl md:text-7xl font-semibold tracking-tight mb-4 text-white/90">
              Zakharenkov Andre
            </h1>
          </div>
          <div className="overflow-hidden mb-16">
            <p className="reveal reveal-delay-1 text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed">
              Product Designer
            </p>
          </div>
          <div className="overflow-hidden">
            <div className="reveal reveal-delay-2">
              <a 
                href="#work"
                className="group inline-flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <span className="text-base uppercase tracking-wider">View Work</span>
                <div className="w-12 h-[1px] bg-current transform origin-left transition-all duration-300 group-hover:w-20" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
