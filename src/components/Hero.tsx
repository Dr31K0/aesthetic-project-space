
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <h1 className="reveal text-6xl md:text-8xl font-light tracking-tighter mb-6">
              Product Designer
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="reveal reveal-delay-1 text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed mb-12">
              Creating thoughtful digital experiences through minimalist design and careful attention to detail
            </p>
          </div>
          <div className="overflow-hidden">
            <div className="reveal reveal-delay-2">
              <div className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                <span className="text-lg">View Work</span>
                <div className="w-10 h-[1px] bg-current" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
