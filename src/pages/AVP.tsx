
import ProjectHeader from '../components/ProjectHeader';
import ProgressBar from '../components/ProgressBar';

const AVP = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-32">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="relative z-10 container mx-auto px-4">
        <ProjectHeader
          title="AVP"
          subtitle="Visual Identity"
          description="Audio-visual presentation showcasing the Octavium Prism's unique features, design language, and brand positioning in the luxury watch market."
        />
        <div className="aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden">
          <img
            src="/lovable-uploads/92bcddf5-2919-41ad-bccf-ce05c3930b8c.png"
            alt="AVP presentation"
            className="w-full h-full object-cover"
          />
        </div>
        <ProgressBar 
          currentStep={3} 
          totalSteps={4} 
          labels={['Analysis', 'Research', 'AVP', 'Final']} 
        />
      </div>
    </div>
  );
};

export default AVP;
