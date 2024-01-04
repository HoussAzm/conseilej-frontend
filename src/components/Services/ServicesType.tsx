const ServicesType = () => {
  return (
    <>
      <p className="text-center mt-12  text-white font-semibold">
        Nous travaillons avec plus de 500+ clients
      </p>
      <div className="mb-12 mt-8 flex flex-wrap justify-center lg:justify-between items-start gap-8">
        <div className="flex flex-col items-center text-center transition duration-500 transform hover:scale-110">
          <img
            className="h-20 aspect-square"
            src="src/assets/book.png"
            alt="conseil"
          />
          <p className="mt-2 text-white font-bold">Maitrise d'ouvrage</p>
        </div>
        <div className="flex flex-col items-center text-center  lg:mt-0 transition duration-500 transform hover:scale-110">
          <img
            className="h-20 aspect-square"
            src="src/assets/invest2.png"
            alt=""
          />
          <p className="mt-2 text-white font-bold">Investissement</p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 lg:mt-0 transition duration-500 transform hover:scale-110">
          <img
            className="h-20 aspect-square"
            src="src/assets/patrimo.png"
            alt=""
          />
          <p className="mt-2 text-white font-bold">Gestion Patrimonial</p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 lg:mt-0 transition duration-500 transform hover:scale-110">
          <img
            className="h-20 aspect-square"
            src="src/assets/trans2.png"
            alt=""
          />
          <p className="mt-2 text-white font-bold">Transaction immobilière</p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 lg:mt-0 transition duration-500 transform hover:scale-110">
          <img
            className="h-20 aspect-square "
            src="src/assets/amena.png"
            alt=""
          />
          <p className="mt-2 text-white font-bold">Aménagement</p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 lg:mt-0 transition duration-500 transform hover:scale-110">
          <img
            className="h-20 aspect-square "
            src="src/assets/amena.png"
            alt=""
          />
          <p className="mt-2 text-white font-bold">Gestion Locatif</p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 lg:mt-0 transition duration-500 transform hover:scale-110">
          <img
            className="h-20 aspect-square "
            src="src/assets/amena.png"
            alt=""
          />
          <p className="mt-2 text-white font-bold">Papier Adminisratifs</p>
        </div>
      </div>
    </>
  );
};

export default ServicesType;
