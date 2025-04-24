
const Info = () => {
  return (
    <section className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <p className="text-lg text-white/70">
              I'm a product designer focused on creating intuitive and impactful digital experiences. With a passion for user-centered design, I transform complex problems into elegant solutions.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
                <p className="text-white/70">5+ years designing digital products for startups and established companies</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Expertise</h3>
                <ul className="grid grid-cols-2 gap-2 text-white/70">
                  <li>UI/UX Design</li>
                  <li>Design Systems</li>
                  <li>User Research</li>
                  <li>Prototyping</li>
                  <li>Visual Design</li>
                  <li>Design Strategy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
              alt="Workspace"
              className="w-full h-full object-cover opacity-50 hover:opacity-70 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
