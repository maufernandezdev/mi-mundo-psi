'use client'
import logo from '@/assets/images/Logo.svg'
import Image from 'next/image'
import { useRef } from "react";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

export default function header (){
    const navRef = useRef<HTMLDivElement>(null);

	const showNavbar = () => { 
		navRef.current?.classList.toggle(
			"responsive_nav"
		);
	};
    return (
        <header>
			<h3>Mi mundo psi</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Talleres</a>
				<a href="/#">Blog</a>
				<a href="/#">Tienda</a>
				<a href="/#">Contacto</a>
                {/* buscador */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					{/* <FaTimes /> */}
					<RxCross2 />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				{/* <FaBars /> */}
				<HiBars3 />
			</button>
		</header>
    )
}