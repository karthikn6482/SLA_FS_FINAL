import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div className="app">
      <nav className="nav">
        <h2 className="brand">Router Demo</h2>

        <div className="links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </nav>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
