import CarouselItem from "./CarouselItem";
import { Carousel } from "flowbite-react";

import tourm6 from "../../assets/tourm6.png"
import sahara from "../../assets/sahara.jpg"
import maroc2 from "../../assets/maroc2.jpg"


const carouselItems = [
  {
    title: "GÉREZ L’INTÉGRALITÉ DE VOTRE PROJET DANS UN SEUL SYSTÈME.",
    subTitle: "RÉSERVEZ ET DECOUVREZ DES FORFAITS AU PRIX LE PLUS BAS",
    image: tourm6,
  },
  {
    title: "DÉCOUVREZ L'EXCELLENCE FINANCIÈRE AVEC CEJ CONSEIL PATRIMONIAL.",
    subTitle: "RÉSERVEZ ET DECOUVREZ DES FORFAITS AU PRIX LE PLUS BAS",
    image: sahara,
  },
  {
    title: "UN EXPERT ET SON ÉQUIPE POUR BIEN GÉRER VOTRE PATRIMOINE",
    subTitle: "RÉSERVEZ ET DECOUVREZ DES FORFAITS AU PRIX LE PLUS BAS",
    image: maroc2,
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
