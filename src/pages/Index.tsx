
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Info from "../components/Info";
import ProjectGrid from "../components/ProjectGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <div className="noise-overlay" />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Info />
        <ProjectGrid />
      </div>
    </div>
  );
};

export default Index;
