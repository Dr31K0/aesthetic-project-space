
const Info = () => {
  return <section id="about" className="py-28 md:py-32 bg-neutral-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-12">
              <div className="overflow-hidden">
                <h2 className="reveal text-4xl md:text-5xl font-light tracking-tighter">
                  About
                </h2>
              </div>
              <div className="overflow-hidden">
                <p className="reveal reveal-delay-1 text-neutral-400 text-lg leading-relaxed">
                  I'm a product designer focused on creating intuitive and impactful digital experiences. With a passion for user-centered design, I transform complex problems into elegant solutions.
                </p>
              </div>
              <div className="space-y-8">
                <div className="overflow-hidden">
                  <h3 className="reveal reveal-delay-2 text-xl font-light tracking-tight mb-4">
                    Experience
                  </h3>
                  <p className="reveal reveal-delay-2 text-neutral-400">
                    5+ years designing digital products for startups and established companies
                  </p>
                </div>
                <div className="overflow-hidden">
                  <h3 className="reveal reveal-delay-3 text-xl font-light tracking-tight mb-4">
                    Expertise
                  </h3>
                  <ul className="reveal reveal-delay-3 grid grid-cols-2 gap-y-2 text-neutral-400">
                    <li className="hover:text-white transition-colors duration-300">UI/UX Design</li>
                    <li className="hover:text-white transition-colors duration-300">Design Systems</li>
                    <li className="hover:text-white transition-colors duration-300">User Research</li>
                    <li className="hover:text-white transition-colors duration-300">Prototyping</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-neutral-900/60 overflow-hidden rounded-2xl group">
              <img 
                alt="Workspace" 
                className="w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 rounded-2xl object-cover" 
                src="/lovable-uploads/a654368f-44f5-42f6-9428-42f7fdeb2886.png" 
                style={{ borderRadius: '16px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Info;
