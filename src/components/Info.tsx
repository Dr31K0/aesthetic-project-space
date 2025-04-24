const Info = () => {
  return (
    <section id="about" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
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
            <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                alt="Workspace"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
