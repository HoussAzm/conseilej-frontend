import tower1 from "../assets/tower1.jpeg";
import tower2 from "../assets/tower2.jpeg";
import tower3 from "../assets/tower3.jpg";
import tower4 from "../assets/tower4.jpg";
import tower5 from "../assets/tower5.jpg";
import tower6 from "../assets/tower6.jpg";
import tower7 from "../assets/tower7.jpg";
import tower8 from "../assets/tower8.jpg";
import tower9 from "../assets/tower9.jpg";
import Container from "./UI/Container";

const Projects = () => {
  const images = [
    tower1,
    tower2,
    tower3,
    tower4,
    tower5,
    tower9,
    tower7,
    tower8,
    tower6,
  ];

  return (
    <Container>
      <div className=" mx-auto my-12 md:my-24" id="nos_projets">
        <div className="text-center md:w-1/2 mx-auto">
          <h2 className="text-2xl md:text-4xl text-gold-500 font-bold mb-4">
            DÉCOUVREZ NOS PROJETS
          </h2>
          <p className="text-md mb-8  mx-auto font-semibold">
            Optimisez votre patrimoine, bâtissez votre avenir : Le Conseil
            Patrimonial CEJ, votre partenaire d'exception dans la gestion
            patrimoniale et immobilière. Des conseils avisés, des opportunités
            immobilières uniques – Ensemble, façonnons votre succès financier et
            votre bien-être immobilier.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="p-2">
              <div className="bg-gray-200 rounded-md overflow-hidden shadow-md hover:scale-95 transition-all duration-300">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-neutralSilver lg:w-4/5 xl:w-3/4 mx-auto p-6 lg:p-10 rounded mb-12 md:mb-24">
        <h1 className="text-center text-2xl md:text-4xl text-gold-500 font-bold mb-6">
          Pourquoi pas vous ?
        </h1>
        <p className="text-center mb-8 text-black text-md font-bold">
          Etude réalisée par l’institut IFOP auprès de 901 clients de Primonial
          Gestion Privée du 23 mai au 15 juin 2022.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="text-center bg-gray-100 p-6 rounded-lg">
            <p className="text-2xl md:text-4xl font-bold text-blue-500 mb-3">
              71%
            </p>
            <p className="md:text-lg font-bold text-sm text-black ">
              De nos clients ont été recommandés
            </p>
          </div>
          <div className="text-center bg-gray-100 p-6 rounded-lg">
            <p className="text-2xl md:text-4xl font-bold text-blue-500 mb-3">
              90%
            </p>
            <p className="md:text-lg font-bold text-sm text-black ">
              Des clients sont satisfaits de la qualité des réponses de leur
              conseiller
            </p>
          </div>
          <div className="text-center bg-gray-100 p-6 rounded-lg">
            <p className="text-2xl md:text-4xl font-bold text-blue-500 mb-3">
              90%
            </p>
            <p className="md:text-lg font-bold text-sm text-black ">
              Des clients sont satisfaits du groupe Primonial
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
