import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: "auto", clear: "both", padding: 20, paddingTop:40, textAlign: "center", backgroundColor:"#007bff" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;

