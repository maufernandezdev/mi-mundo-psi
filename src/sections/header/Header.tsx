"use client";

import Link from "next/link";
import { useRef } from "react";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

export default function header() {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavbar = () => {
    navRef.current?.classList.toggle("responsive_nav");
  };
  return (
    <header className="max-w-[1024px] m-auto z-50">
      <Link href="/">
        <h3>Mi mundo psi</h3>
      </Link>
      <nav ref={navRef} className="z-50">
        <a href="/#">Home</a>
        <a href="/#">Talleres</a>
        <a href="/#">Blog</a>
        <a href="/#">Tienda</a>
        <a href="/#">Contacto</a>
        <a href="/login">Login</a>
        <a
          href="/registro"
          className="border border-[#5f728d] rounded-lg py-1 px-4"
        >
          Registro
        </a>
        {/* buscador */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          {/* <FaTimes /> */}
          <RxCross2 />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        {/* <FaBars /> */}
        <HiBars3 />
      </button>
    </header>
  );
}
