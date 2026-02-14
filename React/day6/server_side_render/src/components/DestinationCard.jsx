import React from "react"

const DestinationCard = ({ title, img, desc }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default DestinationCard
