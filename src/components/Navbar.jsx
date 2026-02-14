import React from "react";
import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="sticky bg-zinc-900/40 backdrop-blur-md top-0 z-[999] py-4 sm:py-5">
      <div className="container w-full font-NueueMontreal flex items-center justify-between">
        <div className="logo">
          <img src={Logo} className="w-12" alt="ochi logo" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;