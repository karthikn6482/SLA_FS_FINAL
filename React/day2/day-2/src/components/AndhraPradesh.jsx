import StateCard from "./StateCard";

function AndhraPradesh() {
  return (
    <>
      <h2>Andhra Pradesh</h2>
      <StateCard
        parks={[
          "Sri Venkateswara National Park",
          "Papikonda National Park",
          "Coringa Wildlife Sanctuary"
        ]}
        cinema="Tollywood (shared with Telangana)"
      />
    </>
  );
}

export default AndhraPradesh;
