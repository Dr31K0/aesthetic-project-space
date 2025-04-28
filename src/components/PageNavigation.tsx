
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const routes = ['/brief', '/analysis1', '/analysis2', '/research', '/avp', '/final'];

const PageNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = routes.indexOf(location.pathname);

  const goToNext = () => {
    if (currentIndex < routes.length - 1) {
      navigate(routes[currentIndex + 1]);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      navigate(routes[currentIndex - 1]);
    }
  };

  if (location.pathname === '/') return null;

  return (
    <div className="fixed inset-y-0 left-0 right-0 pointer-events-none flex items-center justify-between px-4 z-50">
      {location.pathname !== '/brief' && currentIndex > 0 && (
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          onClick={goToPrevious}
          className="pointer-events-auto h-14 w-14 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-white/20"
          aria-label="Previous page"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-6 h-6 text-white/90" />
        </motion.button>
      )}
      {currentIndex < routes.length - 1 && (
        <motion.button
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          onClick={goToNext}
          className="pointer-events-auto h-14 w-14 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-white/20 ml-auto"
          aria-label="Next page"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowRight className="w-6 h-6 text-white/90" />
        </motion.button>
      )}
    </div>
  );
};

export default PageNavigation;
