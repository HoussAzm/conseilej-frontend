import presentation from "../../assets/presentation.mp4";
const ChewNous = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto pb-8 pt-12" id="about">
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <video controls autoPlay>
            <source src={presentation} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-2xl md:text-left text-center md:text-4xl font-bold  pb-4" id="change">
            CEJ
          </h2>
          <p className="text-md font-semibold mb-8 text-justify">
            Chez Conseil EJ , notre engagement va au-delà de la simple
            location. C'est une expérience de vie exceptionnelle que nous vous
            offrons. Contactez-nous dès aujourd'hui pour découvrir nos offres
            sur mesure et laissez-vous séduire par le luxe discret et l'harmonie
            de nos propriétés.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ChewNous;
