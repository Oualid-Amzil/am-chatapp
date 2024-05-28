import NavBar from "./components/NavBar";
import HerSection from "./sections/HeroSection";
import InfoSection from "./sections/InfoSection";
import DetailsSection from "./sections/DetailsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HerSection />
      <InfoSection />
      <DetailsSection />
      <Footer />
    </div>
  );
}

export default App;
