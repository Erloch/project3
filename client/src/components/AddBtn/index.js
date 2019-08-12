import React from "react";
import "./style.css";

function AddBtn(props){
    return(
        <span className="add-btn" {...props} role="button" tabIndex="2">
            +
        </span>
    );
}

export default AddBtn;
