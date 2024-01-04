import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Services />
      </main>
    </>
  );
};

export default App;
