import React from 'react';

const Navbar = () => {
  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="text-xl font-bold">Ben10</div>
      
      <ul className="flex space-x-6">
        <li>
          <button onClick={() => scrollToSection('home')} className="text-sm hover:font-semibold bg-green-100 px-3 py-1 rounded-full">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('aboutme')} className="text-sm hover:font-semibold">
            About me
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('gallery')} className="text-sm hover:font-semibold">
            Gallery
          </button>
        </li>
      </ul>

      <button className="bg-green-900 text-white px-4 py-1 rounded-full text-sm">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
