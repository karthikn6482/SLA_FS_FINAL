function StateCard({ parks, cinema }) {
  return (
    <div style={{
      border: "1px solid #e0e0e0",
      padding: 16,
      borderRadius: 10,
      background: "#fff",
      boxShadow: "0 6px 12px rgba(10,10,10,0.03)"
    }}>
      <h4 style={{margin: "8px 0"}}>Parks</h4>
      <ul>
        {parks.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h4 style={{margin: "8px 0"}}>Cinema Industry</h4>
      <p>{cinema}</p>
    </div>
  );
}

export default StateCard;
