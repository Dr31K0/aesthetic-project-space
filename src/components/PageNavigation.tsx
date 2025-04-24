
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
      {currentIndex > 0 && (
        <button
          onClick={goToPrevious}
          className="pointer-events-auto h-12 w-12 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 flex items-center justify-center transition-all duration-300 border border-white/10"
          aria-label="Previous page"
        >
          <ArrowLeft className="w-6 h-6 text-white/80" />
        </button>
      )}
      {currentIndex < routes.length - 1 && (
        <button
          onClick={goToNext}
          className="pointer-events-auto h-12 w-12 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 flex items-center justify-center transition-all duration-300 border border-white/10"
          aria-label="Next page"
        >
          <ArrowRight className="w-6 h-6 text-white/80" />
        </button>
      )}
    </div>
  );
};

export default PageNavigation;
