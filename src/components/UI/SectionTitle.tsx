import { FC } from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="text-center text-2xl md:text-4xl font-bold text-gold-500 mb-8">
      {title}
    </h2>
  );
};

export default SectionTitle;
