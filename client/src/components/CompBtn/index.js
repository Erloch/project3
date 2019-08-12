import React from "react";
import "./style.css";
import { FaCheck } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

function CompBtn(props) {
  return (
    <span className="comp-btn" {...props} role="button" tabIndex="1">
      <a data-tip data-for="checkFace">
        <FaCheck className="hvr-grow-shadow" />
      </a>
      <ReactTooltip id="checkFace" type="info">
        <span>Mark Complete</span>
      </ReactTooltip>
    </span>
  );
}

export default CompBtn;

