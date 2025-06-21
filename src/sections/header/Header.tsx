"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";

export default function header() {
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState('')
  const showNavbar = () => {
    navRef.current?.classList.toggle("responsive_nav");
  };

  return (
    <header className="max-w-[1024px] m-auto z-50">
      <Link href="/">
        <h3>Mi mundo psi</h3>
      </Link>
      <nav ref={navRef} className="z-50">
        <Link href={"/"} onClick={() => showNavbar()}>Home</Link>
        <Link href={"/#workshops"} onClick={() => showNavbar()}>Talleres</Link>
        {pathname === "/" ? (
          <Link href={"/#blog"} onClick={() => showNavbar()}>Blog</Link>
        ) : (
          <Link href={"/blog"} onClick={() => showNavbar()}>Blog</Link>
        )}
        {pathname === "/" ? (
          <Link href="/#resources" onClick={() => showNavbar()}>Recursos</Link>
        ) : (
          <Link href="/recursos" onClick={() => showNavbar()}>Recursos</Link>
        )}

        <Link href="/#contacto" onClick={() => showNavbar()}>Contacto</Link>

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
