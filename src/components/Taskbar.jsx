import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { CgHome } from 'react-icons/cg';
import { BiTime } from 'react-icons/bi';

export function Taskbar({ apps, openApps, onAppClick, activeApp }) {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const currentDate = new Date().toLocaleDateString([], { month: 'short', day: 'numeric' });

  return (
    <div className="taskbar flex justify-between items-center px-4">
      {/* Left side */}
      <div className="flex items-center space-x-2">
        <motion.button
          className="app-icon"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <CgHome size={24} />
        </motion.button>
      </div>
      
      {/* Center - App Dock */}
      <motion.div 
        className="absolute left-[25%] transform -translate-x-1/2  backdrop-blur-md rounded-md px-2 py-1 flex space-x-1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
      >
        {apps.map((app) => (
          <motion.button
            key={app.id}
            className={cn(
              "app-icon group relative",
              openApps.includes(app.id) && "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-md",
              activeApp === app.id && "bg-accent text-accent-foreground"
            )}
            onClick={() => onAppClick(app.id)}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            
          >
            {app.iconUrl ? (
              <img 
                src={app.iconUrl} 
                alt={app.title}
                className="w-6 h-6 object-contain"
              />
            ) : (
              app.icon
            )}
            <span className="absolute bottom-full mb-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {app.title}
            </span>
          </motion.button>
        ))}
      </motion.div>
      
      {/* Right side - Clock */}
      <div className="flex items-center space-x-4 text-sm text-foreground">
        <div className="flex items-center space-x-1">
          <BiTime size={16} />
          <span>{currentTime}</span>
        </div>
        <span>{currentDate}</span>
      </div>
    </div>
  );
}