import { useState } from "react";

export default function IntroScreen({ onStart }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed) onStart(trimmed);
  }

  return (
    <div className="screen intro-screen">
      <h1>A Knight's Adventure</h1>

      <div className="story-text">
        <p>
          The cold bit through your coat as you climbed the porch steps,
          exhausted from another long day. Keys in hand, you pushed open the
          front door, and the world changed with it.
        </p>
        <p>
          The familiar hum of your apartment vanished. The weight of your
          work clothes lifted, replaced by the solid, unfamiliar press of
          gleaming armor against your skin. The phone in your pocket had
          turned heavy and cold. You pulled it free and found a sword in your
          grip instead, its blade catching light from a sky that shouldn't
          exist indoors.
        </p>
        <p>
          You were standing in a grove. Ancient trees rose around you, their
          leaves a green too vivid, too alive, lit by no sun you could see.
          The night, the cold, your front door, all of it was gone.
        </p>
        <p>
          Your significant other stood before you, draped in a rich white
          robe you'd never seen before, their face pale with something
          between fear and resolve.
        </p>
        <p>
          <em>
            "The veil between worlds. It's shattered. I didn't think it
            would happen. Not really. Not to us."
          </em>
        </p>
        <p>They reached for your hand, and their grip was ice cold.</p>
        <p>
          <em>
            "Five villains stand between us and going home. If we don't
            defeat them, if you don't defeat them, neither of us survives
            this. I'm sorry. I'm so sorry. But you have to fight."
          </em>
        </p>
        <p>
          Somewhere beyond the trees, something ancient stirred, and the
          grove itself seemed to hold its breath.
        </p>
      </div>

      <form className="name-form" onSubmit={handleSubmit}>
        <label htmlFor="knight-name">What is your name?</label>
        <input
          id="knight-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          autoFocus
        />
        <button type="submit" disabled={!name.trim()}>
          Begin the Adventure
        </button>
      </form>
    </div>
  );
}
