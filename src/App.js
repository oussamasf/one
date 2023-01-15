import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/home/home.route";
import NavBar from "./routes/navBar/nav-bar.route";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="home" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
