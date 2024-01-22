import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Description from "./components/Description/Index";
import Expatriation from "./components/Expatriation/Expatriation";
import APropr from "./components/APropr/Index";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <main className="pb-8">
        <Home />
        <Description />
        <Expatriation />
        <APropr />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
