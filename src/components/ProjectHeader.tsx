
import { ReactNode } from 'react';

interface ProjectHeaderProps {
  title: string;
  subtitle?: string;
  description: string;
}

const ProjectHeader = ({ title, subtitle, description }: ProjectHeaderProps) => {
  return (
    <div className="max-w-4xl mx-auto text-left mb-16">
      <h1 className="text-6xl font-light mb-2">{title}</h1>
      {subtitle && <h2 className="text-3xl font-light mb-4 text-white/70">{subtitle}</h2>}
      <p className="text-xl text-white/70">{description}</p>
    </div>
  );
};

export default ProjectHeader;
