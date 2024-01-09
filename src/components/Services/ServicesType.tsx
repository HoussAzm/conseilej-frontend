import book from "../../assets/book.png";
import invest2 from "../../assets/invest2.png";
import patrimo from "../../assets/patrimo.png";
import trans2 from "../../assets/trans2.png";
import amena from "../../assets/amena.png";
import local from "../../assets/local.png";
import paper from "../../assets/paper.png"

const ServicesType = () => {
  return (
    <>
      <p className="text-center mt-12  text-white font-semibold">
        Nous travaillons avec plus de 500+ clients
      </p>
      <div className="mb-12 mt-8 flex flex-wrap justify-center lg:justify-between items-start gap-8">
        <div className="flex flex-col items-center text-center transition duration-500 transform hover:scale-110">
          <img className="h-20 aspect-square" src={book} alt="conseil" />
          <p className="mt-2 text-white font-bold">Maitrise d'ouvrage</p>
        </div>
        <div className="flex flex-col items-center text-center  lg:mt-0 transition duration-500 transform hover:scale-110">
          <img className="h-20 aspect-square" src={invest2} alt="" />
          <p className="mt-2 text-white font-bold">Investissement</p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 lg:mt-0 transition duration-500 transform hover:scale-110">
          <img className="h-20 aspect-square" src={patrimo} alt="" />
          <p className="mt-2 text-white font-bold">Gestion Patrimonial</p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 lg:mt-0 transition duration-500 transform hover:scale-110">
          <img className="h-20 aspect-square" src={trans2} alt="" />
          <p className="mt-2 text-white font-bold">Transaction immobilière</p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 lg:mt-0 transition duration-500 transform hover:scale-110">
          <img className="h-20 aspect-square " src={amena} alt="" />
          <p className="mt-2 text-white font-bold">Aménagement</p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 lg:mt-0 transition duration-500 transform hover:scale-110">
          <img className="h-20 aspect-square " src={local} alt="" />
          <p className="mt-2 text-white font-bold">Gestion Locatif</p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 lg:mt-0 transition duration-500 transform hover:scale-110">
          <img className="h-20 aspect-square " src={paper} alt="" />
          <p className="mt-2 text-white font-bold">Papier Adminisratifs</p>
        </div>
      </div>
    </>
  );
};

export default ServicesType;
