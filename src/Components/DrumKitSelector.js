import React from "react";

export default function DrumKitSelector(props) {
  return (
    <select value={props.currentKit} onChange={props.onChange}>
      {props.kits.map((kit, index) => {
        return (
          <option key={index} value={index}>
            {kit.title}
          </option>
        );
      })}
    </select>
  );
}
