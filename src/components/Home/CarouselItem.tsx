import React from 'react';

interface CarouselItemProps {
  title: string;
  subTitle: string;
  image: string;
}
const CarouselItem: React.FC<CarouselItemProps> = ({ title, subTitle, image }) => {
  const itemStyle: React.CSSProperties = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover", 
    backgroundPosition: "center",
    textAlign: "center",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "650px",
    padding: "20px",
    borderRadius: "5px", 
  };
  
  return (
    <div className="carousel-item" style={itemStyle}>
      <h2 className="text-3xl font-bold text-gray-800" >{title}</h2>
      <p className="text-lg mt-4 font-bold text-gray-800">{subTitle}</p>
    </div>
  );
};

export default CarouselItem;
