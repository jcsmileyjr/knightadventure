import { useState } from "react";
import { randomChoice, resolveRound } from "../lib/rps";
import StoryText from "./StoryText";
import ChoiceButtons from "./ChoiceButtons";
import VillainImage from "./VillainImage";

export default function BattleScreen({
  villain,
  challengeNum,
  totalChallenges,
  onWin,
  onLose,
}) {
  const [round, setRound] = useState(null); // { knightChoice, opponentChoice, outcome }
  const [resolving, setResolving] = useState(false);

  function handleChoose(knightChoice) {
    setResolving(true);
    const opponentChoice = randomChoice();
    const outcome = resolveRound(knightChoice, opponentChoice);
    setRound({ knightChoice, opponentChoice, outcome });
    setResolving(false);
  }

  function handleContinue() {
    if (round.outcome === "win") onWin();
    else onLose();
  }

  function handleTryAgain() {
    setRound(null);
  }

  return (
    <div className="screen battle-screen">
      <h2>
        Challenge {challengeNum + 1} of {totalChallenges}
      </h2>

      <VillainImage src={villain.image} alt={villain.name} />

      <StoryText paragraphs={villain.paragraphs} />

      {!round && (
        <ChoiceButtons onChoose={handleChoose} disabled={resolving} />
      )}

      {round && (
        <div className="round-result">
          <p>
            You chose <strong>{round.knightChoice}</strong>. The{" "}
            {villain.name} chose{" "}
            <strong className="opponent-choice">
              {round.opponentChoice}
            </strong>
            .
          </p>

          {round.outcome === "tie" && (
            <>
              <p className="tie-text">It's a tie! Try again.</p>
              <button onClick={handleTryAgain}>Try Again</button>
            </>
          )}

          {round.outcome === "win" && (
            <>
              <p className="win-text">You win this round!</p>
              <button onClick={handleContinue}>Onward</button>
            </>
          )}

          {round.outcome === "lose" && (
            <button onClick={handleContinue}>Continue</button>
          )}
        </div>
      )}
    </div>
  );
}
