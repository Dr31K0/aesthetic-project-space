
import { ReactNode } from 'react';

interface ProjectHeaderProps {
  title: string;
  subtitle?: string;
  description: string;
}

const ProjectHeader = ({ title, subtitle, description }: ProjectHeaderProps) => {
  // Return an empty div with the same styling to maintain layout
  return (
    <div className="max-w-4xl mx-auto text-left mb-16">
      {/* Removed all content as requested */}
    </div>
  );
};

export default ProjectHeader;
