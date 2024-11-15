import React, { useRef, useState, useEffect } from 'react';

const DinoJungleHeader = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isControlVisible, setIsControlVisible] = useState(true);
  const timeoutRef = useRef(null);

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
    <>
      <div className="relative w-full h-[80vh] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/pessoas1.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 w-full py-4 px-6 flex justify-between items-center z-50">
          <div className="w-8 h-8">
            <img 
              src="/assets/talheres1.png" 
              alt="Menu" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <img 
              src="/assets/pecaagora1.png" 
              alt="Peça agora" 
              className="h-8"
            />
            <div className="flex gap-3">
              <img src="/assets/face1.png" alt="Facebook" className="w-5 h-5" />
              <img src="/assets/insta1.png" alt="Instagram" className="w-5 h-5" />
              <img src="/assets/youtube1.png" alt="YouTube" className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="relative w-full h-[80vh] flex flex-col items-center justify-center">
          {/* logo image - não tenho a imagem da logo */}
          {/* <img 
            src="/assets/dino-jungle-logo.png" 
            alt="Dino Jungle" 
            className="w-96 z-20"
          /> */}
          <h1 className="text-6xl font-bold z-20">
            <span className="text-orange-500">DINO</span>
            <span className="text-green-500">JUNGLE</span>
          </h1>

          <div className="mt-6 px-6 py-2 bg-green-500 rounded-full text-white z-20">
            Uma Experiência Gastronômica
          </div>

          <img 
            src="/assets/tabuaLanche1.png" 
            alt="Burger" 
            className="absolute left-0 bottom-1/3 w-96 z-10 transform -rotate-12"
          />
          <img 
            src="/assets/dino1.png" 
            alt="Dinosaur" 
            className="absolute right-0 top-1/4 w-96 z-10"
          />
        </div>
      </div>
      <div className="relative w-full bg-black">
        <div className="absolute -top-20 left-0 w-full flex justify-center">
          <img 
            src="/assets/dino-jungle.png" 
            alt="Conheça" 
            className="z-20"
          />
        </div>
        
        <div className="relative w-full h-[80vh]">
          <div 
            className="relative w-full h-full bg-black"
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
              Seu navegador não suporta o elemento de vídeo.
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
    </>
  );
};

export default DinoJungleHeader;