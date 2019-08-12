import React from "react";
import "./style.css";
import { FaRegHandPeace } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

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

