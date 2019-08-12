import React from "react";
import "./style.css"

function CompBtn(props){
    return(
        <span className="comp-btn" {...props} role="button" tabIndex="1">
            $
        </span>
    );
}
export default CompBtn;
