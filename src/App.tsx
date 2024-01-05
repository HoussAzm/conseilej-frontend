import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Description from "./components/Description/Index";
import APropr from "./components/APropr/Index";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pb-8">
        <Home />
        <Services />
        <Description />
        <APropr />
        <Projects />
      </main>
    </>
  );
};

export default App;
