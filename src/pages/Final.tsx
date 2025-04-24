
import ProjectHeader from '../components/ProjectHeader';
import ProgressBar from '../components/ProgressBar';

const Final = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-32">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="relative z-10 container mx-auto px-4">
        <ProjectHeader
          title="Final"
          subtitle="Project Completion"
          description="Complete project overview highlighting key achievements, market insights, and the successful development of the Octavium Prism watch box concept."
        />
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          <img
            src="/lovable-uploads/45cef3c6-b87d-4547-9ddf-bb5ffb5a94c7.png"
            alt="Final project overview"
            className="w-full rounded-lg"
          />
        </div>
        <ProgressBar 
          currentStep={4} 
          totalSteps={4} 
          labels={['Analysis', 'Research', 'AVP', 'Final']} 
        />
      </div>
    </div>
  );
};

export default Final;
