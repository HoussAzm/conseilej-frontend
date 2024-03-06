import villanight from "../../assets/villanight.jpg"
import Container from "../UI/Container";


const Expatriation = () => {
  return (
    <Container id="EXPATRIATION">
      <h1 className="titre14" title="EXPATRIATION">CONSEIL EN EXPATRIATION AU MAROC</h1>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto pb-8 pt-12" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-3/5 mx-auto">
            <p className="text-md font-semibold mb-8 text-justify">
            Chez Conseil EJ, nous sommes conscients que l'expatriation peut être un processus exigeant, tant pour vous que pour votre entourage professionnel et familial. Notre équipe dédiée travaille en étroite collaboration avec vous pour garantir une transition fluide et sans heurts. Nous nous efforçons de maximiser votre confort et votre productivité dans votre nouveau cadre professionnel, vous permettant ainsi de vous concentrer pleinement sur votre vie personnelle et professionnelle en toute confiance.
            </p>
            <p className="text-md font-semibold mb-8 text-justify">
            Notre service de conseil en expatriation au maroc se distingue par une approche exhaustive et personnalisée, spécialement conçue pour faciliter votre transition lors de votre expatriation au Maroc avec Conseil EJ. Nous nous engageons à optimiser la gestion de votre patrimoine financier tout en vous offrant des solutions sur mesure, garantissant ainsi votre confiance et votre tranquillité d'esprit pendant cette période cruciale.
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
