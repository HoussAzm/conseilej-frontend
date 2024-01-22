import cej from "../../assets/cej.mp4";
import Container from "../UI/Container";

const Expatriation = () => {
    return (
        <Container id="expatriation">
            <h1 className="titre14">Expatriation Maroc</h1>
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto pb-8 pt-12" id="about">
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="md:w-3/5 mx-auto">
                        <p className="text-md font-semibold  md:text-left text-center mb-8">
                            Notre service de conseil patrimonial se distingue par une approche <br />
                            complète et personnalisée, visant à optimiser la gestion de votre <br />
                            patrimoine financier et à vous offrir des solutions sur mesure. <br />
                            De la planification fiscale à la gestion d'actifs, notre équipe <br />
                            d'experts chevronnés est dédiée à vous aider à atteindre vos  <br />
                            objectifs financiers avec confiance et tranquillité d'esprit.</p>

                        <p className="text-md font-semibold  md:text-left text-center mb-8">
                            Notre équipe dédiée travaille de concert avec vous pour garantir <br />
                            une transition sans heurts pour vous, vos collaborateurs et votre <br />
                            famille. Nous maximisons votre confort et votre productivité dans <br />
                            ce nouveau cadre professionnel, vous permettant de vous concentrer <br />
                            sur votre vie professionnelle et personnelle en toute confiance.</p>
                    </div>
                    <div>
                        <video autoPlay controls className="imgs" width="400" height="225">
                            <source src={cej} type="video/mp4" />
                            Votre navigateur ne prend pas en charge la balise vidéo.
                        </video>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Expatriation;
