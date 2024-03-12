import React from "react";
import Header from "./components/Header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/home";
import ProjectGallery from "./components/Project Gallery/projectGallery";
import Contact from "./components/Contact/contact";
import './App.css'

function App() {
  return (
    <div>
    <Header />
    <Home />
    <ProjectGallery />
    <Contact />
    </div>
  )
}

export default App;
