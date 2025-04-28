
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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
  
  const navVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      className="fixed bottom-6 left-0 right-0 z-50 flex justify-center"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div 
        className="flex space-x-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {projectLinks.map((link) => (
          <motion.div key={link.path} variants={itemVariants}>
            <Link
              to={link.path}
              className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                location.pathname === link.path
                  ? 'bg-white/15 text-white shadow-inner'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default BottomNav;
