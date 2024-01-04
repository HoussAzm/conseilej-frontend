import Container from "../UI/Container";
import SectionTitle from "../UI/SectionTitle";
import ServicesTable from "./ServicesTable";
import ServicesType from "./ServicesType";

const Services = () => {
  return (
    <Container>
      <div id="service" className="py-24 ">
        <SectionTitle title="NOS SERVICES" />
        <ServicesTable />
        <ServicesType />
      </div>
    </Container>
  );
};

export default Services;
