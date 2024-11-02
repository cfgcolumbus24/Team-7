import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ onSelectView }) => {
  const [activeView, setActiveView] = useState("dashboard");

  const handleViewChange = (view) => {
    setActiveView(view);
    onSelectView(view); // Call the parent function to change the view
  };

  return (
    <div className="fixed top-0 left-0 h-full w-48 bg-gray-800 text-white flex flex-col">
      <h2 className="text-2xl font-bold text-center py-4">AskDB</h2>
      <ul className="mt-4 space-y-2">
        <li
          className={`flex items-center px-4 py-2 cursor-pointer ${
            activeView === "dashboard" ? "bg-gray-700" : ""
          }`}
          onClick={() => handleViewChange("dashboard")}
        >
          <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
          <span>Dashboard</span>
        </li>
        <li
          className={`flex items-center px-4 py-2 cursor-pointer ${
            activeView === "query" ? "bg-gray-700" : ""
          }`}
          onClick={() => handleViewChange("query")}
        >
          <FontAwesomeIcon icon={faSearch} className="mr-2" />
          <span>Query</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;