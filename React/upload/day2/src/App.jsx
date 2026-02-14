import TamilNadu from "./components/TamilNadu";
import Kerala from "./components/Kerala";
import Karnataka from "./components/Karnataka";
import AndhraPradesh from "./components/AndhraPradesh";
import Telangana from "./components/Telangana";

function App() {
  return (
    <div className="container">
      <h1>South Indian States – Parks & Cinema</h1>
      <div className="states-grid">
        <div className="state"><TamilNadu /></div>
        <div className="state"><Kerala /></div>
        <div className="state"><Karnataka /></div>
        <div className="state"><AndhraPradesh /></div>
        <div className="state"><Telangana /></div>
      </div>
    </div>
  );
}

export default App;
