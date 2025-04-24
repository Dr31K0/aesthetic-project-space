
import Hero from "../components/Hero";
import Info from "../components/Info";
import ProjectGrid from "../components/ProjectGrid";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="animated-blob blob-1" />
      <div className="animated-blob blob-2" />
      <div className="noise-overlay" />
      <div className="relative z-10">
        <Hero />
        <Info />
        <ProjectGrid />
      </div>
    </div>
  );
};

export default Index;
