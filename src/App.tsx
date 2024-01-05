import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Description from "./components/Description/Index";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pb-8">
        <Home />
        <Services />
        <Description />
      </main>
    </>
  );
};

export default App;
