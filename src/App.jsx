import { useState } from "react";
import List from "./List.jsx";
import data from "./data.js";
// import People from './People';


const App = () => {

  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays Today</h3>
        <List people={people} />
        <button className="btn btn-block" onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );

};
export default App;
