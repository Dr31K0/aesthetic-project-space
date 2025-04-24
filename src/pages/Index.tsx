
import Hero from "../components/Hero";
import Info from "../components/Info";
import ProjectGrid from "../components/ProjectGrid";
import Contact from "../components/Contact";
import CyberBackground from "../components/CyberBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <CyberBackground />
      <div className="relative z-10">
        <Hero />
        <Info />
        <ProjectGrid />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
