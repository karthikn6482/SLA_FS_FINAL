import React from "react"
import "./App.css"
import Header from "./components/Header"
import DestinationCard from "./components/DestinationCard"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="container">
      <Header />

      <div className="destinations">
        <DestinationCard
          title="Bali"
          img=""
          desc="A tropical paradise with beaches and temples."
        />
        <DestinationCard
          title="Paris"
          img=""
          desc="The city of love, lights, and the Eiffel Tower."
        />
        <DestinationCard
          title="Tokyo"
          img=""
          desc="A blend of modern skyscrapers and ancient culture."
        />
      </div>

      <Footer />
    </div>
  )
}

export default App
