import React from "react";
import SingleColor from "./SingleColor";

function ColorList({ colors }) {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={index} color={color} index={index} />;
      })}
    </section>
  );
}

export default ColorList;
