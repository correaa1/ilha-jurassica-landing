import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <div className="relative w-full h-64 bg-black/80">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1200/400" 
            alt="Video preview" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <button className="relative z-10 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
          <Play className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default VideoSection;