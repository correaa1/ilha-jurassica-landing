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
          <div>
            <span className="text-4xl font-light [writing-mode:vertical-lr] rotate-180">
              DE DINOS
            </span>
          </div>
          {/* Pegadas decorativas */}
          <div className="flex flex-col gap-8 mt-80">
            <img 
              src="/assets/pegadapretabaixo.png" 
              alt="Pegada"
              className="w-8"
            />
            <img 
              src="/assets/pegadapretabaixo.png" 
              alt="Pegada"
              className="w-8 ml-12"
            />
            <img 
              src="/assets/pegadapretabaixo.png" 
              alt="Pegada"
              className="w-8"
            />
          </div>
        </div>

        <div className="relative w-full">
          <div className="flex items-start">
            <div className="absolute left-1/4 mt-20 w-[500px] z-10">
              <h2 className="text-4xl font-bold mb-6">
                CONHEÇA OS
                <div>DINOSSAUROS PRESENTES</div>
                <div>NA DINO JUNGLE</div>
              </h2>
              <p className="text-black leading-relaxed">
                O Tyrannosaurus rex foi um dos dinossauros mais ferozes
                <br />
                a andar sobre a Terra. Com seu corpo de até 12m de
                <br />
                altura, a mandíbula foi pensada para esmagar e
                <br />
                engolir um carro. esse famoso carnívoro dominou
                <br />
                parte das terras da região oeste da América do Norte
                <br />
                durante o fim do período Cretáceo, há 68 milhões de
                <br />
                anos.
              </p>
            </div>
            
            <div className="ml-auto h-[700px]">
              <img 
                src="/assets/t-rex.png" 
                alt="T-Rex"
                className="w-[800px] h-[600px] object-contain" 
              />
            </div>
          </div>

          {/* Navegação */}
          <div className="flex justify-center gap-24 mt-12">
            <div className="flex flex-col items-center">
              <img 
                src="/assets/anterior.png" 
                alt="Anterior" 
                className="w-12 mb-2"
              />
              <span className="text-sm">ANTERIOR</span>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="/assets/proximo.png" 
                alt="Próximo" 
                className="w-12 mb-2"
              />
              <span className="text-sm">PRÓXIMO</span>
            </div>
          </div>

          {/* Botão Reservar */}
          <div className="flex justify-center mt-12">
            <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors">
              Reservar mesa
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CatalogoDinos;
