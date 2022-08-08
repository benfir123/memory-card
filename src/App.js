import { useEffect, useState } from "react";
import Coin from "./components/Coin";
import bitcoinImage from "./images/bitcoin.png";
import litecoinImage from "./images/litecoin.png";
import neocoinImage from "./images/neocoin.png";
import avalancheImage from "./images/avalanche.png";
import leafcoinImage from "./images/leafcoin.png";
import beethovenxImage from "./images/BeethovenX.png";
import xrpImage from "./images/XRP.png";
import feathercoinImage from "./images/feathercoin.png";
import moneroImage from "./images/monero.png";
import fijicoinImage from "./images/fijicoin.png";
import chinacbdcImage from "./images/China-CBDC.png";
import bqcImage from "./images/BQC.png";
import "./App.css";

const App = () => {
  const [layout, setLayout] = useState([
    {
      name: "Bitcoin",
      image: bitcoinImage,
    },
    {
      name: "Litecoin",
      image: litecoinImage,
    },
    {
      name: "Neocoin",
      image: neocoinImage,
    },
    {
      name: "Avalanche",
      image: avalancheImage,
    },
    {
      name: "Leafcoin",
      image: leafcoinImage,
    },
    {
      name: "BeethovenX",
      image: beethovenxImage,
    },
    {
      name: "XRP",
      image: xrpImage,
    },
    {
      name: "Feathercoin",
      image: feathercoinImage,
    },
    {
      name: "Monero",
      image: moneroImage,
    },
    {
      name: "Fijicoin",
      image: fijicoinImage,
    },
    {
      name: "China-CBDC",
      image: chinacbdcImage,
    },
    {
      name: "BQC",
      image: bqcImage,
    },
  ]);
  const [clickedCoins, setClickedCoins] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleCoinClick = (name) => {
    if (!clickedCoins.includes(name)) {
      setScore(score + 1);
    } else {
      setScore(0);
      setClickedCoins([]);
      return;
    }
    setClickedCoins(clickedCoins.concat(name));
  };

  useEffect(() => {
    const copiedArray = [...layout];
    shuffleArray(copiedArray);
    setLayout(copiedArray);
    if (score > highScore) setHighScore(score);
  }, [score]);

  return (
    <>
      <header>
        <h1>Cryptocurrency Memory Game</h1>
        <div className="score">
          <p>Score: {score}</p>
          <p>Best score: {highScore}</p>
        </div>
      </header>
      <h4>
        Get points by clicking on an image but don't click on any more than
        once!
      </h4>
      <main className="container">
        {layout.map((coin) => {
          const { name, image } = coin;
          return (
            <Coin
              name={name}
              image={image}
              key={name}
              handleCoinClick={handleCoinClick}
            />
          );
        })}
      </main>
    </>
  );
};

export default App;
