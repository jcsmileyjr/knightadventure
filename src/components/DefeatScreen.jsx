export default function DefeatScreen({ onRestart }) {
  return (
    <div className="screen defeat-screen">
      <h1 className="defeat-title">You failed.</h1>
      <div className="story-text">
        <p>
          You can't believe the pain. No one warned you death would feel
          this cruel, this complete.
        </p>
        <p>
          Somewhere beyond your own ragged breathing, you hear a scream,
          and with a distant, sinking horror, you realize it might be your
          own.
        </p>
        <p>
          The word settles into your chest heavier than any wound, heavier
          than the blade that found you.
        </p>
        <p>
          Tears start as drips, then rivers, then a flood of shame and
          torment, as the light above the grove dims into black. The
          ground goes soft beneath you.
        </p>
        <p>
          Somewhere far away, and growing farther, you hear your
          significant other calling your name.
        </p>
        <p>
          Then there is only the dark, and you lose consciousness knowing
          you could not keep your promise.
        </p>
      </div>
      <button onClick={onRestart}>Try Again</button>
    </div>
  );
}
