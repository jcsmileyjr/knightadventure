import { useState } from "react";

// Shows the villain's artwork if it exists at /public/images/<id>.png,
// otherwise falls back to a placeholder frame so the game still plays
// fine before the art is dropped in.
export default function VillainImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="villain-image-frame">
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="villain-image"
        />
      ) : (
        <div className="villain-image-placeholder" aria-label={alt}>
          <span>?</span>
        </div>
      )}
    </div>
  );
}
