import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000")
      .then((data) => {
        console.log(data, "www");
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2 className="text-[red]">WOWOW</h2>
    </div>
  );
}

export default App;
