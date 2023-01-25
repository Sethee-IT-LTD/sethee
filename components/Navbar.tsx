import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-black">
      <div className="container py-7">
        <div>
          <Image
            src="/sethee-logo.svg"
            alt="Sethee LLC logo"
            width={191}
            height={40}
          />
        </div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
