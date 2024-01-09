import clsx from "clsx";
import { FC } from "react";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <h2 id="change"
      className={clsx(
        className,
        "text-center text-2xl md:text-4xl font-bold "
      )}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
