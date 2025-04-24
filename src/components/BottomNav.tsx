
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  
  // Don't show the bottom nav on the main page
  if (location.pathname === '/') {
    return null;
  }
  
  const projectLinks = [
    { path: '/brief', label: 'Brief' },
    { path: '/analysis1', label: 'Target' },
    { path: '/analysis2', label: 'Brand' },
    { path: '/research', label: 'Research' },
    { path: '/avp', label: 'AVP' },
    { path: '/final', label: 'Final' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-white/10 px-4 py-3">
      <div className="flex justify-center items-center max-w-7xl mx-auto">
        <div className="flex space-x-2">
          {projectLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm px-3 py-2 rounded-full transition-colors ${
                location.pathname === link.path
                  ? 'bg-white/10 text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
