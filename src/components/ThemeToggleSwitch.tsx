import React, { useState, useEffect } from "react";

const ThemeToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isChecked) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isChecked]);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label className="switch">
        <input
          id="toggle"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
        <span className="slider"></span>
      </label>
      <div className="slide-block"></div>
      {/* Add your custom styles here */}
    </div>
  );
};

export default ThemeToggleSwitch;
