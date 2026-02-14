import { useState, useEffect } from "react";

const Message = () => {
  const [text, setText] = useState("Hello");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={() => setText("Welcome to React")}>Change Text</button>

      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Message;
