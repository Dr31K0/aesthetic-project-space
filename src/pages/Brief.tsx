
import { useNavigate } from 'react-router-dom';
import ProjectHeader from '../components/ProjectHeader';

const Brief = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-32">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="relative z-10 container mx-auto px-4">
        <ProjectHeader
          title="01."
          subtitle="Octavium Prism"
          description="First watch box clock - Create an event calendar for a specific event of your choice, featuring brands that you also select."
        />
        <div className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden" style={{ aspectRatio: '1 / 1.414' }}>
          <img
            src="/lovable-uploads/92bcddf5-2919-41ad-bccf-ce05c3930b8c.png"
            alt="Octavium Prism Project"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Brief;
