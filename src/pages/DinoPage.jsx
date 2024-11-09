import { Menu, Instagram, Facebook, Youtube } from 'lucide-react';

const DinoJungleLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center bg-orange-500 p-4">
        <Menu className="text-white w-8 h-8" />
        <img src="/asset1" alt="Dino Jungle Logo" className="h-12" />
        <div className="flex gap-4">
          <Instagram className="text-white w-6 h-6" />
          <Facebook className="text-white w-6 h-6" />
          <Youtube className="text-white w-6 h-6" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: 'url("/asset2")'}}>
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4 py-20 flex flex-col items-center">
            <img src="/asset3" alt="Dino Logo Large" className="w-96 mb-8" />
            <button className="bg-green-500 text-white px-8 py-3 rounded-full text-xl">
              Uma Experiência Gastronômica
            </button>
            <div className="mt-12 text-center">
              <h1 className="text-6xl font-bold text-green-400 mb-4">CONHEÇA</h1>
              <h2 className="text-5xl font-bold text-orange-500">DINO JUNGLE!</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Gastronomia Section */}
      <section className="bg-orange-500 p-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-1/2">
              <h3 className="text-4xl font-bold text-white mb-4">Pratos exclusivos com sabores ESMAGADORES</h3>
              <p className="text-white">
                A culinária presente na Dino Jungle carrega em seu DNA toda a história dos nossos antecessores Dinossauros, em opções para todos paladares humanos.
              </p>
            </div>
            <div className="w-1/2">
              <img src="/asset4" alt="Specialty Drink" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Section */}
      <section className="bg-white p-8">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <div className="w-1/2">
                <h3 className="text-2xl font-bold mb-4">
                  Sabores que vão agradar CARNÍVOROS E HERBÍVOROS
                </h3>
                <p className="text-gray-600">
                  Nossos chefes produzem pratos estilizados com nossa temática, agradando pessoas (e dinossauros), herbívoros, carnívoros, piscívoros e outras seletividades alimentares.
                </p>
              </div>
              <div className="w-1/2">
                <img src="/asset5" alt="Food Plate" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Influencer Section */}
      <section className="bg-gray-100 p-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-8">O RESTANTE PREFERIDO DOS INFLUENCERS</h3>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="bg-gray-200 p-4 rounded">
                <div className="h-48 flex items-center justify-center border-2 border-green-300">
                  <p className="text-center text-sm">Video {num}</p>
                </div>
                <p className="text-center mt-2">INFLUENCER #{num}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instituto Section */}
      <section className="bg-orange-50 p-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                "A PAIXÃO PELOS DINOSSAUROS SE ENCONTROU COM UM DESTINO AINDA MAIOR"
              </h3>
              <p className="text-gray-600">
                O Instituto Zucky nasceu do amor pela paleontologia do profissional do mesmo nome.
              </p>
            </div>
            <div className="w-1/2">
              <img src="/asset6" alt="Dino Expert" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 p-4">
        <div className="container mx-auto">
          <button className="w-full bg-green-500 text-white py-3 rounded-full text-xl">
            Reservar mesa
          </button>
        </div>
      </footer>
    </div>
  );
};

export default DinoJungleLayout;