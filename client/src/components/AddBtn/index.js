import React from "react";
import "./style.css";
import { FaRegStar } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

function AddBtn(props) {
    console.log("this is add button", props);
  return (
    <span className="add-btn" {...props} role="button" tabIndex="2">
      <a data-tip data-for="addFace">
        <FaRegStar className="hvr-grow-shadow" />
      </a>
      <ReactTooltip id="addFace" type="warning">
        <span>Add To List</span>
      </ReactTooltip>
    </span>
  );
}
export default AddBtn;

