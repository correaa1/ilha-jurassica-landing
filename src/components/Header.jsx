import React, { useRef } from 'react';

const DinoJungleHeader = () => {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

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
                    src="/assets/conheca1.png" 
                    alt="Conheça" 
                    className="z-20"
                />
            </div>
            
            <div className="relative w-full h-[80vh]">
                <div className="relative w-full h-full bg-black">
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
                        className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer"
                        onClick={handlePlayVideo}
                    >
                        <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-t-12 border-b-12 border-l-20 border-transparent border-l-white ml-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
};

export default DinoJungleHeader;