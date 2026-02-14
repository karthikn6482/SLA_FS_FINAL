import { useState } from "react";
import Login from "./components/Logi";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);

  return (
    <div className="container">
      {page === "login" && <Login setPage={setPage} setUser={setUser} />}
      {page === "register" && <Register setPage={setPage} />}
      {page === "dashboard" && <Dashboard user={user} setPage={setPage} />}
    </div>
  );
}

export default App;
