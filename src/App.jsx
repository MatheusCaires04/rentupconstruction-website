import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Questions from "./components/Questions";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Princing from "./Pages/Princing";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Princing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Questions />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
