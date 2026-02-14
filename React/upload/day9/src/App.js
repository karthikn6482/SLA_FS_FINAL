import Message from "./Message";

const App = () => {
  return (
    <div className="container">
      <h1>React Props Example</h1>

      <Message name="Karthikeyan" message="Welcome to React props example!" color="blue" />
      <Message name="Gokul" message="Props are easy to use!" color="green" />
      <Message name="Mathan" message="This data is passed through props." color="red" />
    </div>
  );
};

export default App;
