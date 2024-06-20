import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Service from "./routes/Service";
import India from "./routes/India";  // Import India component
import Bali from "./routes/Bali"
import Lakshadweep from "./routes/Lakshadweep";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/india" element={<India />} />  
        <Route path="/bali" element={<Bali />} /> 
        <Route path="/Lakshadweep" element={<Lakshadweep />} />
      </Routes>
    </div>
  );
}

export default App;
