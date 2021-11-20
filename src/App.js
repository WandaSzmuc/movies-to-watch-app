import React from "react";
import { Header } from "./components/Header";
import { Movielist } from "./components/Movielist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./lib/font-awesome/css/all.min.css";
import "./App.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Movielist />}></Route>
          <Route exact path="/watched" element={<Watched />}></Route>
          <Route exact path="/add" element={<Add />}></Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
