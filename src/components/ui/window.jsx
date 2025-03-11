import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { X, Minus, Square } from 'lucide-react';

export function Window({
  title,
  children,
  className,
  defaultPosition = { x: 0, y: 0 },
  defaultSize = { width: 500, height: 400 },
  onClose,
  isOpen = true,
  id,
}) {
  const [size, setSize] = useState(defaultSize);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [zIndex, setZIndex] = useState(1);
  const [isClosing, setIsClosing] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleFocus = () => {
    setZIndex(10);
  };

  const handleClose = () => {
    setIsClosing(true);
    // Delay actual closing to allow animation to complete
    setTimeout(() => {
      onClose();
    }, 500);
  };

  // Window variants for animations
  const windowVariants = {
    open: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      rotateX: 0
    },
    closed: { 
      opacity: 0, 
      scale: 0.8,
      y: 100,
      rotateX: 50,
      transition: { 
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1] // Custom easing for a more dramatic effect
      }
    },
    minimized: {
      opacity: 0,
      scale: 0.5,
      y: 300,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && !isMinimized && (
        <motion.div
          className={cn("window absolute", className)}
          initial={{ opacity: 0, scale: 0.9, y: -50 }}
          animate={isClosing ? "closed" : "open"}
          exit="closed"
          variants={windowVariants}
          transition={{ 
            type: "spring", 
            damping: 20, 
            stiffness: 300 
          }}
          drag={!isMaximized}
          dragConstraints={{ left: -500, right: 500, top: -300, bottom: 300 }}
          dragElastic={0.1}
          dragMomentum={false}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragListener={true}
          dragControls={undefined}
          whileDrag={{ cursor: "grabbing" }}
          onDragStart={handleFocus}
          style={{ 
            zIndex,
            position: 'absolute',
            left: isMaximized ? 0 : defaultPosition.x,
            top: isMaximized ? 0 : defaultPosition.y,
            transformOrigin: "center bottom"
          }}
        >
          <div className="window-header cursor-grab">
            <div className="window-controls">
              <button className="window-control window-close group" onClick={handleClose} aria-label="Close window">
                <X className="w-2 h-2 opacity-0 group-hover:opacity-100" />
              </button>
              <button className="window-control window-minimize group" onClick={handleMinimize} aria-label="Minimize window">
                <Minus className="w-2 h-2 opacity-0 group-hover:opacity-100" />
              </button>
              <button className="window-control window-maximize group" onClick={handleMaximize} aria-label="Maximize window">
                <Square className="w-2 h-2 opacity-0 group-hover:opacity-100" />
              </button>
            </div>
            <div className="text-sm font-medium">{title}</div>
            <div className="w-16"></div> {/* Spacer for balance */}
          </div>
          <div className="window-content" style={{ height: isMaximized ? 'calc(100% - 2.5rem)' : size.height - 40 }}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 