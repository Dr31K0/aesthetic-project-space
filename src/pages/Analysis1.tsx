
import ProjectHeader from '../components/ProjectHeader';

const Analysis1 = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-32">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="relative z-10 container mx-auto px-4">
        <ProjectHeader
          title="Analysis"
          subtitle="Hyperconnected Milenials"
          description="Hyperconnected Millennials value luxury, social status, and social media influence, using digital platforms to showcase their lifestyle. They seek stylish, high-value experiences that reflect success and exclusivity."
        />
        <div className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden" style={{ aspectRatio: '1 / 1.414' }}>
          <img
            src="/lovable-uploads/45cef3c6-b87d-4547-9ddf-bb5ffb5a94c7.png"
            alt="Analysis lifestyle"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Analysis1;
