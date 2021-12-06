import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import Moralis from "moralis";
import Home from "./containers/Home";
function App() {
  return <Home />;
}

export default App;
