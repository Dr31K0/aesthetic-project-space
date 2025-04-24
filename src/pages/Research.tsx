
import ProjectHeader from '../components/ProjectHeader';

const Research = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-32">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="relative z-10 container mx-auto px-4">
        <ProjectHeader
          title="Research"
          subtitle="Sketches & Drawings"
          description="Here are sketches that showcase a variety of conceptual clock designs, combining geometric forms like hexagons, spheres, and pyramids with functional components such as dials, gears, and housing structures."
        />
        <div className="aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden">
          <img
            src="/lovable-uploads/3e9db280-3066-403c-a385-2e6e9208ab19.png"
            alt="Clock design sketches"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Research;
