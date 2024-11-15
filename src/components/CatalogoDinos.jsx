import React from 'react';

const CatalogoDinos = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <section className="relative min-h-screen">
        {/* Título vertical */}
        <div className="absolute top-12 left-6 flex flex-row gap-4">
          <div>
            <span className="text-7xl font-extrabold [writing-mode:vertical-lr] rotate-180">
              CATÁLOGO
            </span>
          </div>
          <div className="flex justify-center">
            <span className="text-4xl font-light [writing-mode:vertical-lr] rotate-180">
              DE DINOS
            </span>
          </div>
          {/* Pegadas decorativas */}
          
        </div>

        <div className="relative w-full">
          {/* Container principal com grid responsivo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-8">
            {/* Coluna do texto e pegadas */}
            <div className="flex gap-8 lg:ml-[25%] mt-20">
              {/* Pegadas decorativas */}
          

              {/* Texto */}
              <div className="w-full flex flex-col text-center lg:w-[700px] z-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  CONHEÇA OS
                  <div>DINOSSAUROS PRESENTES</div>
                  <div>NA DINO JUNGLE</div>
                </h2>
                <p className="text-black leading-relaxed text-sm lg:text-base">
                  O Tyrannosaurus rex foi um dos dinossauros mais ferozes
                  a andar sobre a Terra. Com seu corpo de até 12m de
                  altura, a mandíbula foi pensada para esmagar e
                  engolir um carro. esse famoso carnívoro dominou
                  parte das terras da região oeste da América do Norte
                  durante o fim do período Cretáceo, há 68 milhões de
                  anos.
                </p>
              </div>
            </div>

            {/* Coluna do T-Rex */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <img 
                src="/assets/t-rex.png" 
                alt="T-Rex"
                className="absolute right-0 w-full lg:w-[800px] h-full object-contain object-right" 
              />
            </div>
          </div>

          {/* Navegação reposicionada */}
          <div className="w-full flex justify-end lg:pr-[15%] mt-8"> {/* Ajustado posicionamento */}
            <div className="flex gap-12">
              <div className="flex flex-col items-center">
                <img 
                  src="/assets/anterior.png" 
                  alt="Anterior" 
                  className="w-8 lg:w-12 mb-2"
                />
                <span className="text-xs lg:text-sm">ANTERIOR</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/assets/proximo.png" 
                  alt="Próximo" 
                  className="w-8 lg:w-12 mb-2"
                />
                <span className="text-xs lg:text-sm">PRÓXIMO</span>
              </div>
            </div>
          </div>

          {/* Container das pegadas separado */}
          <div className="absolute left-24 flex flex-col ">
            <div className='-translate-y-16'>
          
              <img 
                src="/assets/pegadapretabaixo.png" 
                alt="Pegada"
                className="w-8  "
              />
            </div>
            <div className='-translate-y-10'>
          
          <img 
            src="/assets/pegadapretabaixo.png" 
            alt="Pegada"
            className="w-8 ml-12 "
          />
        </div>
            <img 
              src="/assets/pegadapretabaixo.png" 
              alt="Pegada"
              className="w-8"
            />
          </div>

          {/* Botão Reservar */}
          <div className="flex justify-center mt-16 lg:mt-20 pb-8">
            <button className="bg-green-500 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full hover:bg-green-600 transition-colors">
              Reservar mesa
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CatalogoDinos;
