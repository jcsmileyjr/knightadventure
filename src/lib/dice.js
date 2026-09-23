export function rollDice() {
  return Math.floor(Math.random() * 10) + 1;
}

// Returns "win" | "lose" from the player's perspective.
export function resolveSkipAttempt(playerRoll, villainRoll) {
  return playerRoll >= villainRoll ? "win" : "lose";
}
