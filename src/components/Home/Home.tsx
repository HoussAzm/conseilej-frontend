import React from "react";
import CarouselItem from "./CarouselItem";
import { Carousel } from "flowbite-react";
import architecture from "../../assets/architecture.jpg";
import M6 from "../../assets/M6.jpg";
import vh2 from "../../assets/vh2.jpg";

const carouselItems = [
  {
    title: "GÉREZ L’INTÉGRALITÉ DE VOTRE PROJET DANS UN SEUL SYSTÈME.",
    subTitle: "DECOUVREZ DES FORFAITS AU PRIX LE PLUS BAS",
    image: M6,
  },
  {
    title: "L'EXCELLENCE FINANCIÈRE AVEC CONSEIL EJ PATRIMONIAL.",
    subTitle: "DECOUVREZ DES FORFAITS AU PRIX LE PLUS BAS",
    image: architecture,
  },
  {
    title: "UN EXPERT ET SON ÉQUIPE POUR BIEN GÉRER VOTRE PATRIMOINE",
    subTitle: "DECOUVREZ DES FORFAITS AU PRIX LE PLUS BAS",
    image: vh2,
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

      {/* Bouton WhatsApp fixe */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "1000",
        }}
      >
        <a
          href="https://wa.me/212655408652"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
            alt="WhatsApp"
            width="50"
            height="50"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
