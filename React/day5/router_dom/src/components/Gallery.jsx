import React from "react";

export default function Gallery() {
  return (
    <section>
      <h1>Gallery</h1>

      <div className="grid">
        <img src="/assets/img1.jpg" alt="img1" />
        <img src="/assets/img2.jpg" alt="img2" />
        <img src="/assets/img3.jpg" alt="img3" />
      </div>
    </section>
  );
}
