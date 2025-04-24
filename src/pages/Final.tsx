
import ProjectHeader from '../components/ProjectHeader';

const Final = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-32">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="relative z-10 container mx-auto px-4">
        <ProjectHeader
          title="Final"
          subtitle="Octavium Prism"
          description="The Octavium Prism is a rainbow-hued clock and advent calendar that stores and reveals eight colored Audemars Piguet watches, each hidden in a matching crystal compartment."
        />
        <div className="flex items-center justify-center my-8">
          <div className="rounded-3xl overflow-hidden shadow-lg bg-black/20 backdrop-blur-sm p-2">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/lovable-uploads/996f414e-6eba-4739-a2dc-564178147f23.png"
                alt="Octavium Prism Final"
                className="w-full h-auto object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
