
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Product Design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Project Two",
    description: "UX Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Industrial Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
];

const ProjectGrid = () => {
  return (
    <section id="work" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden mb-16">
            <h2 className="reveal text-4xl md:text-5xl font-light tracking-tighter">
              Selected Works
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-20">
            {projects.map((project) => (
              <a
                key={project.id}
                href={`/project/${project.id}`}
                className="group block"
              >
                <div className="aspect-[16/9] overflow-hidden bg-neutral-900 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-2xl font-light mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
