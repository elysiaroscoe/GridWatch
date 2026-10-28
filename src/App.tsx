import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={`landing-shell ${darkMode ? "dark" : "light"}`}>
      <div className="title-wrap">
        <h1>GridWatch</h1>
      </div>

      <button
        type="button"
        className="toggle-button"
        onClick={() => setDarkMode((value) => !value)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? "Light mode" : "Dark mode"}
      </button>
    </main>
  );
}

export default App;
