import CarouselItem from "./CarouselItem";
import { Carousel } from "flowbite-react";

import architecture from "../../assets/architecture.jpg"
import batiment from "../../assets/batiment.jpg"
import M6 from "../../assets/M6.jpg"

const carouselItems = [
  {
    title: "GÉREZ L’INTÉGRALITÉ DE VOTRE PROJET DANS UN SEUL SYSTÈME.",
    subTitle: "RÉSERVEZ ET DECOUVREZ DES FORFAITS AU PRIX LE PLUS BAS",
    image: M6,
  },
  {
    title: "DÉCOUVREZ L'EXCELLENCE FINANCIÈRE AVEC CEJ CONSEIL PATRIMONIAL.",
    subTitle: "RÉSERVEZ ET DECOUVREZ DES FORFAITS AU PRIX LE PLUS BAS",
    image: architecture,
  },
  {
    title: "UN EXPERT ET SON ÉQUIPE POUR BIEN GÉRER VOTRE PATRIMOINE",
    subTitle: "RÉSERVEZ ET DECOUVREZ DES FORFAITS AU PRIX LE PLUS BAS",
    image: batiment,
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
