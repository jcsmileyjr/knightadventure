export const CHOICES = ["Rock", "Paper", "Scissors"];

const BEATS = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

export function randomChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

// Returns "win" | "lose" | "tie" from the knight's perspective.
export function resolveRound(knightChoice, opponentChoice) {
  if (knightChoice === opponentChoice) return "tie";
  return BEATS[knightChoice] === opponentChoice ? "win" : "lose";
}
