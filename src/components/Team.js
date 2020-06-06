import React from 'react';
import {NavbarTeam} from './Navbar';
import IsaacOrija from "../assets/images/isaac.orija.png";
import BoyePanthera from "../assets/images/boye.jpg";
import MuyiwaObed from "../assets/images/muyiwa.obed.jfif";

export const Team =()=> {
    return (
      <div className="sm:px-20 pt-10 p-5 bg-purple-700 h-full min-h-screen">
        <NavbarTeam />
        <div className="flex flex-wrap">
          <div className="w-full mb-24 mt-12 h-full">
            <div>
              <div className="uppercase my-12 text-center text-white font-bold text-2xl sm:text-3xl">
                Our Team is Ace
              </div>
              <div className="text-center text-white">
                Meet the group of hard working developers and designers at
                Fileseat.com
              </div>
            </div>
          </div>
          <div className="w-full  py-20 bottom-0 inset-x-0 bg-gray-100 py-auto rounded rounded-large">
            <div className="flex flex-wrap justify-between ">
              <div className="sm:w-1/3 w-full">
                <img
                  className="w-48 h-48 rounded rounded-full mx-auto border bg-gray-300  border-5 p-1 border-purple-400"
                  src={IsaacOrija}
                  alt="Isaac Orija (UI/UX Designer)"
                />
                <div className="text-center mt-5 font-black text-2xl">
                  Isaac Orija
                </div>
                <div className="text-center text-purple-700 font-semibold text-lg">
                  UI/UX Designer
                </div>
                <div className="text-center">
                  <a href="https://ng.linkedin.com/in/isaac-orija-322a95103">
                    <i className="text-blue-700 text-lg fab fa-linkedin"></i>
                  </a>
                  <a
                    className="ml-2 mr-1"
                    href="https://twitter.com/isaacorija?s=20"
                  >
                    <i className="text-blue-400 text-lg fab fa-twitter-square"></i>
                  </a>
                  <a
                    className="ml-1 mr-2"
                    href="https://twitter.com/isaacorija?s=20"
                  >
                    <i className="fab text-red-200 text-lg fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/isaacorija?s=20">
                    <i className="text-lg text-blue-600 fab fa-facebook-square"></i>
                  </a>
                </div>
              </div>
              <div className="sm:w-1/3 my-16 sm:my-0 w-full">
                <img
                  className="w-48 h-48 rounded rounded-full mx-auto border bg-gray-300  border-5 p-1 border-purple-400"
                  src={BoyePanthera}
                  alt="Olanrewaju A. Olaboye (Fullstack Engineer)"
                />
                <div className="text-center mt-5 font-black text-2xl">
                  Olanrewaju A. Olaboye
                </div>
                <div className="text-center text-purple-700 font-semibold text-lg">
                  Fullstack Developer
                </div>
                <div className="text-center">
                  <a href="https://ng.linkedin.com/in/olaboye-olanrewaju">
                    <i className="text-blue-700 text-lg fab fa-linkedin"></i>
                  </a>
                  <a
                    className="ml-2 mr-1"
                    href="https://twitter.com/BoyePanthera"
                  >
                    <i className="text-blue-400 text-lg fab fa-twitter-square"></i>
                  </a>
                  <a
                    className="ml-1 mr-2"
                    href="https://www.instagram.com/boyepanthera/"
                  >
                    <i className="fab text-red-200 text-lg fa-instagram"></i>
                  </a>
                  <a href="https://web.facebook.com/olaboye.olanrewaju?_rdc=1&_rdr">
                    <i className="text-lg text-blue-600 fab fa-facebook-square"></i>
                  </a>
                </div>
              </div>
              <div className="sm:w-1/3 w-full">
                <img
                  className="w-48 h-48 rounded rounded-full mx-auto border bg-gray-300  border-5 p-1 border-purple-400"
                  src={MuyiwaObed}
                  alt="Muyiwa Obed (Graphics Designer)"
                />
                <div className="text-center mt-5 font-black text-2xl">
                  Muyiwa Obed
                </div>
                <div className="text-center text-purple-700 font-semibold text-lg">
                  Brand Artist
                </div>
                <div className="text-center">
                  <a href="https://ng.linkedin.com/in/olaboye-olanrewaju">
                    <i className="text-blue-700 text-lg fab fa-linkedin"></i>
                  </a>
                  <a
                    className="ml-2 mr-1"
                    href="https://twitter.com/BoyePanthera"
                  >
                    <i className="text-blue-400 text-lg fab fa-twitter-square"></i>
                  </a>
                  <a
                    className="ml-1 mr-2"
                    href="https://www.instagram.com/boyepanthera/"
                  >
                    <i className="fab text-red-200 text-lg fa-instagram"></i>
                  </a>
                  <a href="https://web.facebook.com/olaboye.olanrewaju?_rdc=1&_rdr">
                    <i className="text-lg text-blue-600 fab fa-facebook-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}