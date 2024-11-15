import React from 'react';

const ExperienciaPreHistorica = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <section className="relative min-h-screen">
        <div className="absolute top-12 left-6 flex flex-row gap-4">
          <div>
            <span className="text-7xl font-extrabold [writing-mode:vertical-lr] rotate-180">
              EXPERIÊNCIA
            </span>
          </div>
          <div>
            <span className="text-6xl font-bold [writing-mode:vertical-lr] rotate-180">
              PRÉ-HISTÓRICA
            </span>
          </div>
        </div>

        <div className="relative w-full">
          <div className="flex items-start">
            <div className="absolute left-1/4 mt-48 w-[500px] z-10">
              <h2 className="text-4xl font-bold mb-6">
                Sabores que vão agradar
                <div>CARNÍVOROS E</div>
                <div>HERBÍVOROS</div>
              </h2>
              <p className="text-black leading-relaxed">
                Nossos chefes produzem pratos estilizados com nossa
                <br />
                temática, agradando pessoas (e dinossauros),
                <br />
                herbívoros, carnívoros, pisicvoros e outras
                <br />
                seletividades alimentares. Além de uma grande cartela
                <br />
                de drinks originais.
              </p>
            </div>
            
            <div className="ml-auto">
              <img 
                src="/assets/tabua2.png" 
                alt="Tábua com lanche"
                className="w-[800px]"
              />
            </div>
          </div>

          <div className="relative mt-32">
            <div className="absolute left-[15%] -top-16">
              <div className="flex flex-col gap-8">
                <img 
                  src="/assets/pegadapreta.png" 
                  alt="Pegada"
                  className="w-24"
                  style={{ height: 'auto' }}
                />
                <img 
                  src="/assets/pegadasdino.png" 
                  alt="Pegada"
                  className="w-24"
                  style={{ height: 'auto' }}
                />
              </div>
            </div>

            <div className="flex gap-12">
              <div className="w-[400px] ml-[25%]">
                <h2 className="text-4xl font-bold mb-4 leading-tight">
                  Um espaço que conta
                  <br />
                  uma história com
                  <br />
                  mais de
                  <div className="text-[#FF6B00] font-black">
                    200 MILHÕES DE
                    <br />
                    ANOS DE VIDA
                  </div>
                </h2>
                <p className="text-black leading-relaxed max-w-md">
                  O Espaço Dino Jungle abraça não só um sentimento de 
                  experiência única. Criamos um ambiente imersivo para você se 
                  sentir na Era Mesozoica com Dinossauros realistas aguardando 
                  adultos e crianças para um passeio em comum.
                </p>
              </div>

              <div className="flex items-start gap-8">
                <img 
                  src="/assets/dino2.png" 
                  alt="Ambiente com dinossauro"
                  className="w-[250px]"
                />
                
                <div className="flex flex-col items-center gap-8">
                  <img 
                    src="/assets/pegadapreta.png" 
                    alt="Pegada"
                    className="w-20 ml-24 mt-12" 
                    style={{ height: 'auto '  }}
                  />
                </div>
              </div>

              <div className="ml-auto mt-12 flex items-center ">
                <img 
                  src="/assets/menubranco.png" 
                  alt="Menu"
                  className="w-20 "
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-24">
          <div className="grid grid-cols-3 gap-8">
            {[
              'Video provando pratos carro-chefe',
              'Video conhecendo ambiente',
              'Video provando drinks exoticos',
              'Video aprendendo sobre dinossauros',
              'Video vivência infantil',
              'Video 5 motivos para ir na Dino Jungle'
            ].map((title, index) => (
              <div 
                key={index} 
                className="relative aspect-video bg-gray-200 flex flex-col items-center justify-center p-4"
              >
                <div className="absolute inset-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full border-2 border-green-500 transform rotate-45" />
                    <div className="w-full h-full border-2 border-green-500 transform -rotate-45" />
                  </div>
                </div>
                <p className="text-center text-sm font-medium relative z-10">
                  {title}
                </p>
                <p className="text-center text-xs mt-2 relative z-10">
                  INFLUENCER #{index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienciaPreHistorica;