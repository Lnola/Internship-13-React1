import React from "react";

const ColoredText = props => {
  if (!props.isSelected)
    return <p>{props.label}</p>;
  return <p style={{ color: props.color }}>{props.label}</p>;
};

export default ColoredText;
