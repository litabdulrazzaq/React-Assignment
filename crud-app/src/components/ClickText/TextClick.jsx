import React, { useState } from "react";
import { Popover, PopoverBody } from "reactstrap";

import "./textclick.css";

const TextClick = () => {
  const [clickedText, setClickedText] = useState("");
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const [popoverOpen, setPopoverOpen] = useState(false);

  // Object to store content for each name
  const nameContent = {
    "Abdul Razzaq": "Abdul Razzaq",
    "Saad ul Hassan": "Saad ul Hassan",
    "Ali Turab": "Ali Turab",
    "Hannan Yousuf": "Hannan Yousuf",
    "Farhan Gillani": "Farhan Gillani",
    "Ehsan Choudhary": "Ehsan Choudhary",
    "Hammid Asgher": "Hammid Asgher",
  };

  // Function to handle text click
  const handleTextClick = (text) => {
    // Look up content for the clicked name in the object
    const content = nameContent[text];
    setClickedText(content);
    setPopoverOpen(!popoverOpen);
  };

  return (
    <>
      <div
        className="row justify-content-center text-light"
        style={{ marginTop: "5rem" }}
      >
        <div className="col-md-3 col-4 bg-secondary p-5 click-text">
          {/* Render your text elements here */}
          {Object.keys(nameContent).map((name) => (
            <p
              id="PopoverClick"
              key={name}
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleTextClick(name);
              }}
            >
              {name}
            </p>
          ))}
          <div
            onClick={(e) => {
              setPopoverPosition({ top: e.clientY, left: e.clientX });
            }}
          >
            <Popover
              id="f3w"
              anchorReference="anchorPosition"
              anchorPosition={{ top: 20, left: 30 }}
              isOpen={popoverOpen}
              anchorOrigin={{
                vertical: "center",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              target="PopoverClick" // This should match the 'id' of the paragraph
              toggle={handleTextClick}
            >
              <PopoverBody>{clickedText}</PopoverBody>
            </Popover>
          </div>
        </div>
        <div className="col-md-3 col-4 bg-info py-5 fs-2 fw-bolder">
          {/* Display the clicked text on the other side */}
          <p className="" style={{ marginTop: "7rem" }}>
            {clickedText}
          </p>
        </div>
      </div>
    </>
  );
};

export default TextClick;
