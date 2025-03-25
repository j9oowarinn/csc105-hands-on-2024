import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./assets/navbar"; // เปลี่ยนเป็น "./assets/navbar" แทน
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import AboutMe from "./pages/aboutme";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <section id="home" className="h-screen flex items-center justify-center">
        <Home />
      </section>
      <section id="gallery" className="h-screen flex items-center justify-center bg-gray-100">
        <Gallery />
      </section>
      <section id="about" className="h-screen flex items-center justify-center bg-gray-200">
        <AboutMe />
      </section>
    </div>
  );
}

export default App;


