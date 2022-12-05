import React from "react";
import "./App.css";
import Home from "./components/Home";
import RandomQuote from "./components/RandomQuote";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<RandomQuote />} />
      </Routes>
    </div>
  );
};

export default App;
