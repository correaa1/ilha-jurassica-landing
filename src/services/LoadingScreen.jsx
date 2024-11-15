import { motion } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      onAnimationComplete={onLoadingComplete}
    >
      <div className="flex flex-col items-center">
        {/* Logo */}
        <motion.h1 
          className="text-6xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-orange-500">DINO</span>
          <span className="text-green-500">JUNGLE</span>
        </motion.h1>
        
        {/* Pegadas animadas */}
        <div className="flex gap-4">
          {[...Array(3)].map((_, i) => (
            <motion.img
              key={i}
              src="/assets/pegadapretabaixo.png"
              alt="Pegada"
              className="w-12 h-12 invert"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [20, 0, -20]
              }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                repeat: 2,
                repeatDelay: 0.3
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;