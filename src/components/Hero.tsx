
const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-secondary mb-6 animate-fade-up">
          Product Designer
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Crafting beautiful and functional products through thoughtful design and innovation
        </p>
        <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a 
            href="#work"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
