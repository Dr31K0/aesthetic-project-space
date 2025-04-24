
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-light tracking-wider text-white hover:text-white/80 transition-colors">
            Portfolio
          </a>
          
          <Button
            variant="ghost"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center text-lg">
              <li>
                <a href="/" className="text-white/70 hover:text-white transition-colors duration-300">
                  Work
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/70 hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 hover:text-white transition-colors duration-300">
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
