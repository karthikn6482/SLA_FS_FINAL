import { useEffect, useState } from "react";
import "./app.css";

const App = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 24) {
      fetch("https://jsonplaceholder.typicode.com/posts/" + (count + 1))
        .then(res => res.json())
        .then(result => setData(prev => [...prev, result]));
      setCount(count + 1);
    }
  }, [count]);

  return (
    <div className="container">
      <h1 className="title">Fetch API with 24 Effects</h1>
      <h2 className="count">Total Loaded: {data.length} / 24</h2>

      {data.map((item, index) => (
        <div className="card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
