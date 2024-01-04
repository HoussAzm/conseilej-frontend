import CarouselItem from "./CarouselItem";

import { Carousel } from "flowbite-react";

import banner from "../../assets/banner.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

const carouselItems = [
  {
    title: "GÉREZ L’INTÉGRALITÉ DE VOTRE PROJET DANS UN SEUL SYSTÈME.",
    subTitle: "RÉSERVEZ ET DECOUVRER FORFAITS AU PRIX LE PLUS BAS",
    image: banner,
  },
  {
    title: "DÉCOUVREZ L'EXCELLENCE FINANCIÈRE AVEC CEJ CONSEIL PATRIMONIAL.",
    subTitle: "RÉSERVEZ ET DECOUVRER FORFAITS AU PRIX LE PLUS BAS",
    image: banner2,
  },
  {
    title: "UN EXPERT ET SON ÉQUIPE POUR BIEN GÉRER VOTRE PATRIMOINE",
    subTitle: "RÉSERVEZ ET DECOUVRER FORFAITS AU PRIX LE PLUS BAS",
    image: banner3,
  },
];

const Home = () => {
  return (
    <div className="" id="home">
      <div className="lg:px-14 max-w-screen-2xl mx-auto min-h-max lg:h-[800px] flex justify-center items-center px-4">
        <Carousel className="w-full mx-auto">
          {carouselItems.map((item) => (
            <CarouselItem {...item} key={item.title} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
