import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DinoJungleHeader = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isControlVisible, setIsControlVisible] = useState(true);
  const timeoutRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Transformações baseadas no scroll
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.6]);
  const logoY = useTransform(scrollY, [0, 200], [0, -50]);
  const menuX = useTransform(scrollY, [0, 200], [0, -100]);

  // Adicione o hook useInView
  const { ref: videoSectionRef, inView } = useInView({
    threshold: 0.5 // Dispara quando 50% da seção estiver visível
  });

  // Efeito para controlar o autoplay
  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      startHideTimeout();
    }
  }, [inView]);

  // Função para esconder o controle após 2 segundos
  const startHideTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setIsControlVisible(false);
      }
    }, 2000);
  };

  // Função para mostrar o controle
  const showControl = () => {
    setIsControlVisible(true);
    startHideTimeout();
  };

  const handleVideoControl = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      startHideTimeout();
    }
  };

  // Limpar timeout quando o componente for desmontado
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Adicionar evento para quando o vídeo terminar
  useEffect(() => {
    const video = videoRef.current;
    
    const handleVideoEnd = () => {
      setIsPlaying(false);
      setIsControlVisible(true);
    };

    if (video) {
      video.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/espaco.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 w-full py-4 px-6 z-50">
          <div className="flex justify-between items-center">
            {/* Espaço vazio à esquerda para manter centralização */}
            <div className="w-[200px]"></div>
            
            {/* Menu de talheres centralizado */}
            <div className="flex items-center gap-8">
              <img 
                src="/assets/talheres1.png" 
                alt="Menu" 
                className="w-8 h-8 cursor-pointer"
                style={{ 
                  filter: 'invert(48%) sepia(54%) saturate(2882%) hue-rotate(346deg) brightness(101%) contrast(96%)' 
                }}
              />
            </div>
            
            {/* Redes sociais e Peça agora à direita */}
            <div className="flex items-center gap-4 w-[200px] justify-end">
              <div className="flex items-center gap-3">
                <div className="transform transition-transform duration-300 hover:scale-110 cursor-pointer">
                  <img 
                    src="/assets/pecaagora1.png" 
                    alt="Peça agora" 
                    className="h-6"
                  />
                </div>
                <img 
                  src="/assets/face1.png" 
                  alt="Facebook" 
                  className="w-5 h-5 cursor-pointer transform transition-transform duration-300 hover:scale-110"
                  style={{ filter: 'invert(48%) sepia(54%) saturate(2882%) hue-rotate(346deg) brightness(101%) contrast(96%)' }}
                />
                <img 
                  src="/assets/insta1.png" 
                  alt="Instagram" 
                  className="w-5 h-5 cursor-pointer transform transition-transform duration-300 hover:scale-110"
                  style={{ filter: 'invert(48%) sepia(54%) saturate(2882%) hue-rotate(346deg) brightness(101%) contrast(96%)' }}
                />
                <img 
                  src="/assets/youtube1.png" 
                  alt="YouTube" 
                  className="w-5 h-5 cursor-pointer transform transition-transform duration-300 hover:scale-110"
                  style={{ filter: 'invert(48%) sepia(54%) saturate(2882%) hue-rotate(346deg) brightness(101%) contrast(96%)' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo central */}
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <motion.img 
            src="/assets/tabuaLanche1.png" 
            alt="Burger" 
            className="absolute left-0 bottom-1/3 w-96 z-10 transform -rotate-12"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
          
          <motion.img 
            src="/assets/dino1.png" 
            alt="Dinosaur" 
            className="absolute right-0 top-1/4 w-96 z-10"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </div>
      </div>

      {/* Video Section */}
      <div 
        ref={videoSectionRef} 
        className="relative w-full h-screen"
      >
        <div className="absolute -top-20 left-0 w-full flex justify-center z-10">
          <img 
            src="/assets/dino-jungle.png" 
            alt="Conheça" 
            className="z-20"
          />
        </div>
        
        <div 
          className="relative w-full h-full"
          onMouseMove={showControl}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/assets/video1.mp4"
            muted
            playsInline
          >
            <source src="/assets/video1.mp4" type="video/mp4" />
          </video>
          
          <div 
            className={`absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${
              isControlVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={handleVideoControl}
          >
            <div className="w-24 h-24 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/40 transition-all duration-300 border border-white/30">
              {isPlaying ? (
                <div className="flex gap-2">
                  <div className="w-[6px] h-[30px] bg-white/90"></div>
                  <div className="w-[6px] h-[30px] bg-white/90"></div>
                </div>
              ) : (
                <div className="w-0 h-0 
                  border-y-[15px] border-y-transparent 
                  border-l-[25px] border-l-white/90 
                  ml-2">
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinoJungleHeader;