import React from "react";

import { toast } from "react-toastify";

function SingleColor({ color, index }) {
  const { hex, weight } = color;

  const saveClipboad = async () => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`#${hex}`);
        toast.success(`You copied this color #${hex}`, { autoClose: 1000 });
      } catch (error) {
        toast.error("Failed to copied!!");
      }
    } else {
      toast.error("Clipboard access not available!");
    }
  };
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ backgroundColor: `#${hex}`, height: "200px" }}
      onClick={saveClipboad}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}

export default SingleColor;
