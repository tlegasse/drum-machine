import React, { useState, useEffect } from "react";
import DrumPad from "./DrumPad";
import DrumKits from "../Data/DrumKits";
import DrumKitControls from "./DrumKitControls";

export default function DrumMachine() {
  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  })

  function handleKeydown(event) {
    const pad = document.getElementById(event.key.toUpperCase());
    if (pad != null) pad.parentNode.click();
  };

  const [currentKit, setKit] = useState(0);
  const [lastInstrument, setInstrument] = useState(null);

  function handleKitChange(newKit) {
    setKit(newKit.target.value);
    setInstrument(null);
  }

  function buttonClicked(buttonClick) {
    setInstrument(buttonClick.target.value);
    let audio = buttonClick.target.querySelector("audio");
    audio.currentTime = 0;
    audio.play();
  }

  const kits = DrumKits();

  const keyboardKeys = [
    ["Q", "W", "E"],
    ["A", "S", "D"],
    ["Z", "X", "C"],
  ];

  function getKeyFromIndex(index) {
    let cols = 3;
    let row = Math.floor(index / cols);
    let col = index - row * cols;
    return keyboardKeys[row][col] || null;
  }

  return (
    <div id="drum-machine">
      {kits[currentKit].instruments.map((value, index) => {
        return (
          <DrumPad
            instrument={value}
            key={index}
            instrumentIndex={index}
            keyboardKey={getKeyFromIndex(index)}
            buttonClicked={buttonClicked}
          />
        );
      })}

      <DrumKitControls
        currentKit={currentKit}
        kits={kits}
        onChange={handleKitChange}
        lastInstrument={kits[currentKit].instruments[lastInstrument]}
      />
    </div>
  );
}
