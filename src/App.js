import React, { useState, useEffect } from "react";
import logo from "./images/bg-logo2.png";
import landingImg from "./images/landingimage.png";
import "./App.css";
import { BsTelephone } from "react-icons/bs";
import BscCourses from "./components/BscCourses";
import BcomCourses from "./components/BcomCourses";
import BaCourses from "./components/BaCourses";
import BtechCourses from "./components/BtechCourses";
import MastersCourses from "./components/MastersCourses";
import StickyWhatsApp from "./components/StickyWhatsapp";
import FormKeep from "./components/FormKeep";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // Set isVisible to true after a short delay to trigger the animation
      setIsVisible(true);
    }, 1000);

    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/*     NAVBAR     */}
      <nav
        className={`p-4 ${
          isOpen ? "bg-black h-screen ease-in" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              {!isOpen && (
                <a href="/" className="w-16 h-16 absolute left-3 top-4">
                  <img src={logo} alt="logo" />
                </a>
              )}
            </div>
            <div className="hidden md:flex mt-5">
              <a
                href="/"
                className=" text-gray-800 mx-4 font-medium hover:text-blue-400"
              >
                Home
              </a>
              <a
                href="/about"
                className=" text-gray-800 mx-4 font-medium  hover:text-blue-400"
              >
                About
              </a>
              <a
                href="/testimonials"
                className=" text-gray-800 mx-4 font-medium hover:text-blue-400"
              >
                Testimonials
              </a>
              <a
                href="/contact"
                className=" text-gray-800 mx-4 font-medium hover:text-blue-400"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-blue-400 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2">
            <a href="/" className="block text-white py-2 px-4 mt-14 font-bold">
              Home
            </a>
            <a
              href="/about"
              className="block text-white py-2 px-4 mt-14 font-bold"
            >
              About
            </a>
            <a
              href="/testimonials"
              className="block text-white py-2 px-4 mt-14 font-bold"
            >
              Testimonials
            </a>
            <a
              href="/contact"
              className="block text-white py-2 px-4 mt-14 font-bold"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
      {/*    NAVBAR      */}

      {/*    LANDING      */}
      <div className="flex flex-wrap items-center justify-center py-16 px-4 overflow-y-auto scroll-smooth md:mx-10">
        {/* Left Column */}
        <div
          className={`w-full md:w-1/2 transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Study in Banglore
              <br />
              Made Easy!
            </h1>
            <p className="text-lg text-gray-600">
              Step by step guide to making your dream of studying in Banglore a
              reality.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="tel:+919544534502" className="block">
                <button className="bg-blue-400 rounded-lg py-2 px-4 mt-5 text-white font-bold flex items-center transform transition duration-300 hover:scale-110">
                  Call Us
                  <span className="ml-2 hover:scale-125 ease-in animate-bounce">
                    <BsTelephone />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div
          className={`w-full md:w-1/2 mt-8 md:mt-0 transition-transform duration-500 ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <img
            src={landingImg}
            alt="Studying Abroad"
            className="mx-auto md:mx-0 max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
      {/*    LANDING      */}
      <StickyWhatsApp />
      {/*    ABOUT      */}
      <h2 className=" text-center font-bold text-2xl underline ">About</h2>
      <div className="flex flex-wrap items-center justify-center py-16 px-4 overflow-y-auto scroll-smooth mx-10">
        {/* Left Column */}
        <div
          className={`w-full md:w-1/2 transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center md:text-left">
            <h1
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              style={{ lineHeight: "1.25" }}
            >
              With The Right <br /> Advice,Great Things
              <br /> Can Happen!
            </h1>
          </div>
        </div>

        {/* Right Column */}
        <div
          className={`w-full md:w-1/2 mt-8 md:mt-0 transition-transform duration-500 ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <p className="text-gray-600">
              We match students with their dream Universities <br /> Our team of
              expert mentors guide <br /> you at every step of the process.
            </p>
            <p className="text-gray-600 mt-2">
              {" "}
              ⬤ Personalized Mentoring - University & Course Selection
              Assistance
            </p>
            <p className="text-gray-600 mt-2"> ⬤ Financial guidance</p>
            <p className="text-gray-600 mt-2"> ⬤ 24X7 Support</p>
          </div>
        </div>
      </div>
      {/*    ABOUT      */}

      {/*    COURSES      */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:mx-5">
        <BaCourses />
        <BscCourses />
        <BtechCourses />
        <BcomCourses />
        <MastersCourses />
      </div>
      {/*    COURSES      */}

      {/*    TESTIMONIALS      */}
      <Carousel/>
      {/*    TESTIMONIALS      */}

      {/*    CONTACT      */}
      <FormKeep />
      {/*    FOOTER      */}
      <Footer />
      {/*    FOOTER      */}
    </>
  );
}

export default App;
