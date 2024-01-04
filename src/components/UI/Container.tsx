import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-screen-2xl mx-4 lg:mx-auto">{children}</div>;
};

export default Container;
