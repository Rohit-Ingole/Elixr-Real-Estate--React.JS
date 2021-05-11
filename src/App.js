import React, { useState } from "react";

import Home from "./pages/home"

import Navbar from "./components/Navbar/index";
import DropDown from "./components/DropDown";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
