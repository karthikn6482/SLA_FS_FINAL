import { useState } from "react";

function Register({ setPage }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    setPage("login");
  };

  return (
    <div className="card">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Register</button>
        <p className="error">{error}</p>
      </form>
      <p onClick={() => setPage("login")} className="link">Already have an account? Login</p>
    </div>
  );
}

export default Register;
