
import ProjectHeader from '../components/ProjectHeader';
import ProgressBar from '../components/ProgressBar';

const Analysis2 = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-32">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="relative z-10 container mx-auto px-4">
        <ProjectHeader
          title="Analysis"
          subtitle="Defining Luxury"
          description="Luxury watch consumers value craftsmanship, heritage, and exclusivity. Our project aligns with these values through innovative design and premium features."
        />
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          <img
            src="/lovable-uploads/92bcddf5-2919-41ad-bccf-ce05c3930b8c.png"
            alt="Analysis luxury definition"
            className="w-full rounded-lg"
          />
        </div>
        <ProgressBar 
          currentStep={2} 
          totalSteps={4} 
          labels={['Analysis', 'Research', 'AVP', 'Final']} 
        />
      </div>
    </div>
  );
};

export default Analysis2;
