import React from "react";

const ColoredText = props => {
  if (!props.isSelected)
    return (
      <p style={{ fontWeight: "bold", fontSize: "30px" }}>{props.label}</p>
    );
  return (
    <p style={{ color: props.color, fontWeight: "bold", fontSize: "30px" }}>
      {props.label}
    </p>
  );
};

export default ColoredText;
