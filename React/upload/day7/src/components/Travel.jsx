import { useState } from "react";
import "../App.css";
import paris from "../assets/paris.jpg";
import tokyo from "../assets/tokyo.jpg";

const Travel = () => {
  const [toggleCity, setToggleCity] = useState(false);
  const [shape, setShape] = useState(0);
  const [checklist, setChecklist] = useState(["Passport", "Tickets"]);

  const changeCity = () => {
    setToggleCity(!toggleCity);
  };

  const changeShape = () => {
    setShape((shape + 1) % 3);
  };

  const addChecklist = () => {
    const items = ["Camera", "Snacks", "Hotel Booking", "Cash", "Power Bank"];
    const nextItem = items[checklist.length - 2] || "Extra Item";
    setChecklist([...checklist, nextItem]);
  };

  return (
    <>
      <div>
        {toggleCity ? (
          <div
            style={{
              backgroundColor: "#003049",
              padding: "40px",
              color: "white",
              borderRadius: "20px",
            }}
          >
            <h1>Welcome to Tokyo</h1>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "#d62828",
              padding: "40px",
              color: "white",
              borderRadius: "20px",
            }}
          >
            <h1>Welcome to Paris</h1>
          </div>
        )}

        {toggleCity ? (
          <img className="travelimage" src={tokyo} />
        ) : (
          <img className="travelimage" src={paris} />
        )}

        <button onClick={changeCity}>Switch Destination</button>
      </div>

      <div>
        <button onClick={changeShape}>Change Shape</button>

        {shape === 0 && (
          <div
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "yellow",
              borderRadius: "50%",
              margin: "10px",
            }}
          ></div>
        )}
        {shape === 1 && (
          <div
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "#1d3557",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              margin: "10px",
            }}
          ></div>
        )}
        {shape === 2 && (
          <div
            style={{
              width: "200px",
              height: "100px",
              backgroundColor: "orange",
              borderRadius: "0 0 50% 50%",
              margin: "10px",
            }}
          ></div>
        )}
      </div>

      <div>
        <h2>Travel Checklist:</h2>
        <h3>{checklist.join(", ")}</h3>
        <button onClick={addChecklist}>Add Checklist Item</button>
      </div>
    </>
  );
};

export default Travel;
