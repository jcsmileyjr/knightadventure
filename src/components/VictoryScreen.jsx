export default function VictoryScreen({ knightName, onRestart }) {
  return (
    <div className="screen victory-screen">
      <h1>Victory!</h1>
      <div className="story-text">
        <p>
          The last of the villain's roars fades into silence, and the grove
          exhales with you. Five nightmares stand defeated, and the veil
          between worlds mends itself before your eyes.
        </p>
        <p>
          {knightName}, you have won the game! Your significant other's
          grip warms in your hand as the trees fade, and the world you knew
          rushes back to meet you.
        </p>
      </div>
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
}
