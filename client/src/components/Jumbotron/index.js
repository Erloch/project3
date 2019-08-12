import React from "react";
import "./Jumbotron.css"

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundColor: "rgb(0,123,255)" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;