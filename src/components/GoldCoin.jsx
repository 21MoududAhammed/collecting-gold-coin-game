import { useState } from "react";
import { getNumber } from "../utils";

export default function GoldCoin() {
  const [goldCoin, setGoldCoin] = useState(0);
  const [round, setRound] = useState(0);

  function handleGenerateCoin() {
    const num = getNumber(); //get a random number from 0 to 1
    if (num < 0.5) {
      setGoldCoin(goldCoin + 1); //increase the goldCoin state
    }
    if (goldCoin >= 4) {
      setRound(round + 1); //increase the round state
      setGoldCoin(0); //reset the gold coin state
    }
    if (round >= 5) {
      alert("You have won the game");
      setRound(0); //reset the round state
    }
  }

  return (
    <div className="w-[450px] mx-auto bg-green-300 text-center space-y-4 py-20 mt-5 rounded-xl">
      <h1 className="text-4xl font-bold text-yellow-500">
        Collecting Gold Coin
      </h1>
      <button
        className=" font-bold bg-gray-600 text-white px-16 py-4 rounded-lg"
        onClick={() => handleGenerateCoin()}
      >
        Press Here
      </button>
      <div className="text-2xl ">
        <h2>Gold Coin : {goldCoin}</h2> {/*Coin counter*/}
        <h2>Round : {round} </h2> {/*round counter*/}
      </div>
    </div>
  );
}
