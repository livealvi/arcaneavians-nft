import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import "bootstrap/dist/css/bootstrap.min.css";
import { Section } from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <HeroSection />
      <div className="section">
        <div className="space">
          <div className="slider" style={{margin:"0 50px"}}>
            <ImageSlider />
          </div>
          <Section />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
