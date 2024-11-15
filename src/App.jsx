import DinoJungleHeader from './components/Header';
import VideoSection from './components/VideoSection';
import GastronomiaSection from './components/Gastronomia';
import ExperienciaPreHistorica from './components/Experiencia';
import './App.css'
import InstitutoSection from './components/InstitutoSection';
import CatalagoDinos from './components/CatalogoDinos';
import Contato from './components/Contato';
import Depoimentos from './components/Depoimento';
import TrabalheConosco from './components/TrabalheConosco';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <DinoJungleHeader />
      <GastronomiaSection/>
      <ExperienciaPreHistorica/>
      <InstitutoSection/>
      <CatalagoDinos/>
      <Contato/>
      <Depoimentos/>
      <TrabalheConosco/>
      <Footer/>
        
  {/*<VideoSection />*/ }    
    </div>
  );
};

export default App;

