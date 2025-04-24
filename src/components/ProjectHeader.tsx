
import { ReactNode } from 'react';

interface ProjectHeaderProps {
  title: string;
  subtitle?: string;
  description: string;
}

const ProjectHeader = ({ title, subtitle, description }: ProjectHeaderProps) => {
  return (
    <div className="max-w-4xl mx-auto text-left mb-16">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      {subtitle && <h2 className="text-2xl text-gray-300 mb-4">{subtitle}</h2>}
      <p className="text-gray-400 text-lg max-w-3xl">{description}</p>
    </div>
  );
};

export default ProjectHeader;
