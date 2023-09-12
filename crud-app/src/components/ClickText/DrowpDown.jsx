import React, { useState } from "react";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";

const MyComponent = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  return (
    <div>
      {/* Paragraph text that triggers the popover */}
      <p
        id="PopoverClick" // Ensure the 'id' matches the 'target'
        onClick={togglePopover}
        style={{ cursor: "pointer" }}
      >
        Click me to show popover
      </p>

      {/* Popover component */}
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="PopoverClick" // This should match the 'id' of the paragraph
        toggle={togglePopover}
      >
        <PopoverBody>
          This is some popover
          <li>Pakistan </li>
          <li>India</li>
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default MyComponent;
