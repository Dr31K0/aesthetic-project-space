
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-xl font-playfair font-semibold text-secondary">
            Portfolio
          </a>
          
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
              <li>
                <a href="/" className="text-secondary hover:text-primary transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="/about" className="text-secondary hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-secondary hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
