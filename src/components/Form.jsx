import React, { useState } from "react";

function Form({ addColor }) {
  const [color, setColor] = useState("#FFBF00");
  const [count, setCount] = useState(10);

  const handleSubmission = (event) => {
    event.preventDefault();
    const constant = 100;
    const number = Math.floor(constant / count);

    addColor(color, number);
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmission}>
        <input
          type="number"
          name="amount"
          id="amount"
          min="10"
          step="1"
          max="100"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
          style={{ textAlign: "center" }}
        />
        <input
          type="color"
          value={color}
          name="color"
          id="color"
          placeholder="#FFBF00"
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />

        <input
          type="text"
          value={color}
          name="color-text"
          id="color-text"
          placeholder="#FFBF00"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: color }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;
