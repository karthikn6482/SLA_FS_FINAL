import { useState } from "react";

function Login({ setPage, setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("user"));

    if (!stored) {
      setError("No user found. Please register first.");
      return;
    }

    if (form.email === stored.email && form.password === stored.password) {
      setUser(stored);
      setPage("dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Login</button>
        <p className="error">{error}</p>
      </form>
      <p onClick={() => setPage("register")} className="link">Create an account</p>
    </div>
  );
}

export default Login;
