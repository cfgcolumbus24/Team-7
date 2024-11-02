import React, { useState } from "react";
import PageSelector from "./PageSelector";
import Dashboard from "./Dashboard";
import QueryPage from "./QueryPage";

const App = () => {
  const [view, setView] = useState("dashboard");

  const renderView = () => {
    switch (view) {
      case "dashboard":
        return <div className="p-8"><Dashboard /></div>;
      case "query":
        return <div className=""><QueryPage /></div>;
      default:
        return <div className="p-8"><Dashboard /></div>;
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <PageSelector onSelectView={setView} />
      <div className=" ml-24 w-full">{renderView()}</div>
    </div>
  );
};

export default App;