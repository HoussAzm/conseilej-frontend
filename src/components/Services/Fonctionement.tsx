import Container from "../UI/Container";
import SectionTitle from "../UI/SectionTitle";
import membership from "../../assets/icons/membership.png";
import association from "../../assets/icons/association.png";
import groupClub from "../../assets/icons/group-club.png";

const services = [
  {
    id: 1,
    title: "POURQUOI CONFIER SA GESTION PATRIMONIALE",
    decription:
      " Nous pourrons construire une relation exclusive, sur la durée, qui vous permettra d’accéder à une grande offre de solutions et à des préconisations d’investissement personnalisées en fonction de vos objectifs .",
    image: membership,
  },
  {
    id: 2,
    title: "DÉTERMINEZ VOS OBJECTIFS",
    decription:
      "Commencer à épargner, générer des futurs revenus complémentaires, faire mieux fructifier votre patrimoine actuel : il convient d’abord de déterminer vos objectifs à moyen et long terme.",
    image: association,
  },
  {
    id: 3,
    title: "VOTRE HORIZON DE PLACEMENT",
    decription:
      "Durant combien de mois ou d’années, êtes-vous prêt à immobiliser cet argent ?",
    image: groupClub,
  },
];

const Index = () => {
  return (
    <Container>
      <section className="mt-24">
        <SectionTitle title="FONCTIONNEMENT" />
        <p className="text-white text-md font-semibold w-full max-w-2xl text-center mx-auto mt-2">
          Je vous accompagnerai afin de constituer une épargne financière et
          immobilière. Nous ferons également le point sur votre situation
          familiale, professionnelle et patrimoniale
        </p>

        <div className="mt-6 md:mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-6 md:gap-12">
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
                <p className="text-sm font-semibold md:text-md">
                  {service.decription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Index;
