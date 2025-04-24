
import ProjectHeader from '../components/ProjectHeader';

const Analysis2 = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-32">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="relative z-10 container mx-auto px-4">
        <ProjectHeader
          title="Analysis"
          subtitle="Audemars Piguet"
          description="Audemars Piguet fuses heritage with innovation, crafting bold, prestigious timepieces that reflect individuality and timeless style."
        />
        <div className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden" style={{ aspectRatio: '1 / 1.414' }}>
          <img
            src="/lovable-uploads/dbb82eb7-f403-4526-ae4c-6bae1f8de206.png"
            alt="Audemars Piguet Analysis"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Analysis2;
