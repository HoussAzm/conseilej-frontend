import tower1 from "../assets/tower1.jpeg";
import v4 from "../assets/v4.jpg";
import v2 from "../assets/v2.jpg";
import cascade1 from "../assets/cascade1.webp";
import cascade2 from "../assets/cascade2.webp";
import v3 from "../assets/v3.jpg";
import Container from "./UI/Container";

const Projects = () => {
  const images = [
    tower1,
    v4,
    v2,
    cascade1,
    cascade2,
    v3
  ];

  return (
    <Container>
      <div className=" mx-auto my-12 md:my-24" id="CONSEIL-PROJET">
        <div className="text-center md:w-1/2 mx-auto">
          <h2 className="text-2xl md:text-4xl  font-bold mb-4" id="change" title="">DÉCOUVREZ NOS PROJETS</h2>
          <p className="text-md font-semibold mb-8 text-justify">
            Optimisez votre patrimoine, bâtissez votre avenir avec le Conseil Patrimonial CEJ, votre partenaire d'exception en gestion patrimoniale et immobilière. Notre expertise vous offre des conseils avisés et des opportunités immobilières uniques, créant ainsi votre succès financier et votre bien-être immobilier. Découvrez nos villas exclusives :
            Maria Towers à Marrakech, Maroc : De somptueuses villas offrant une expérience de vie luxueuse au cœur de Marrakech. Maria Towers combine habilement modernité, confort et élégance orientale pour un cadre de vie incomparable.
            Les Cascades d'Argens dans le Var, France : Nichées dans l'environnement naturel préservé du Var, ces villas uniques offrent un style de vie méditerranéen authentique. Les Cascades d'Argens proposent des résidences de charme aux prestations haut de gamme, en parfaite harmonie avec leur environnement naturel.
            Ces villas d'exception représentent des opportunités uniques pour investir dans un patrimoine d'excellence. Le Conseil Patrimonial CEJ est là pour concrétiser vos projets immobiliers avec expertise et dévouement."
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
                  title="CONSEIL"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-neutralSilver lg:w-4/5 xl:w-3/4 mx-auto p-6 lg:p-10 rounded mb-12 md:mb-24">
        <h1 className="text-center text-2xl md:text-4xl  font-bold mb-6" id="change">
          Pourquoi pas vous ?
        </h1>
        <p className="text-center mb-8 text-black text-md font-bold">
          Etude réalisée par l’institut IFOP auprès de 901 clients de Primonial
          Gestion Privée du 23 mai au 15 juin 2022.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="text-center bg-gray-100 p-6 rounded-lg">
            <p className="text-2xl md:text-4xl font-bold  mb-3" id="text">
              71%
            </p>
            <p className="md:text-lg font-bold text-sm text-black ">
              De nos clients ont été recommandés
            </p>
          </div>
          <div className="text-center bg-gray-100 p-6 rounded-lg">
            <p className="text-2xl md:text-4xl font-bold  mb-3" id="text">
              90%
            </p>
            <p className="md:text-lg font-bold text-sm text-black ">
              Des clients sont satisfaits de la qualité des réponses de leur
              conseiller
            </p>
          </div>
          <div className="text-center bg-gray-100 p-6 rounded-lg">
            <p className="text-2xl md:text-4xl font-bold  mb-3" id="text">
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
