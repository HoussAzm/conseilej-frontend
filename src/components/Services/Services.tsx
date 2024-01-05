import Container from "../UI/Container";
import SectionTitle from "../UI/SectionTitle";
import ServicesTable from "./ServicesTable";
import ServicesType from "./ServicesType";
import Fonctionement from "./Fonctionement";

const Services = () => {
  return (
    <Container>
      <div id="service" className="md:py-24 py-8">
        <SectionTitle title="NOS SERVICES" />
        <ServicesTable />
        <ServicesType />
        <Fonctionement />
      </div>
    </Container>
  );
};

export default Services;
