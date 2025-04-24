
import ProjectHeader from '../components/ProjectHeader';
import ProgressBar from '../components/ProgressBar';

const Research = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-32">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="relative z-10 container mx-auto px-4">
        <ProjectHeader
          title="Research"
          subtitle="Market Analysis"
          description="Comprehensive market research focusing on luxury watch market trends, consumer behavior, and competitive analysis in the high-end timepiece segment."
        />
        <div className="aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden">
          <img
            src="/lovable-uploads/45cef3c6-b87d-4547-9ddf-bb5ffb5a94c7.png"
            alt="Research market analysis"
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

export default Research;
