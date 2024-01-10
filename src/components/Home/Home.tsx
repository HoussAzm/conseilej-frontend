import CarouselItem from "./CarouselItem";
import { Carousel } from "flowbite-react";

import immo1 from "../../assets/immo1.jpg";
import immo2 from "../../assets/immo2.jpg";
import immo3 from "../../assets/immo3.jpg"
const carouselItems = [
  {
    title: "GÉREZ L’INTÉGRALITÉ DE VOTRE PROJET DANS UN SEUL SYSTÈME.",
    subTitle: "RÉSERVEZ ET DECOUVREZ DES FORFAITS AU PRIX LE PLUS BAS",
    image: immo1,
  },
  {
    title: "DÉCOUVREZ L'EXCELLENCE FINANCIÈRE AVEC CEJ CONSEIL PATRIMONIAL.",
    subTitle: "RÉSERVEZ ET DECOUVREZ DES FORFAITS AU PRIX LE PLUS BAS",
    image: immo2,
  },
  {
    title: "UN EXPERT ET SON ÉQUIPE POUR BIEN GÉRER VOTRE PATRIMOINE",
    subTitle: "RÉSERVEZ ET DECOUVREZ DES FORFAITS AU PRIX LE PLUS BAS",
    image: immo3,
  },
];

const Home = () => {
  return (
    <div className="" id="home">
      <div className="lg:px-14 max-w-screen-2xl mx-auto min-h-max lg:h-[800px] flex justify-center items-center px-4">
        <Carousel className="w-full mx-auto">
          {carouselItems.map((item, index) => (
            <CarouselItem {...item} key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
