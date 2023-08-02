import Person from "./Person";

const List = ({ people }) => {
  return (
    <section style={{ textAlign: "center" }}>
      {people.map((person) => {
        return (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            img={person.image}
          />
        );
      })}
    </section>
  );
};

export default List;
