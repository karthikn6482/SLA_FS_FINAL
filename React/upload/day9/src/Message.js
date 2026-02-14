const Message = ({ name, message, color }) => {
    return (
      <div className="card" style={{ borderLeft: `6px solid ${color}` }}>
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
    );
  };
  
  export default Message;
  