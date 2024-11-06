import { useQuery } from "@tanstack/react-query";
import "./App.css";
import axios from "axios";
import Customers from "./components/Customers";
import { useState } from "react";

function App() {
  const [showCustomers, setShowCustomers] = useState(false);

  return (<div className="App">
    <button onClick={() => {
      setShowCustomers(!showCustomers);
    }}>{showCustomers ? "hide" : "show"  } customers bro</button>
    {showCustomers ? <Customers/> : null}
  </div>);
}

export default App;
