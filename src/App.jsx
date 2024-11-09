import DinoJungleHeader from './components/Header';
import VideoSection from './components/VideoSection';
import GastronomiaSection from './components/Gastronomia';
import ExperienciaPreHistorica from './components/Experiencia';
import './App.css'

const App = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <DinoJungleHeader />
      <GastronomiaSection/>
      <ExperienciaPreHistorica/>
      <VideoSection />
    </div>
  );
};

export default App;

