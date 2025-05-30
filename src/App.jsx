import { useState } from "react";
import { ColorList, Form, SingleColor } from "./components";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [colors, setColors] = useState(new Values("#FFBF00").all(2));

  const addColor = (color, count) => {
    try {
      setColors(new Values(color).all(Number(count)));
    } catch (error) {
      toast.error("Invalid hex color ", { autoClose: 2000 });
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
