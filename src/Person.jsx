const Person = ({ name, age, img }) => {
  return (
    <article>
      <img
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
        src={img}
        alt={name}
      />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};
export default Person;
