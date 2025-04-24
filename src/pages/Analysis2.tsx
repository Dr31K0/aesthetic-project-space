
import ProjectHeader from '../components/ProjectHeader';

const Analysis2 = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden pt-24 pb-32">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="relative z-10 w-full flex flex-col justify-center items-center px-4">
        <div className="w-full max-w-5xl mx-auto">
          <ProjectHeader
            title="Analysis"
            subtitle="Audemars Piguet"
            description="Audemars Piguet fuses heritage with innovation, crafting bold, prestigious timepieces that reflect individuality and timeless style."
          />
          <div className="rounded-3xl overflow-hidden mx-auto" style={{ aspectRatio: '1 / 1.414', maxWidth: '80%' }}>
            <img
              src="/lovable-uploads/dbb82eb7-f403-4526-ae4c-6bae1f8de206.png"
              alt="Audemars Piguet Analysis"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis2;
