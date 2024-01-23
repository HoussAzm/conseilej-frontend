import Container from "../UI/Container";
import ChewNous from "./ChewNous";
import liquidite from "../../assets/liquidite.png";
import rendement from "../../assets/rendement.png";
import risque from "../../assets/risque.png";
import membres from "../../assets/membres.png";
import villaicon from "../../assets/villaicon.png";
import villa from "../../assets/icons/villa.png";
import building from "../../assets/building.png";

const services = [
  {
    id: 1,
    title: "Sa liquidité",
    decription:
      "Votre argent est-il bloqué, combien de temps vous faudra-t-il pour pouvoir le récupérer ?",
    image: liquidite,
  },
  {
    id: 2,
    title: "Son rendement",
    decription: "Est-il garanti ? à combien peut-il s’élever ?",
    image: rendement,
  },
  {
    id: 3,
    title: "Son niveau de risque",
    decription:
      "Pouvez-vous perdre une partie de votre capital ? Si oui, êtes-vous prêt à l’accepter et jusqu’à combien ?",
    image: risque,
  },
];

const Index = () => {
  return (
    <Container>
      <ChewNous />
      <h2 className="text-2xl md:text-4xl font-bold w-full text-center max-w-[50ch] mx-auto  mt-12" id="change">
        CHAQUE INVESTISSEMENT QUE VOUS RÉALISEREZ DEVRA ÊTRE ANALYSÉ AU REGARD
        DE PLUSIEURS CRITÈRES :
      </h2>
      <div className=" mt-6 md:mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-6 md:gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto rounded-md shadow cursor-pointer hover:-translate-y-5 text-white hover:bg-[#E8F5E9] transition-all duration-500 flex items-center justify-center h-full hover:text-black"
          >
            <div className="h-full">
              <div className="bg-[#E8F5E9] w-14 h-14 flex justify-center items-center mx-auto mb-4 rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt="w-full" className="" />
              </div>
              <h4 className="text-lg md:text-2xl font-bold  mb-2 px-2" id="change">
                {service.title}
              </h4>
              <p className="text-sm md:text-md font-semibold">
                {service.decription}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-gray-50 text-black px-4 py-6 md:px-8 md:py-12 rounded mt-8 md:my-20">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl text-neutralDGrey mb-2 md:w-2/3 text- font-semibold">
            UN EXPERT ET SON ÉQUIPE POUR BIEN GÉRER VOTRE PATRIMOINE
          </h2>
          <p className="font-bold">
            RÉSERVEZ ET DECOUVRER FORFAITS AU PRIX LE PLUS BAS
          </p>
        </div>

        {/* stats */}
        <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12 ">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img className="w-12" src={membres} alt="" />
              <div>
                <h4 className="text-2xl text-neutralDGrey font-semibold">
                  1500+
                </h4>
                <p>Membre</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img className="w-12" src={villaicon} alt="" />
              <div>
                <h4 className="text-2xl text-neutralDGrey font-semibold">
                  800+
                </h4>
                <p>Villa</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img className="w-12" src={villa} alt="" />
              <div>
                <h4 className="text-2xl text-neutralDGrey font-semibold">
                  150+
                </h4>
                <p>Riads</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img className="w-12" src={building} alt="" />
              <div>
                <h4 className="text-2xl text-neutralDGrey font-semibold">
                  1000+
                </h4>
                <p>Appartement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Index;
