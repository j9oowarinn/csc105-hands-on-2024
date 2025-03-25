import React from 'react';
import pic from "../image/benmeme.png";

const AboutMe = () => {
  return (
    <section id="aboutme" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-white">
      <div
        className="w-100 h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${pic})` }}>
        </div>
      <div className="flex-1 space-y-4">
        <h2 className="text-4xl font-bold">About Me</h2>
        <h3 className="text-xl font-semibold">Hero</h3>
        <p className="text-gray-600 text-sm">
        I’m Ben Tennyson — just a regular teen with the Omnitrix. With over 1,000 alien forms at my disposal, I’m always ready to jump into action and save the world. Being a hero isn’t about powers, it’s about the choices you make and the people you protect. Whether it’s battling aliens or just tackling everyday challenges, I’m always up for it.
        </p>
        <button className="bg-green-900 text-white px-5 py-2 rounded-full shadow-md">
          Read More
        </button>
      </div>
      
    </section>
  );
};

export default AboutMe;
