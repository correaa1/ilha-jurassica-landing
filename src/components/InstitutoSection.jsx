import React from 'react';

const InstitutoSection = () => {
  return (
    <div className="relative w-full bg-[#F5E6D3] overflow-hidden">
      <section className="relative min-h-screen">
        <div className="absolute top-12 left-6">
          <div className="flex flex-row  gap-1">
            
            <span className="text-7xl font-extrabold [writing-mode:vertical-lr] rotate-180">
              INSTITUTO ZUCKY
            </span>
            <div className="ml-2 flex justify-center ">
              <span className="text-4xl font-light [writing-mode:vertical-lr] rotate-180">
                & NOSSA HISTÓRIA
              </span>
            </div>
           
          </div>
          
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 mt-12">
            "A PAIXÃO PELOS DINOSSAUROS SE
            <br />
            ENCONTROU COM UM DESTINO AINDA MAIOR"
          </h2>

          <div className="flex justify-center items-center relative">
            <div className="w-[800px] relative">
              <img 
                src="/assets/zucky-photo.jpg" 
                alt="Paleontóloga com dinossauro"
                className="w-full rounded-lg"
              />
              <div className="absolute -right-[220px] top-1/2 -translate-y-1/2 w-[200px]">
                <p className="text-black text-lg leading-relaxed">
                  O Instituto Zucky nasceu do amor pela paleontologia do
                  profissional do mesmo nome. Com uma vida dedicada ao
                  passado e vida dos dinossauros, Zucky deixou um legado
                  vivo a ser continuado por sua família, amigos e conhecidos.
                  Responsabilidade essa que foi tomada por...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[17%] top-4">
          <img 
            src="/assets/pegadapretabaixo.png" 
            alt="Pegada"
            className="w-12"
            style={{ height: 'auto' }}
          />
        </div>
      </section>
    </div>
  );
};

export default InstitutoSection;
