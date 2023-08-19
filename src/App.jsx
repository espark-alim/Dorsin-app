import "./App.css";
import Navbar from "./components/Layout/Navbar";
import "../src/styles/global.css"
import HeroSection from "./components/Herosection/heroSection";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
     
    </div>
  );
}

export default App;
