import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";

import logo from "../../assets/img/logo/logo.png";

import { MenuItems } from "./MenuItems";

import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = ({ setToDark }) => {
  useEffect(() => {
    AOS.init();
    //setToDark();
  });

  // if the navlink is active or not, give this style
  const activeLink =
    "px-8 py-2 m-1 mr-2 bg-[#FEA803] text-white rounded-full transition-all";
  const normalLink =
    "px-8 py-2 m-1 mr-2 text-black bg-transparent hover:transition-all ease-in-out delay-100 duration-500 hover:bg-[#E8e6e6] hover:text-black rounded-full dark:text-white dark:md:hover:bg-[#0d1f31]";

  // handle menu button click
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  //event listener for click
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  //click reference
  const menuRef = useRef();

  //handle click outside
  const handleClickOutside = (e) => {
    if (menuRef.current !== null) {
      if (!menuRef.current.contains(e.target)) {
        setNav(false);
      }
    }
  };

  return (
    <div
      className="w-screen h-[100px] z-10 dark:bg-[#243447] bg-slate-50 fixed drop-shadow-lg"
      data-aos="fade-down">
      {/* start normal navbar */}
      <div className="container mx-auto px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <NavLink to={"/"}>
            {/* replace this line of code (↓) with this (↑) if deployed with own domain then go to MenuItems.js to change the url for the props*/}
            {/* <NavLink to={"/landing-page"}> */}
            <img src={logo} alt="logo" className="w-full" />
          </NavLink>
        </div>

        <div>
          <ul className="hidden md:flex">
            {MenuItems.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  to={item.url}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }>
                  {item.title}
                </NavLink>
              );
            })}
          </ul>
        </div>

        <div className="hidden md:flex">
          <div className="mx-2 m-auto text-gray-600">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <form method="get" action="#" className="relative z-50">
                <button
                  type="submit"
                  id="searchsubmit"
                  className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"></path>
                  </svg>
                </button>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border-2 border-black rounded-md leading-5 bg-white text-gray-600 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Search"
                />
              </form>
            </div>
          </div>
          {/* Darkmode button */}
          <div className="my-auto">
            <button
              className="mx-2"
              onClick={() => {
                setToDark();
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <button
            className="px-6 py-2
                           bg-[#FEA803]
                           text-white
                           border-2 border-black
                           transition-all
                           hover:bg-[#F7931E]
                           rounded-lg
                           ">
            Launch App
          </button>
        </div>

        <div
          className="md:hidden bg-[#FEA803] border-2 border-black rounded-md"
          onClick={handleClick}>
          {!nav ? (
            <Bars3Icon className="w-8" />
          ) : (
            <XCircleIcon className="w-8" />
          )}
        </div>
      </div>
      {/* end normal navbar */}

      {/* start drop down menu */}
      <ul
        className={
          !nav ? "hidden" : "Absolute bg-slate-50 w-full px-8 md:hidden"
        }
        ref={menuRef}
        data-aos="fade-down">
        {MenuItems.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={item.url}
              onClick={handleClose}
              className="flex p-5 py-2 border-b-2 border-zinc-300 w-full hover:bg-zinc-300 hover:rounded-md hover:border-[#d9d9d9]">
              {item.title}
            </NavLink>
          );
        })}

        <div className="mx-2 mt-2 flex pt-3">
          <div className="max-w-lg w-full lg:max-w-xs text-gray-600">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <form method="get" action="#" className="relative z-50">
              <button
                type="submit"
                id="searchsubmit"
                className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
              <input
                type="search"
                name="search"
                id="search"
                className="block w-full pl-10 pr-3 py-2 border-2 border-black rounded-md leading-5 bg-white text-gray-600 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Search"
              />
            </form>
          </div>

          <button
            id="darkMode"
            className="mx-2"
            onClick={() => {
              console.log("???");
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="mx-2 mt-2 pb-5">
          <button
            className="py-1.5 max-w-lg w-full lg:max-w-xs
                          bg-[#FEA803]
                          text-white
                          border-2 border-black
                          hover:bg-[#F7931E] hover:text-white
                          rounded-lg
                          ">
            Launch App
          </button>
        </div>
      </ul>
      {/* end drop down menu */}
    </div>
  );
};

export default Navbar;
