import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const t = setInterval(() => setCount(count + 1), 1000);
  }, [count]);

  return <div className="App"><b>Crazy timer:</b>  <br/> <div style={{fontSize: '30px'}}>{count}</div></div>;
}

export default App;
