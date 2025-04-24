
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Add scroll event listener to change navigation appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

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
    <nav className={`fixed w-full z-50 py-5 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-lg' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-base uppercase tracking-wider text-neutral-400 hover:text-white transition-colors">
            Portfolio
          </Link>
          
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className={`${isOpen ? 'block absolute top-full left-0 right-0 bg-black/80 backdrop-blur-lg p-6 lg:p-0 mt-0 border-t border-white/10' : 'hidden'} lg:block lg:static lg:bg-transparent lg:border-0`}>
            <ul className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <li>
                <a 
                  href={isHomePage ? "#about" : "/#about"} 
                  className="text-base uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleAnchorClick(e, "about")}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href={isHomePage ? "#work" : "/#work"} 
                  className="text-base uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleAnchorClick(e, "work")}
                >
                  Work
                </a>
              </li>
              <li>
                <a 
                  href={isHomePage ? "#contact" : "/#contact"} 
                  className="text-base uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleAnchorClick(e, "contact")}
                >
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
