
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Info from "../components/Info";
import ProjectGrid from "../components/ProjectGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Info />
      <ProjectGrid />
    </div>
  );
};

export default Index;
