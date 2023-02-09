import React, { useState } from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineCloseCircle, AiOutlineLogout } from "react-icons/ai";

import ModalLogin from "./ModalLogin";
import { useAuth } from "./../context/AuthContext";

import Logo from "/assets/logo.png";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [login, setLogin] = useState(false);

  const { user } = useAuth();

  const menu = (e) => {
    e.preventDefault();

    setMenuActive(!menuActive);
  };

  const openLogin = (e) => {
    e.preventDefault();

    setLogin(!login);
  };

  const handleLogout = () => {
    localStorage.removeItem("@api/email");
    location.reload();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg h-20 px-8 z-[9999]">
      <div className="h-full max-w-[1100px] mx-auto flex justify-between items-center">
        <a href="#">
          <img
            src={Logo}
            alt="Logo RentUp com um ícone de uma casa na cor verde"
            className="w-28 sm:w-32 md:w-44"
          />
        </a>
        <nav className="hidden md:flex gap-4 text-lg font-medium">
          <a href="/" className="hover:text-greenDark duration-150">
            Home
          </a>
          <a href="/about" className="hover:text-greenDark duration-150">
            About
          </a>
          <a href="/services" className="hover:text-greenDark duration-150">
            Services
          </a>
          <a href="/blog" className="hover:text-greenDark duration-150">
            Blog
          </a>
          <a href="/pricing" className="hover:text-greenDark duration-150">
            Pricing
          </a>
          <a href="/Contact" className="hover:text-greenDark duration-150">
            Contact
          </a>
        </nav>
        <nav
          className={`${
            menuActive ? "left-0" : "left-[100%]"
          } flex md:hidden flex-col items-center justify-center gap-2 px-4 fixed bg-white top-20 w-full h-screen duration-300`}
        >
          <a
            href="#"
            className="py-2 border-4 border-greenDark w-full text-center hover:text-greenDark duration-150 -mt-20"
          >
            Home
          </a>
          <a
            href="#"
            className="py-2 border-4 border-greenDark w-full text-center hover:text-greenDark duration-150"
          >
            About
          </a>
          <a
            href="#"
            className="py-2 border-4 border-greenDark w-full text-center hover:text-greenDark duration-150"
          >
            Services
          </a>
          <a
            href="#"
            className="py-2 border-4 border-greenDark w-full text-center hover:text-greenDark duration-150"
          >
            Blog
          </a>
          <a
            href="#"
            className="py-2 border-4 border-greenDark w-full text-center hover:text-greenDark duration-150"
          >
            Pricing
          </a>
          <a
            href="#"
            className="py-2 border-4 border-greenDark w-full text-center hover:text-greenDark duration-150"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          {user.email === "" ? (
            <a
              href="#"
              className="hidden md:flex items-center gap-2 bg-greenDark border-2 border-greenDark text-white text-sm md:text-base font-medium px-3 py-1 rounded-md hover:bg-white hover:text-greenDark duration-200"
              onClick={openLogin}
            >
              <FaSignInAlt /> Sign In
            </a>
          ) : (
            <div
              onClick={handleLogout}
              className="text-2xl cursor-pointer hover:text-red-600 duration-150"
            >
              <AiOutlineLogout />
            </div>
          )}

          <div
            className="md:hidden text-xl text-greenDark cursor-pointer"
            onClick={openLogin}
          >
            <FaUser />
          </div>
          <div
            onClick={menu}
            className="md:hidden text-3xl text-greenDark cursor-pointer"
          >
            {menuActive ? <AiOutlineCloseCircle /> : <HiMenuAlt1 />}
          </div>
        </div>
      </div>
      {login && <ModalLogin closeLogin={openLogin} />}
    </header>
  );
};

export default Header;
