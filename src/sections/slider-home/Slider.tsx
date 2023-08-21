"use client";

import React from "react";
import ReactSlider from "react-slick";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SliderHome() {
  return (
    <div className="w-[750px]">
      <ReactSlider
        autoplay={false}
        // autoplaySpeed={5000}
        infinite={false}
        // dots
        responsive={[{ breakpoint: 640, settings: { dots: false } }]}
        dots={false}
        className="z-10"
      >
        {/* First slide */}
        <div className="text-primary-blue pt-10 pb-12 bg-grey px-4 h-[400px]">
          <div className="max-w-[1024px] m-auto flex justify-between">
            <div className="text-[13px] max-w-[375px]">
              <h2 className="font-baby-doll text-left text-4xl mb-2">
                BIENVENIDOS
              </h2>
              <p className="">
                Somos dos <span className="font-bold">psico amigas</span> con
                muchas ganas de contagiar y llevar la psicología a cada persona
                y rincón de este mundo
              </p>
              <br />
              <p className="font-sans">
                Creamos y pensamos Mi mundo psi para compartirles talleres,
                cursos, recursos terapéuticos, notas y reflexiones para que
                puedas comenzar tu proceso autoconocimiento cómo, cuándo y desde
                donde quieras.
              </p>
              <br />
              <p>
                Además, si te animas podes comenzar el cambio con nosotras, a
                través de sesiones online!
              </p>
              <button className="my-4 rounded-[20px] border-2 border-primary-blue px-6 py-1 uppercase font-bold text-[11px]">
                ver más
              </button>
            </div>
            <div className="flex flex-wrap mt-4 text-white justify-end pr-8">
              <Link
                href=""
                className="w-3/4 mb-4 bg-orange rounded-lg px-2 py-1 font-bold h-[33px]"
              >
                Presentación
              </Link>
              <Link
                href=""
                className="w-3/4 mb-4 bg-pink rounded-lg px-2 py-1 font-bold h-[33px]"
              >
                Talleres y Workshops{" "}
              </Link>
              <Link
                href=""
                className="w-3/4 mb-4 bg-blue-grey rounded-lg px-2 py-1 font-bold h-[33px]"
              >
                Blog
              </Link>
              <Link
                href=""
                className="w-3/4 mb-4 bg-primary-sky-blue rounded-lg px-2 py-1 font-bold h-[33px]"
              >
                Tienda
              </Link>
              <Link
                href=""
                className="w-3/4 mb-4 bg-primary-grey rounded-lg px-2 py-1 font-bold h-[33px]"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>

        {/* Second slide */}
        <div className="bg-blue-grey text-white h-[400px] py-12 px-8">
          <div className="flex items-center h-full">
            <div className="w-full">
              <h2 className="font-baby-doll text-4xl leading-4 w-full">
                CONOCE
              </h2>
              <h3 className="text-[30px] font-bold w-full">
                Nuestros Talleres
              </h3>
              <button className="my-4 rounded-[20px] border-2 border-white px-6 py-1 uppercase font-bold text-[11px]">
                ver más
              </button>
            </div>
            <div className="flex flex-wrap pr-4">
              <div className="w-full bg-orange rounded-[20px] px-4 py-1 mb-2">
                <Link href="" className="text-[14px] font-bold">
                  ¿Y ahora qué?
                </Link>
                <br />
                <Link href="" className="text-[14px]">
                  CONSTRUCCIÓN VOCACIONAL
                </Link>
              </div>
              <div className="w-full bg-pink rounded-[20px] px-4 py-1">
                <Link href="" className="text-[14px] font-bold">
                  A.L.M.A <span className="font-normal">ALIMENTACIÓN</span>
                </Link>
                <br />
                <Link href="" className="text-[14px]">
                  CONSCIENTE Y MINDFUL EATING
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Third slide */}
        <div className="   h-[400px] bg-primary-sky-blue text-white  py-12 px-4">
          <h3 className="text-[28px] font-semibold text-center">SOMOS 2</h3>
          <h2 className="font-baby-doll text-4xl leading-4 text-center font-semibold">
            PSICO AMIGAS
          </h2>
          <p className="bg-pink py-2 px-4 mt-8 rounded-[40px] font-semibold max-w-[275px] text-center mx-auto">
            Con muchas ganas de contagiar y llevar la psicología a cada persona
            y rincón <br /> de este mundo.
          </p>
        </div>

        {/* Last slide */}
        <div className="  h-[400px] bg-grey text-white py-12 px-4">
          <div className="h-full flex flex-col justify-center">
            <h2 className="text-primary-blue font-baby-doll text-4xl leading-3 text-center font-semibold">
              EL CAMBIO
            </h2>
            <h3 className="text-primary-blue text-[28px] font-semibold text-center">
              que buscas,
            </h3>
            <h3 className="text-pink text-[28px] font-semibold leading-4 text-center">
              donde estés.
            </h3>
          </div>
        </div>
      </ReactSlider>
    </div>
  );
}
