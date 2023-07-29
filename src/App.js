import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CountryDetail from "./Pages/CountryDetail";
import Navbar from "./components/Navbar"; // Import the Navbar component
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Include the Navbar component at the top, inside the BrowserRouter */}
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:countryCode" element={<CountryDetail />} />
          <Route path="*" element={<h2>404 Page Not Found.</h2>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
