import { useState } from "react";
import { data } from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  // console.log(people);
  return (
    <main>
      <section className="container">
        <h2
          style={{
            textAlign: "center",
          }}
        >
          Birthdays today: {data.length}
        </h2>
        <List people={people} />
        <button className="btn btn-block" onClick={() => setPeople([])}>
          clear list
        </button>
      </section>
    </main>
  );
};
export default App;
