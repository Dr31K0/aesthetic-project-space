
import ProjectHeader from '../components/ProjectHeader';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Analysis2 = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden py-12">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-5xl mx-auto">
          <ProjectHeader
            title="Analysis"
            subtitle="Audemars Piguet"
            description="Audemars Piguet fuses heritage with innovation, crafting bold, prestigious timepieces that reflect individuality and timeless style."
          />
          <div className="flex items-center justify-center h-[70vh]">
            <div className="rounded-3xl overflow-hidden shadow-lg w-auto">
              <AspectRatio ratio={1 / 1.414} className="w-full h-full">
                <img
                  src="/lovable-uploads/dbb82eb7-f403-4526-ae4c-6bae1f8de206.png"
                  alt="Audemars Piguet Analysis"
                  className="w-full h-full object-contain rounded-3xl"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis2;
