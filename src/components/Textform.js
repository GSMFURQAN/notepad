import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLowClick = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
  };
  const handleClear = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    //without onChange text becomes readonly. inorder to edit text in application, OnChange is must
    setText(event.target.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const [text, setText] = useState("");
  // text = "furqan"; // wrong way to set text
  // setText("furqan"); //correct way to set text
  return (
    <>
      <div className="container">
        <h1
          className={` mt-2 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          {props.heading}{" "}
        </h1>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.mode} text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-3 my-3"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-3 my-3"
          onClick={handleLowClick}
        >
          Convert to SmallCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-3 my-3"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className={`container my-2" text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length} minutes are required to read the
          above text
        </p>
        <p>Preview</p>
        <p>{text}</p>
      </div>
    </>
  );
}
