import copy from "../../assets/copy.png";
import augmentation from "../../assets/augmentation.png";
import banking from "../../assets/banking.png";
import property from "../../assets/property.png";
import management from "../../assets/management.png";
import location from "../../assets/location.png";
import papieradmini from "../../assets/papieradmini.png"

const ServicesType = () => {
  return (
    <>
     <br /><br /> 
      <h1 className="titre14">NOS CONSEILLES</h1>
      <div className="mb-12 mt-8 flex flex-wrap justify-center lg:justify-between items-start gap-8">
        <div className="flex flex-col items-center text-center transition duration-500 transform hover:scale-110">
          <img className="h-10 aspect-square" src={copy} alt="conseil" />
          <p className="mt-2 text-white font-bold">Maitrise d'ouvrage</p>
        </div>
        <div className="flex flex-col items-center text-center  lg:mt-0 transition duration-500 transform hover:scale-110">
          <img className="h-10 aspect-square" src={augmentation} alt="augmentation" />
          <p className="mt-2 text-white font-bold">Investissement</p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 lg:mt-0 transition duration-500 transform hover:scale-110">
          <img className="h-10 aspect-square" src={banking} alt="gestion patrimonial" />
          <p className="mt-2 text-white font-bold">Gestion Patrimonial</p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 lg:mt-0 transition duration-500 transform hover:scale-110">
          <img className="h-10 aspect-square" src={property} alt="transaction immobiliere" />
          <p className="mt-2 text-white font-bold">Transaction immobilière</p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 lg:mt-0 transition duration-500 transform hover:scale-110">
          <img className="h-10 aspect-square " src={management} alt="management" />
          <p className="mt-2 text-white font-bold">Aménagement</p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 lg:mt-0 transition duration-500 transform hover:scale-110">
          <img className="h-10 aspect-square " src={location} alt="location" />
          <p className="mt-2 text-white font-bold">Gestion Locatif</p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 lg:mt-0 transition duration-500 transform hover:scale-110">
          <img className="h-10 aspect-square " src={papieradmini} alt="papier administrtifs" />
          <p className="mt-2 text-white font-bold">Papier Adminisratifs</p>
        </div>
      </div>
      
      <p className="text-center mt-12  text-white font-semibold">
      Nous travaillons avec plus de 500+ clients qui sont satisfaits de nos conseils
      </p>
    </>
  );
};

export default ServicesType;
