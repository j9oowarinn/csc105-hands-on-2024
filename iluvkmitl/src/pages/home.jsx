import React from 'react';
import pic from "../image/benjy.webp";
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 pt-32 pb-16 bg-white"
    >
      <div className="flex-1 space-y-4">
        <p className="text-gray-700 text-lg">Hello, It’s me</p>
        <h1 className="text-green-600-4xl font-bold">Benjamin Kurby Tennyson</h1>
        <p className="text-xl font-medium">I’m a Hero</p>
        <p className="text-gray-600">
        Being a hero isn’t about having superpowers or a cool alien transformation like Ben Tennyson. It’s about stepping up when it counts, even when the odds are stacked against you. Whether you’re facing down a villain or just doing the right thing in a tough situation, the true power of a hero comes from the choices they make.

No fancy alien tech, just the will to never back down.
        </p>

        <div className="flex space-x-4 text-2xl mt-4">
          <FaFacebook className="cursor-pointer hover:text-blue-600" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
          <FaEnvelope className="cursor-pointer hover:text-green-600" />
        </div>

        <button className="mt-6 bg-green-900 text-white px-6 py-2 rounded-full shadow-md">
          My Portfolio
        </button>
      </div>

      <div
        className="w-100 h-170 bg-cover bg-center"
        style={{ backgroundImage: `url(${pic})` }}>
        </div>
    </section>
  );
};

export default Home;
