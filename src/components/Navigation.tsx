
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { RainbowBar } from './RainbowBar';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="fixed w-full bg-white/5 backdrop-blur-xl border-b border-white/10 z-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-xl font-light tracking-tight text-white hover:text-white/80 transition-colors relative group"
          >
            Portfolio
            <RainbowBar className="absolute -bottom-1 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <li>
                <a 
                  href={isHomePage ? "#work" : "/#work"} 
                  className="text-sm tracking-wide text-neutral-400 hover:text-white transition-colors duration-300 relative group"
                  onClick={(e) => handleAnchorClick(e, "work")}
                >
                  Work
                  <RainbowBar className="absolute -bottom-1 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href={isHomePage ? "#about" : "/#about"} 
                  className="text-sm tracking-wide text-neutral-400 hover:text-white transition-colors duration-300 relative group"
                  onClick={(e) => handleAnchorClick(e, "about")}
                >
                  About
                  <RainbowBar className="absolute -bottom-1 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href={isHomePage ? "#contact" : "/#contact"} 
                  className="text-sm tracking-wide text-neutral-400 hover:text-white transition-colors duration-300 relative group"
                  onClick={(e) => handleAnchorClick(e, "contact")}
                >
                  Contact
                  <RainbowBar className="absolute -bottom-1 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity" />
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
