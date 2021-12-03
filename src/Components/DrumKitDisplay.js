import React from 'react'

export default function DrumKitDisplay(props) {
  const lastInstrument =
    typeof props.lastInstrument != "undefined"
      ? props.lastInstrument.title
      : props.kits[props.currentKit].title;
  return <div id="display">{lastInstrument}</div>;
}
