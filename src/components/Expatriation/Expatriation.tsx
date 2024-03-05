import villanight from "../../assets/villanight.jpg"
import Container from "../UI/Container";


const Expatriation = () => {
  return (
    <Container id="EXPATRIATION">
      <h1 className="titre14">EXPATRIATION MAROC</h1>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto pb-8 pt-12" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-3/5 mx-auto">
            <p className="text-md font-semibold mb-8 text-justify">
              Notre service de conseil patrimonial se distingue par une approche complète et personnalisée, visant à optimiser la gestion de votre patrimoine financier et à vous offrir des solutions sur mesure. De la planification fiscale à la gestion d'actifs, notre équipe d'experts chevronnés est dédiée à vous aider à atteindre vos objectifs financiers avec confiance et tranquillité d'esprit.
            </p>

            <p className="text-md font-semibold mb-8 text-justify">
              Notre équipe dédiée travaille de concert avec vous pour garantir une transition sans heurts pour vous, vos collaborateurs et votre famille. Nous maximisons votre confort et votre productivité dans ce nouveau cadre professionnel, vous permettant de vous concentrer sur votre vie professionnelle et personnelle en toute confiance.
            </p>
          </div>

          <div>
           <img src={villanight} title="EXPATRIÉ" className="w-100" alt="Expatriation" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Expatriation;
