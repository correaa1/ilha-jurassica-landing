import { useState, useEffect } from 'react';
import LoadingScreen from './services/LoadingScreen';
import DinoJungleHeader from './components/Header';
import GastronomiaSection from './components/Gastronomia';
import ExperienciaPreHistorica from './components/Experiencia';
import './App.css'
import InstitutoSection from './components/InstitutoSection';
import CatalagoDinos from './components/CatalogoDinos';
import Contato from './components/Contato';
import Depoimentos from './components/Depoimento';
import TrabalheConosco from './components/TrabalheConosco';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const AutoScrollGallery = ({ images }) => {
  return (
    <motion.div
      className="flex gap-4 overflow-hidden"
      animate={{
        x: [0, -100 * images.length],
      }}
      transition={{
        duration: images.length * 5,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery ${index}`}
          className="w-[300px] h-[200px] object-cover"
        />
      ))}
    </motion.div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="h-screen overflow-x-scroll snap-y snap-mandatory">
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <section className="snap-start">
            <DinoJungleHeader />
          </section>
          
          <section className="snap-start">
            <GastronomiaSection />
          </section>
          
          <section className="snap-start">
            <ExperienciaPreHistorica />
          </section>
          
          <section className="snap-start">
            <InstitutoSection />
          </section>
          
          <section className="snap-start">
            <CatalagoDinos />
          </section>
          
          <section className="snap-start">
            <Contato />
          </section>
          
          <section className="snap-start">
            <Depoimentos />
          </section>
          
          <section className="snap-start">
            <TrabalheConosco />
          </section>
          
          <section className="snap-start">
            <Footer />
          </section>
        </>
      )}
    </div>
  );
};

export default App;

