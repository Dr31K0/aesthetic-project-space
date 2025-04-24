
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Octavium Prism",
    description: "Product Design",
    image: "/lovable-uploads/92bcddf5-2919-41ad-bccf-ce05c3930b8c.png",
    path: "/brief"
  },
  {
    id: 2,
    title: "Analysis & Research",
    description: "UX & Market Research",
    image: "/lovable-uploads/45cef3c6-b87d-4547-9ddf-bb5ffb5a94c7.png",
    path: "/analysis1"
  },
  {
    id: 3,
    title: "Final Design",
    description: "Industrial Design",
    image: "/lovable-uploads/996f414e-6eba-4739-a2dc-564178147f23.png",
    path: "/final"
  },
];

const ProjectGrid = () => {
  return (
    <section id="work" className="py-28 md:py-32 bg-black/60 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden mb-16">
            <h2 className="reveal text-4xl md:text-5xl font-light tracking-tighter">
              Selected Works
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-16 md:gap-24">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={project.path}
                className="group block"
              >
                <div className="aspect-[16/9] overflow-hidden bg-neutral-900/50 mb-8 rounded-2xl creative-hover">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 rounded-2xl"
                    onLoad={(e) => e.currentTarget.classList.remove('loading')}
                  />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-2xl font-light mb-3 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
