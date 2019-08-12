import React from "react";
import "./style.css";
import { FaRegHandPeace } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
    <a data-tip data-for="deleteFace">
        <FaRegHandPeace className="hvr-grow-shadow" />
      </a>
      <ReactTooltip id="deleteFace" type="danger">
        <span>Not Interested</span>
      </ReactTooltip>
    </span>
  );
}

export default DeleteBtn;
