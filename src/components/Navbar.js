import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";

export const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="w-1/2">
        <NavLink
          className="text-white font-extrabold tracking-wider ml-10 text-4xl"
          to="/"
        >
          FS
        </NavLink>
      </div>
      <div className="w-1/2 mt-4">
        <div className="float-right mr-10">
          <NavLink className="border-gray-600 mr-1" to="/about">
            <button className="bg-white rounded-l-lg font-bold px-2 py-1  ">
              About
            </button>
          </NavLink>
          <NavLink className="mr-1" to="/newauth">
            <button className="bg-white font-bold px-2 py-1">SignUp</button>
          </NavLink>
          <NavLink className="mr-1" to="/auth">
            <button className="bg-white font-bold px-2 py-1">SignIn</button>
          </NavLink>
          <NavLink className="border-gray-600" to="/help">
            <button className="bg-white font-bold px-2 py-1 rounded-r-lg ">
              Help
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export const NavbarColor = () => {
  return (
    <div className="flex justify-between">
      <div className="w-1/2">
        <NavLink
          className="text-purple-900 font-extrabold tracking-wider ml-6 text-4xl"
          to="/"
        >
          FS
        </NavLink>
      </div>
      <div className="w-1/2 mt-4">
        <div className="float-right mr-10">
          <NavLink className="mr-1" to="/about">
            <button className="bg-white rounded-l-lg font-bold px-2 py-1  ">
              About
            </button>
          </NavLink>
          <NavLink className="mr-1" to="/newauth">
            <button className="bg-white font-bold px-2 py-1">SignUp</button>
          </NavLink>
          <NavLink className="mr-1" to="/auth">
            <button className="bg-white font-bold px-2 py-1">SignIn</button>
          </NavLink>
          <NavLink className="" to="/help">
            <button className="bg-white font-bold px-2 py-1 rounded-r-lg ">
              Help
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export const RightNavbar = () => (
  <div className="float-right">
    <div className="mr-10">
      <NavLink className="mr-1" to="/about">
        <button className="bg-white rounded-l-lg font-bold px-2 py-1  ">
          About
        </button>
      </NavLink>
      <NavLink className="mr-1" to="/newauth">
        <button className="bg-white font-bold px-2 py-1">SignUp</button>
      </NavLink>
      <NavLink className="mr-1" to="/auth">
        <button className="bg-white font-bold px-2 py-1">SignIn</button>
      </NavLink>
      <NavLink className="" to="/help">
        <button className="bg-white font-bold px-2 py-1 rounded-r-lg ">
          Help
        </button>
      </NavLink>
    </div>
  </div>
);

export const RightLoginNavbar = () => (
  <div className="float-right mr-10 mt-12">
    <NavLink className="mr-1" to="/about">
      <button className="bg-white rounded-l-lg font-bold px-2 py-1  ">
        About
      </button>
    </NavLink>
    <NavLink className="mr-1" to="/newauth">
      <button className="bg-white font-bold px-2 py-1">SignUp</button>
    </NavLink>
    <NavLink className="mr-1" to="/auth">
      <button className="bg-white font-bold px-2 py-1">SignIn</button>
    </NavLink>
    <NavLink className="mr-1" to="/help">
      <button className="bg-white font-bold px-2 py-1 rounded-r-lg ">
        Help
      </button>
    </NavLink>
  </div>
);

export const LeftNavbar = () => {
  return (
    <div className="w-1/2">
      <NavLink
        className="text-purple-900 font-extrabold tracking-wider ml-6 text-4xl"
        to="/"
      >
        FS
      </NavLink>
    </div>
  );
};

export const LeftNavbarWhite = () => {
  return (
    <div className="w-1/2">
      <NavLink
        className="text-white font-extrabold tracking-wider ml-6 text-4xl"
        to="/"
      >
        FS
      </NavLink>
    </div>
  );
};
