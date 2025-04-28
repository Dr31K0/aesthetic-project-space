
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 py-5 transition-all duration-500 ${scrolled ? 'bg-black/50 backdrop-blur-xl shadow-lg' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-base uppercase tracking-wider text-neutral-400 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white/50 after:transition-transform hover:after:scale-x-100"
          >
            Portfolio
          </Link>
          
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>

          <div className="hidden lg:block">
            <ul className="flex flex-row gap-12">
              <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <a 
                  href={isHomePage ? "#about" : "/#about"} 
                  className="text-base uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white/50 after:transition-transform hover:after:scale-x-100"
                  onClick={(e) => handleAnchorClick(e, "about")}
                >
                  About
                </a>
              </motion.li>
              <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <a 
                  href={isHomePage ? "#work" : "/#work"} 
                  className="text-base uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white/50 after:transition-transform hover:after:scale-x-100"
                  onClick={(e) => handleAnchorClick(e, "work")}
                >
                  Work
                </a>
              </motion.li>
              <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <a 
                  href={isHomePage ? "#contact" : "/#contact"} 
                  className="text-base uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white/50 after:transition-transform hover:after:scale-x-100"
                  onClick={(e) => handleAnchorClick(e, "contact")}
                >
                  Contact
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="block lg:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-xl p-6 mt-0 border-t border-white/10"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="flex flex-col gap-8">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
