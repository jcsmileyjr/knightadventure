export function rollDice() {
  return Math.floor(Math.random() * 10) + 1;
}

// Returns "win" | "tie" | "lose" from the player's perspective.
export function resolveSkipAttempt(playerRoll, villainRoll) {
  if (playerRoll === villainRoll) return "tie";
  return playerRoll > villainRoll ? "win" : "lose";
}
