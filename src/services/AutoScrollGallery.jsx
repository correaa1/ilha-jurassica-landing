import React from 'react';
import { motion } from 'framer-motion';

const AutoScrollGallery = ({ images }) => {
  return (
    <motion.div
      className="flex gap-4 overflow-hidden"
      animate={{
        x: [0, -100 * images.length],
      }}
      transition={{
        duration: images.length * 5,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery ${index}`}
          className="w-[300px] h-[200px] object-cover"
        />
      ))}
    </motion.div>
  );
};