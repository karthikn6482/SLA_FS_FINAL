import StateCard from "./StateCard";

function Kerala() {
  return (
    <>
      <h2>Kerala</h2>
      <StateCard
        parks={[
          "Silent Valley National Park",
          "Periyar National Park",
          "Eravikulam National Park"
        ]}
        cinema="Mollywood"
      />
    </>
  );
}

export default Kerala;
