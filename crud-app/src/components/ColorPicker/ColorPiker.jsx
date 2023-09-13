import React, { useEffect, useState } from "react";
import "./picker.css";
import { GithubPicker, AlphaPicker } from "react-color";

function ColorPicker() {
  // State to store the selected color
  const [selectedColor, setSelectedColor] = useState("#f00");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectColor, setSelectColor] = useState({
    r: 255, // Red component (0-255)
    g: 0, // Green component (0-255)
    b: 0, // Blue component (0-255)
    a: 1, // Alpha component (0-1, fully opaque by default)
  });

  useEffect(() => {
    // Initialize selectedColor and selectColor to red when the component mounts
    setSelectedColor({
      r: 255,
      g: 0,
      b: 0,
      a: 1,
    });
  }, []);
  // Function to handle color change
  const handleColorChange = (color) => {
    setSelectedColor(color.rgb);
    setSelectColor(color.rgb);
    // console.log(color);
  };
  const handleColorChange2 = (color) => {
    setSelectColor(color.rgb);
    setSelectedColor(color.rgb);
    // console.log(color.rgb);
  };

  // Define your custom colors
  const customColors = [
    "#FF5733",
    "#33FF57",
    "#3366FF",
    "#FFFF33",
    "#E5FFCC",
    "#E0E0E0",
    "#FF00FF",
    "#800000",
    "#FFA500",
    "#556B2F",
    "#00FF00",
    "#006400",
    "#90EE90",
    "#008080",
    "#00FFFF",
    "#40E0D0",
    "#B0E0E6",
    "#00BFFF",
  ];
  return (
    <div>
      <h1
        style={{
          color: `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, ${selectedColor.a})`,
        }}
      >
        Color Picker
      </h1>
      <div>
        <div
          style={{
            color: `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, ${selectedColor.a})`,
            backgroundColor: `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, ${selectedColor.a})`,
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
                colors={customColors} // Add your custom colors here
              />
            )}
          </div>
          <div style={{ marginTop: "4px" }}>
            {showColorPicker && (
              <AlphaPicker
                color={selectColor}
                onChange={handleColorChange2}
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
