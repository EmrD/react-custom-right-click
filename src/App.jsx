import React, { useState } from "react";
import "./App.css"; // Import custom CSS

const App = () => {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleContextMenu = (event) => {
    event.preventDefault();
    setMenuPosition({ x: event.pageX, y: event.pageY });
    setShowMenu(true);
  };

  const handleClick = () => {
    setShowMenu(false); // Close the menu when clicking outside
  };

  return (
    <div
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      className="h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col items-center justify-center cursor-context-menu text-white"
    >
      {selectedOption && (
        <h1 className="text-3xl font-bold mb-4">
          Selected Option: {selectedOption}
        </h1>
      )}
      <h1 className="text-2xl font-semibold">
        Right-click to open the custom menu
      </h1>

      {showMenu && (
        <ul
          className="custom-menu absolute bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg p-3 transition-all duration-300 ease-in-out transform opacity-0 scale-95"
          style={{
            top: `${menuPosition.y}px`,
            left: `${menuPosition.x}px`,
          }}
        >
          <li
            onClick={() => setSelectedOption("Option 1")}
            className="px-4 py-2 hover:bg-gray-200 rounded-md cursor-pointer transition-all duration-150"
          >
            Option 1
          </li>
          <li
            onClick={() => setSelectedOption("Option 2")}
            className="px-4 py-2 hover:bg-gray-200 rounded-md cursor-pointer transition-all duration-150"
          >
            Option 2
          </li>
          <li
            onClick={() => setSelectedOption("Option 3")}
            className="px-4 py-2 hover:bg-gray-200 rounded-md cursor-pointer transition-all duration-150"
          >
            Option 3
          </li>
        </ul>
      )}
    </div>
  );
};

export default App;
