import React from "react";
import Header from "./components/Header/header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";
import './App.css'

function App() {
  return (
    <Wrapper>
    <Header />
    <Home />
    <Contact />
    </Wrapper>
  )
}

export default App
