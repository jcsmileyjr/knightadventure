import { useState } from "react";
import { villains } from "./data/villains";
import IntroScreen from "./components/IntroScreen";
import BattleScreen from "./components/BattleScreen";
import VictoryScreen from "./components/VictoryScreen";
import DefeatScreen from "./components/DefeatScreen";
import "./App.css";

const INITIAL_STATE = {
  screen: "intro", // intro | battle | victory | defeat
  knightName: "",
  inventory: [],
  challengeIndex: 0,
};

export default function App() {
  const [game, setGame] = useState(INITIAL_STATE);

  function addItemToInventory(item) {
    return (g) => ({
      ...g,
      inventory: item ? [...g.inventory, item] : g.inventory,
    });
  }

  function removeItemFromInventory(itemId) {
    return (g) => ({
      ...g,
      inventory: g.inventory.filter((item) => item.id !== itemId),
    });
  }

  function handleStart(knightName) {
    setGame({
      ...INITIAL_STATE,
      screen: "battle",
      knightName,
      inventory: [],
      challengeIndex: 0,
    });
  }

  function handleWin(villain) {
    setGame((g) => {
      const nextState = addItemToInventory(villain?.item)(g);
      console.log("Item added to inventory:", villain?.item);
      console.log("state after win:", nextState);

      const nextIndex = g.challengeIndex + 1;
      if (nextIndex >= villains.length) {
        return { ...nextState, screen: "victory" };
      }
      return { ...nextState, challengeIndex: nextIndex };
    });
  }

  function handleLose() {
    setGame((g) => ({ ...g, screen: "defeat" }));
  }

  function handleRestart() {
    setGame(INITIAL_STATE);
  }

  return (
    <div className="app">
      {game.screen === "intro" && <IntroScreen onStart={handleStart} />}

      {game.screen === "battle" && (
        <BattleScreen
          key={game.challengeIndex}
          villain={villains[game.challengeIndex]}
          challengeNum={game.challengeIndex}
          totalChallenges={villains.length}
          onWin={handleWin}
          onLose={handleLose}
        />
      )}

      {game.screen === "victory" && (
        <VictoryScreen knightName={game.knightName} onRestart={handleRestart} />
      )}

      {game.screen === "defeat" && <DefeatScreen onRestart={handleRestart} />}
    </div>
  );
}
