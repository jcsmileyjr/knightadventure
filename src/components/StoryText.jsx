// Renders story paragraphs, turning {{highlighted phrases}} into styled spans
// (the React equivalent of the ANSI color codes in the original Python prints).
function renderParagraph(text) {
  const parts = text.split(/(\{\{[^}]+\}\})/g);
  return parts.map((part, i) => {
    const match = part.match(/^\{\{([^}]+)\}\}$/);
    if (!match) return part;
    return (
      <span className="highlight" key={i}>
        {match[1]}
      </span>
    );
  });
}

export default function StoryText({ paragraphs }) {
  return (
    <div className="story-text">
      {paragraphs.map((p, i) => (
        <p key={i}>{renderParagraph(p)}</p>
      ))}
    </div>
  );
}
