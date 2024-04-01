import Container from "../UI/Container";
import cej from "../../assets/cej.png";
import house from "../../assets/icons/house.png";
import finance from "../../assets/icons/finance.png";
import assurance from "../../assets/icons/assurance.png";
import patrimonial from "../../assets/icons/patrimonial.png";
import papier from "../../assets/icons/papier.png";
import mrjamal from "../../assets/mrjamal.jpg"

const Inder = () => {
  return (
    <Container id="CONSEIL">
      <div className="md:px-4 lg:px-14 max-w-screen-2xl mx-auto my-14 md:my-24">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex-1">
            <h2 className="md:text-left text-center text-2xl md:text-4xl font-bold  mb-4 md:hidden block" id="change">
              JAMEL ESSOUALEH
            </h2>
            <img src={mrjamal} alt="MR JAMEL" title="CONSEIL" className="w-full" id="essoualeh" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="md:text-left text-center text-2xl md:text-4xl font-bold  mb-4 hidden md:block" id="change">
              JAMEL ESSOUALEH
            </h2>
            <p className="text-md font-semibold mb-8 text-justify">
              Spécialiste du management immobilier au Maroc et en France, à la
              fois ingénieur en agronomie et maîtrise d’ouvrage, possédant un
              niveau de MASTER en économie et HEC. Ayant plus de 20 ans
              d’expérience dans le secteur, j’ai acquis des compétences très
              solides en étudiant plus d’une centaine de projets et leurs mises
              en oeuvre agro-touristiques, oenotouristiques, hôteliers, ainsi
              que dans le domaine de la promotion immobilière. Également de la
              mise en œuvre, plus de 25 projets étendus chacun sur plus de 5
              hectares ainsi que la réalisation de 3 hôtels haut de gamme. Au
              Maroc, spécialiste de l’immobilier et de la gestion touristique
              auprès de plus de 5 grandes institutions. Expert en réglementation
              de l’urbanisme et des ERP hôtelières, professionnel en études de
              marché pour différents domaines d’investissement (restauration,
              prêt-à porter, métiers de services)
            </p>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="p-4 lg:p-14 max-w-screen-2xl mx-auto  bg-neutralSilver rounded">
        <div className="flex flex-col-reverse md:flex-row justify-start items-center gap-8">
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="text-md text-neutralGrey mb-8 leading-6 font-semibold">
                Découvrez l'excellence financière avec CEJ Conseil Patrimonial,
                là où l'avenir prospère et votre patrimoine s'épanouit. Confiez
                votre parcours financier à Essoualeh Jamel, expert en conseil
                patrimonial, et ouvrez la voie vers la sécurité financière et la
                prospérité. Bien plus qu'un conseil, une vision pour un avenir
                financier exceptionnel. Explorez, planifiez, réussissez avec
                CEJ.
              </p>
              <div>
                <div className="flex gap-8 items-center flex-wrap">
                  <img src={house} alt="" title="Conseil"  className="w-10" />
                  <img src={finance} alt="" title="Investissement" className="w-10" />
                  <img src={assurance} alt="" title="Conseil" className="w-10" />
                  <img src={patrimonial} alt="" title="Conseil" className="w-10" />
                  <img src={papier} alt="" title="Conseil" className="w-10" />
                 
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <img className="w-80" src={cej} alt="" title="CONSEIL IMMOBILIER"/>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Inder;
