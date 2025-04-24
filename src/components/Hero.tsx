
const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 text-center relative">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight animate-fade-up">
          Product Designer
        </h1>
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Crafting beautiful and functional products through thoughtful design and innovation
        </p>
        <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a 
            href="#work"
            className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
