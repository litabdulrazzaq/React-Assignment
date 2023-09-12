import React, { useState } from "react";
import { Popover, PopoverBody } from "reactstrap";

import "./textclick.css";

const ShowDropDown = () => {
  // Initialize individual popover state variables for each text element
  const [popoverOpen, setPopoverOpen] = useState({});

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
    // Toggle the visibility of the popover for the clicked text
    setPopoverOpen((prevState) => ({
      ...prevState,
      [text]: !prevState[text] || false,
    }));
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
              key={name}
              id={name} // Use the 'id' attribute to uniquely identify the text element
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleTextClick(name);
              }}
            >
              {name}
            </p>
          ))}
          {Object.keys(popoverOpen).map((text) => (
            <Popover
              key={text}
              placement="bottom"
              isOpen={popoverOpen[text]}
              target={text} // Use the 'id' of the paragraph as the target
              toggle={() => handleTextClick(text)}
            >
              <PopoverBody>{nameContent[text]}</PopoverBody>
            </Popover>
          ))}
        </div>
        <div className="col-md-3 col-4 bg-info py-5 fs-2 fw-bolder">
          {/* Display the clicked text on the other side */}
          <p className="" style={{ marginTop: "7rem" }}>
            {/* Display the content of the clicked text */}
            {
              nameContent[
                Object.keys(popoverOpen).find((key) => popoverOpen[key])
              ]
            }
          </p>
        </div>
      </div>
    </>
  );
};

export default ShowDropDown;
