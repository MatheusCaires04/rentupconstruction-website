import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { useAuth } from "./../context/AuthContext";

const ModalLogin = (props) => {
  const [email, setEmail] = useState({ email: "" });
  const [pass, setPass] = useState("");
  const { setUser } = useAuth();

  const handleLogin = () => {
    localStorage.setItem("@api/email", JSON.stringify(email));
    setUser(email);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/80 z-[99999] flex items-center justify-center">
      <div
        className="absolute top-10 right-10 text-white text-5xl cursor-pointer"
        onClick={props.closeLogin}
      >
        <AiOutlineClose />
      </div>
      <form
        className="w-[90%] sm:w-[70%] md:w-[50%] flex flex-col items-center bg-white p-10 rounded-md"
        onSubmit={handleLogin}
      >
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <input
          type="email"
          name="email"
          id="emailLogin"
          placeholder="Email"
          className="w-[80%] outline-none border-2 border-gray-400 text-base px-4 py-1 rounded-xl"
          onChange={(e) => setEmail({ email: e.target.value })}
        />
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Password"
          className="w-[80%] outline-none border-2 border-gray-400 text-base px-4 py-1 rounded-xl mt-4 mb-8"
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          type="submit"
          name="btnLogin"
          id="btnLogin"
          value="Sign In"
          className="outline-none border-2 border-gray-400 text-base px-4 py-1 rounded-xl w-40 text-black font-medium cursor-pointer hover:bg-gray-100 duration-200"
        />
      </form>
    </div>
  );
};

export default ModalLogin;
