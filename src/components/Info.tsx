
const Info = () => {
  return (
    <section className="min-h-screen bg-black py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">About Me</h2>
            <p className="text-xl text-white/70 leading-relaxed">
              I'm a product designer focused on creating intuitive and impactful digital experiences. With a passion for user-centered design, I transform complex problems into elegant solutions.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
                <p className="text-lg text-white/70">5+ years designing digital products for startups and established companies</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Expertise</h3>
                <ul className="grid grid-cols-2 gap-4 text-lg text-white/70">
                  <li className="hover:text-white transition-colors duration-300">UI/UX Design</li>
                  <li className="hover:text-white transition-colors duration-300">Design Systems</li>
                  <li className="hover:text-white transition-colors duration-300">User Research</li>
                  <li className="hover:text-white transition-colors duration-300">Prototyping</li>
                  <li className="hover:text-white transition-colors duration-300">Visual Design</li>
                  <li className="hover:text-white transition-colors duration-300">Design Strategy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative aspect-square group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
              alt="Workspace"
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
