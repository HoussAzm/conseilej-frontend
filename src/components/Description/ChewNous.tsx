import villanight from "../../assets/villanight.jpg";

const ChewNous = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto pb-8" id="about">
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <img src={villanight} alt="" className="w-100" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-2xl md:text-left text-center md:text-4xl font-bold text-gold-500 pb-4">
            CONSEIL EJ
          </h2>
          <p className="text-md  md:text-left text-center font-light text-neutralGrey mb-8">
            Chez Conseil EJ (CEJ), notre engagement va au-delà de la simple
            location. C'est une expérience de vie exceptionnelle que nous vous
            offrons. Contactez-nous dès aujourd'hui pour découvrir nos offres
            sur mesure et laissez-vous séduire par le luxe discret et l'harmonie
            de nos propriétés."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChewNous;
