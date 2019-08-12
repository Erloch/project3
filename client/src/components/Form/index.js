import React from "react";
import { Button } from "reactstrap";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <Button {...props} style={{ float: "right", marginBottom: 10 }} color="danger" size="lg" block>
      {props.children}
    </Button>
  );
}
