import React from 'react'
import DrumKitSelector from "./DrumKitSelector";
import DrumKitDisplay from './DrumKitDisplay';

export default function DrumKitControls(props) {
  return (
    <div>
      <DrumKitSelector
        currentKit={props.currentKit}
        kits={props.kits}
        onChange={props.onChange}
      />

      <DrumKitDisplay
        currentKit={props.currentKit}
        kits={props.kits}
        lastInstrument={props.lastInstrument}
      />
    </div>
  );
}
