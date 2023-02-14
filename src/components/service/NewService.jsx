const NewService = ({ service, isNew }) => {
  return (
    <div className={`offer-grid-elem ${isNew ? "offer-grid-elem-dot" : ""}`}>
      <p>
        {service}
        {isNew && (
          <>
            <br />
            <span>(nowość)</span>
          </>
        )}
      </p>
    </div>
  );
};
export default NewService;
