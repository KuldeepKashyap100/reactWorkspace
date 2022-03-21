import "./index.css";
import "./Card.css";
import Card from "./Card";
import { useEffect } from "react";
import data from "../data/data.json";

const getCardData = () => ({cards: data});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.png" className="static-logo" alt="logo" />
      </header>
      <div className="Grid">
        {getCardData().cards.map(cardData => <Card {...cardData} />)}
      </div>
    </div>
  );
}

export default App;
