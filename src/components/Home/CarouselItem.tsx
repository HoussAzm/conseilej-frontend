import { FC } from "react";

interface CarouselItemProps {
  image: string;
  title: string;
  subTitle: string;
}

const CarouselItem: FC<CarouselItemProps> = ({ image, title, subTitle }) => {
  return (
    <div className="py-12 sm:py-24 lg:py-0 flex h-full flex-col w-full mx-auto lg:flex-row items-center justify-start lg:justify-between gap-12">
      {/* hero text */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-2xl lg:text-5xl mb-4 font-semibold text-white leading-snug">
          {title}
        </h1>
        <p className="text-white text-xs lg:text-sm">{subTitle}</p>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={image} className="w-full max-w-96" alt={title} />
      </div>
    </div>
  );
};

export default CarouselItem;
