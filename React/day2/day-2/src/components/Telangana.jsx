import StateCard from "./StateCard";

function Telangana() {
  return (
    <>
      <h2>Telangana</h2>
      <StateCard
        parks={[
          "Kasu Brahmananda Reddy National Park",
          "Mrugavani National Park",
          "Mahaveer Harina Vanasthali"
        ]}
        cinema="Tollywood"
      />
    </>
  );
}

export default Telangana;
