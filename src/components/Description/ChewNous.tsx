import presentation from "../../assets/presentation.mp4";
const ChewNous = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto pb-8 pt-12" id="CONSEIL-DESCRIPTION">
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <video controls autoPlay>
            <source src={presentation} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="md:w-3/5 mx-auto">
          <h1 className="text-2xl md:text-left text-center md:text-4xl font-bold  pb-4" id="change">
            CONSEIL EJ
          </h1>
          <p className="text-md font-semibold mb-8 text-justify">
            Bienvenue chez Conseil EJ, votre partenaire de confiance pour une gestion patrimoniale exceptionnelle.
            Spécialisés dans le conseil patrimonial, l'immobilier de prestige, la gestion patrimoniale, le conseil
            financier et l'investissement stratégique, nous nous engageons à vous offrir une expérience personnalisée
            et enrichissante.
            Chez Conseil EJ, nous comprenons l'importance de la planification patrimoniale dans la réalisation
            de vos objectifs financiers. Notre équipe dédiée de professionnels chevronnés vous accompagne à chaque étape,
            offrant des conseils avisés pour maximiser vos actifs et assurer la croissance de votre patrimoine.
            La gestion patrimoniale est au cœur de notre mission, et nous nous efforçons de créer des stratégies sur mesure adaptées à vos besoins spécifiques. Nos conseils financiers éclairés visent à optimiser vos ressources et à sécuriser votre avenir financier.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ChewNous;
