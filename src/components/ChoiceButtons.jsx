const ICONS = {
  Rock: "🪨",
  Paper: "📄",
  Scissors: "✂️",
};

export default function ChoiceButtons({ onChoose, disabled }) {
  return (
    <div className="choice-buttons">
      {["Rock", "Paper", "Scissors"].map((choice) => (
        <button
          key={choice}
          className="choice-button"
          disabled={disabled}
          onClick={() => onChoose(choice)}
        >
          <span className="choice-icon">{ICONS[choice]}</span>
          {choice}
        </button>
      ))}
    </div>
  );
}
