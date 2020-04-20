import React from "react";
import PlayerList from "./components/PlayerList";
import "./App.css";
import useDarkMode from "./hooks/darkMode";

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Soccar Player list</h1>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
          />
        </div>
      </div>
      <PlayerList />
    </div>
  );
}

export default App;
