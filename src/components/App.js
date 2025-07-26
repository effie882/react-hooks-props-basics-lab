import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import { name, city, bio, github, linkedin } from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={name} city={city} />
      <About bio={bio} github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;
