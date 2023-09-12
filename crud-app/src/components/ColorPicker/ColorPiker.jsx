import React, { useState } from "react";
import { GithubPicker, AlphaPicker } from "react-color";

function ColorPicker() {
  // State to store the selected color
  const [selectedColor, setSelectedColor] = useState("#f00");
  const [showColorPicker, setShowColorPicker] = useState(false);

  // Function to handle color change
  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  return (
    <div>
      <h1 style={{ color: selectedColor }}>Color Picker</h1>
      <div>
        <div
          style={{
            backgroundColor: selectedColor,
            width: "100px",
            height: "40px",
            cursor: "pointer",
            margin: "30px",
            borderRadius: "10px",
          }}
          onClick={() => setShowColorPicker(!showColorPicker)}
        ></div>
        <div
          style={{
            background: "white",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <div>
            {showColorPicker && (
              <GithubPicker
                color={selectedColor}
                onChange={handleColorChange}
              />
            )}
          </div>
          <div style={{ marginTop: "4px" }}>
            {showColorPicker && (
              <AlphaPicker
                color={selectedColor}
                onChange={handleColorChange}
                width="195px"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
