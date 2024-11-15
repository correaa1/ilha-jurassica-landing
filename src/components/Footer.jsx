const Footer = () => {
  return (
    <footer className="bg-[#FF6B00] w-full min-h-[250px] py-16">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Logo */}
          <img 
            src="/assets/dino-jungle.png" 
            alt="Dino Jungle" 
            className="w-32"
          />

          {/* Links de navegação em linha */}
          <nav className="flex gap-6 text-sm text-black">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Gastronomia</a>
            <a href="#" className="hover:underline">Experiência pré-histórica</a>
            <a href="#" className="hover:underline">Instituto Zucky</a>
            <a href="#" className="hover:underline">Redes Sociais</a>
            <a href="" className="hover:underline">Trabalhe Conosco</a>
            <a href="#" className="hover:underline">FAQ</a>
            <a href="/contato" className="hover:underline">Contato</a>
          </nav>

          {/* Copyright */}
          <div className="text-xs text-black">
            © Dino Jungle, 2024. Design por Agência Ross.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;