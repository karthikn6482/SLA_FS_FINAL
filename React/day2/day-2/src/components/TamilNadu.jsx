import StateCard from "./StateCard";

function TamilNadu() {
  return (
    <>
      <h2>Tamil Nadu</h2>
      <StateCard
        parks={[
          "Guindy National Park",
          "Mudumalai Tiger Reserve",
          "Anamalai Tiger Reserve"
        ]}
        cinema="Kollywood"
      />
    </>
  );
}

export default TamilNadu;
