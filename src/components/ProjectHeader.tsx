
import { ReactNode } from 'react';

interface ProjectHeaderProps {
  title: string;
  subtitle?: string;
  description: string;
}

const ProjectHeader = ({ title, subtitle, description }: ProjectHeaderProps) => {
  return (
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      {subtitle && <h3 className="text-2xl font-light mb-4">{subtitle}</h3>}
      <p className="text-gray-300 text-lg">{description}</p>
    </div>
  );
};

export default ProjectHeader;
