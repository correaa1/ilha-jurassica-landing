import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const GastronomiaSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    '/assets/sobremesa2.png',
    '/assets/prato.jpg',
    '/assets/prato1.jpg',
    '/assets/prato2.jpg',
    '/assets/prato3.jpg',
  ];

  // Função para ir para imagem anterior
  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Função para ir para próxima imagem
  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] bg-orange-500">
      <div className="w-full py-3 px-6 flex justify-between items-center">
        <img 
          src="/assets/talheres1.png" 
          alt="Menu" 
          className="w-12 h-12 cursor-pointer transform transition-transform duration-300 hover:scale-110"
        />
        
        <img 
          src="/assets/dino-jungle.png" 
          alt="Dino Jungle" 
          className="h-8 cursor-pointer transform transition-transform duration-300 hover:scale-110"
        />
        
        <div className="flex gap-4">
          <img 
            src="/assets/insta1.png" 
            alt="Instagram" 
            className="w-5 h-5 cursor-pointer transform transition-transform duration-300 hover:scale-110"
          />
          <img 
            src="/assets/face1.png" 
            alt="Facebook" 
            className="w-5 h-5 cursor-pointer transform transition-transform duration-300 hover:scale-110"
          />
          <img 
            src="/assets/youtube1.png" 
            alt="YouTube" 
            className="w-5 h-5 cursor-pointer transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      <div className="relative w-full h-[calc(100%-4rem)]">
        <div className="absolute left-6 h-full py-32">
          <div className="flex h-full">
            <div 
              style={{ writingMode: 'vertical-lr' }} 
              className="text-5xl font-bold text-black tracking-wider transform rotate-180"
            >
              GASTRONOMIA
            </div>
            <div className="relative ml-4 mt-22">
              <img 
                src="/assets/pegadapretabaixo.png" 
                alt="Pegada" 
                className="w-8 ml-12"
                style={{ 
                  filter: 'invert(13%) sepia(90%) saturate(5858%) hue-rotate(357deg) brightness(97%) contrast(113%)',
                  opacity: '0.9'
                }}
              />
              <img 
                src="/assets/pegadapretabaixo.png" 
                alt="Pegada" 
                className="w-8"
                style={{ 
                  filter: 'invert(13%) sepia(90%) saturate(5858%) hue-rotate(357deg) brightness(97%) contrast(113%)',
                  opacity: '0.9'
                }}
              />
              <img 
                src="/assets/pegadapretabaixo.png" 
                alt="Pegada" 
                className="w-8 ml-12"
                style={{ 
                  filter: 'invert(13%) sepia(90%) saturate(5858%) hue-rotate(357deg) brightness(97%) contrast(113%)',
                  opacity: '0.9'
                }}
              />
            </div>
         
          </div>
          <div className="relative ml-4 ">
              <img 
                src="/assets/pegadapretabaixo.png" 
                alt="Pegada" 
                className="w-8 ml-12"
                style={{ 
                  filter: 'invert(13%) sepia(90%) saturate(5858%) hue-rotate(357deg) brightness(97%) contrast(113%)',
                  opacity: '0.9'
                }}
              />
            </div>
        </div>

        <div className="absolute w-full h-full flex items-center pl-40">
          <div className="w-full max-w-5xl mx-auto -ml-0">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/assets/pegadabranca.png" 
                alt="Ícone" 
                className="w-16 mb-4"
              />
              <p className="text-white mb-4 text-sm">gastronomia</p>
              
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white leading-tight">
                  Pratos exclusivos<br />
                  com sabores<br />
                  ESMAGADORES
                </h2>
              </div>

              <p className="text-white text-base max-w-md mb-16 leading-relaxed text-center">
                A culinária presente na Dino Jungle carrega em seu DNA toda a história dos nossos 
                antecessores Dinossauros, em opções para todos paladares humanos.
              </p>

              <div className="flex gap-24">
                <div 
                  className="flex flex-col items-center cursor-pointer"
                  onClick={handlePrevious}
                >
                  <img 
                    src="/assets/anterior.png" 
                    alt="Anterior" 
                    className="w-12 mb-2"
                  />
                  <span className="text-white text-sm">ANTERIOR</span>
                </div>
                <div 
                  className="flex flex-col items-center cursor-pointer"
                  onClick={handleNext}
                >
                  <img 
                    src="/assets/proximo.png" 
                    alt="Próximo" 
                    className="w-12 mb-2"
                  />
                  <span className="text-white text-sm">PRÓXIMO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2">
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 rotate-45" 
               style={{
                 backgroundColor: '#FF6B00',
                 WebkitMaskImage: 'url(/assets/pegadabranca.png)',
                 maskImage: 'url(/assets/pegadabranca.png)',
                 WebkitMaskSize: 'contain',
                 maskSize: 'contain',
                 WebkitMaskRepeat: 'no-repeat',
                 maskRepeat: 'no-repeat',
                 width: '400px',
                 height: '400px',
                 opacity: '0.8'
               }} />
          
          <AnimatePresence mode='wait'>
            <motion.img 
              key={currentIndex}
              src={images[currentIndex]}
              alt="Prato especial"
              className="absolute right-24 top-1/2 transform -translate-y-1/2 z-10 w-[300px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default GastronomiaSection;