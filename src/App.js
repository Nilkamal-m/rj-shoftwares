import { useState } from "react";
import "./App.css";

function App() {
  const [isactive, setIsactive] = useState(false);
  const handleClick = () => {
    setIsactive(!isactive);
  };
  return (
    <div className="App">
      <div className={isactive ? "active" : "component"}></div>
      <button className="btn" onClick={handleClick}>
        Press
      </button>
      {isactive ? <h2>Button Clicked</h2> : null}
    </div>
  );
}

export default App;
