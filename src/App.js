import './index.css';
import About from "./components/About.js"
import Footer from "./components/Footer.js"
import Hero from "./components/Hero.js"
import Navbar from "./components/Navbar.js"
import Services from "./components/Services.js"
import Tours from "./components/Tours.js"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />

    </>

  );
}

export default App;
