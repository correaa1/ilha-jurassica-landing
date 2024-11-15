import React from 'react';

const Contato = () => {
  return (
    <div className="relative w-full bg-[#8B4513] overflow-hidden">
      <section className="relative min-h-screen">
        {/* Título vertical e pegadas */}
        <div className="absolute top-12 left-6 flex flex-row gap-4">
          <div>
            <span className="text-7xl  font-extrabold text-black [writing-mode:vertical-lr] rotate-180">
              CONTATO
            </span>
          </div>
          {/* Pegadas decorativas */}
          <div className="flex flex-col gap-8 mt-8 ml-20">
            <img 
              src="/assets/pegadapretabaixo.png" 
              alt="Pegada"
              className="w-8 ml-16"
            />
            <img 
              src="/assets/pegadapretabaixo.png" 
              alt="Pegada"
              className="w-8"
            />
            <img 
              src="/assets/pegadapretabaixo.png" 
              alt="Pegada"
              className="w-8 ml-16"
            />
            <img 
              src="/assets/pegadapretabaixo.png" 
              alt="Pegada"
              className="w-8"
            />
            <img 
              src="/assets/pegadapretabaixo.png" 
              alt="Pegada"
              className="w-8 ml-16"
            />
            <img 
              src="/assets/pegadapretabaixo.png" 
              alt="Pegada"
              className="w-8"
            />
          </div>
        </div>

        {/* Conteúdo centralizado */}
        <div className="flex flex-col items-center justify-center pt-20">
          <div className="w-[600px] h-[300px] mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9033394540187!2d-44.71915572359653!3d-23.219646279678403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9d6d17ea6a5def%3A0xd89b097b790b5ee0!2sDino%20Jungle%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1707927044600!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex gap-2 mb-4">
            <img src="/assets/Avaliacao.png" alt="Estrela" className="w-100 h-32" />
          </div>
          
          <div className="text-white text-center mb-8">
            <p>AV. ROBERTO SILVEIRA, 568</p>
            <p>CENTRO, PARATY RJ - BRASIL</p>
            <p>CONTATO: +55 24 99857.4912</p>
          </div>
        </div>

        {/* Botões laterais */}
        <div className="absolute  right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          {/* Ícone maior do cardápio */}
          <div className="flex justify-end mb-4">
            <button className="bg-[#FF6B00] rounded-full ">
              <img 
                src="/assets/menu-cardapio.png" 
                alt="Cardápio" 
                className="w-16 h-16"
              />
            </button>
          </div>

          {/* Botões existentes */}
          <div className="flex items-center">
            <button className="text-white text-right px-6 py-2 rounded-l-full w-44">
              Reservar Mesa
            </button>
            <button className="bg-[#FF6B00] rounded-full -ml-3 ">
              <img 
                src="/assets/reservar.png" 
                alt="Reservar" 
                className="w-10 h-10"
              />
            </button>
          </div>

          <div className="flex items-center">
            <button className="text-white text-right px-6 py-2 rounded-l-full w-44">
              Delivery
            </button>
            <button className="bg-[#FF6B00] rounded-full -ml-3 ">
              <img 
                src="/assets/delivery.png" 
                alt="Delivery" 
                className="w-10 h-10"
              />
            </button>
          </div>

          <div className="flex items-center">
            <button className=" text-right text-white px-6 py-2 rounded-l-full w-44">
              Evento Privado
            </button>
            <button className="bg-[#FF6B00] rounded-full -ml-3 ">
              <img 
                src="/assets/evento.png" 
                alt="Evento" 
                className="w-10 h-10"
              />
            </button>
          </div>

          <div className="flex items-center">
            <button className="text-white text-right px-6 py-2 rounded-l-full w-44">
              Fale com o Dino
            </button>
            <button className="bg-green-500 rounded-full -ml-3 ">
              <img 
                src="/assets/whatsapp.png" 
                alt="WhatsApp" 
                className="w-10 h-10"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;