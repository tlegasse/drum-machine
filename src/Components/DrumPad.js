import React from "react";

export default function DrumPad(props) {
  return (
    <button
      className="drum-pad"
      onClick={props.buttonClicked}
      value={props.instrumentIndex}
    >
      {props.keyboardKey}

      <audio className="clip" id={props.keyboardKey}>
        <source src={props.instrument.file} />
      </audio>
    </button>
  );
}
