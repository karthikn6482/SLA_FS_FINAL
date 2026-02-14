import StateCard from "./StateCard";

function Karnataka() {
  return (
    <>
      <h2>Karnataka</h2>
      <StateCard
        parks={[
          "Bannerghatta National Park",
          "Nagarhole National Park",
          "Bandipur National Park"
        ]}
        cinema="Sandalwood"
      />
    </>
  );
}

export default Karnataka;
