
const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-black">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up">
          Product Designer
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Crafting beautiful and functional products through thoughtful design and innovation
        </p>
        <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a 
            href="#work"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg hover:bg-white/90 transition-all transform hover:-translate-y-1"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

