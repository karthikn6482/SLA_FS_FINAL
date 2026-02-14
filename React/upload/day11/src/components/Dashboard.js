function Dashboard({ user, setPage }) {
    const logout = () => {
      setPage("login");
    };
  
    return (
      <div className="card">
        <h2>Dashboard</h2>
        <h3>Welcome {user?.name}</h3>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  
  export default Dashboard;
  