import { useState } from "react";
import { resolveSkipAttempt, rollDice } from "../lib/dice";

export default function ItemPrompt({
  inventory,
  onUseItem,
  onFight,
  onSkip,
}) {
  const [roll, setRoll] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleUseItem(item) {
    setSelectedItem(item);
    const player = rollDice();
    const opponent = rollDice();
    const outcome = resolveSkipAttempt(player, opponent);
    setRoll({ player, opponent, outcome });

    if (outcome === "lose") {
      onUseItem(item);
      onFight({ player, opponent, outcome });
    }
  }

  return (
    <div className="screen item-prompt">
      <h2>Use an item?</h2>

      {!roll && inventory.length > 0 ? (
        <>
          <p>Choose an item to use, or save your items and fight.</p>
          <div className="item-prompt-items">
            {inventory.map((item) => (
              <div className="item-prompt-item" key={item.id}>
                <p>
                  <strong>{item.name}</strong>
                </p>
                {item.description && <p>{item.description}</p>}
                <button onClick={() => handleUseItem(item)}>
                  Use {item.name}
                </button>
              </div>
            ))}
          </div>
          <button onClick={onFight}>Save my items and fight</button>
        </>
      ) : !roll ? (
        <>
          <p>You have no items to use.</p>
          <button onClick={onFight}>Save my items and fight</button>
        </>
      ) : (
        <div className="item-prompt-roll">
          <p>
            You rolled <strong>{roll.player}</strong>. The opponent rolled{" "}
            <strong>{roll.opponent}</strong>.
          </p>
          {(roll.outcome === "win" || roll.outcome === "tie") && (
            <>
              <p className="win-text">
                {roll.outcome === "tie"
                  ? "The roll is tied!"
                  : "The roll succeeds!"}
              </p>
              <button
                onClick={() => {
                  onUseItem(selectedItem);
                  onSkip();
                }}
              >
                Skip this fight
              </button>
              <button onClick={onFight}>Fight anyway</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
