import NewService from "./NewService";

const ServicesGrid = ({ data }) => {
  return (
    <section id="offer">
      <div className="container">
        <h2 className="offer-title"> Czym zajmuje się nasza firma ?</h2>
        <div className="offer-grid">
          {data.map(({ id, serviceName, isNew }) => (
            <NewService key={id} service={serviceName} isNew={isNew} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
