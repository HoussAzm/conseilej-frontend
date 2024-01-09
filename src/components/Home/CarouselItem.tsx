
const CarouselItem = ({ title, subTitle, image }) => {
  const itemStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: "20px",
    borderRadius: "8px", // Ajoutez ceci si vous souhaitez des coins arrondis sur chaque diapositive
  };

  return (
    <div className="carousel-item" style={itemStyle}>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-lg mt-4">{subTitle}</p>
    </div>
  );
};
  
export default CarouselItem;
