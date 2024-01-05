import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  id?: string;
}

const Container: FC<ContainerProps> = ({ children, id }) => {
  return (
    <section className="max-w-screen-2xl mx-4 lg:px-8 lg:mx-auto" id={id}>
      {children}
    </section>
  );
};

export default Container;
