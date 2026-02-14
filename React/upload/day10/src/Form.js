import { useState } from "react";

const FormPage = () => {
  const [input, setInput] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.name || !input.email || !input.message) {
      setError("All fields are required");
      return;
    }

    setError("");
    alert("Form submitted successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {error && <p className="error">{error}</p>}

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={input.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={input.email}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Enter Message"
        value={input.message}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPage;
