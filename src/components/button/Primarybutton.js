import React from "react";
import "./Primarybutton.css";

export default function Primarybutton(props) {
  console.log(props);
  return (
    <>
      <button className="primary-btn">{props.buttonName}</button>
    </>
  );
}
