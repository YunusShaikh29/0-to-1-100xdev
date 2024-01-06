/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid red", padding: "1em 2em" }}>
      {children}
    </div>
  );
}

export default CardWrapper;
