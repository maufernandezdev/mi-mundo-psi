"use client";

import React from "react";
import ReactSlider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import logoColor from "@/assets/images/logo-b&n.png";
import imageAnto from "@/assets/images/anto.jpg";
import imageDana from "@/assets/images/dana.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import styles from "./Slider.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div className="bg-[#ff0000]" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
}

function SampleBackArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className="bg-[#ff0000]" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
}
export function SliderHome() {
  return (
    // <div className="w-full">
    <ReactSlider
      autoplay={false}
      autoplaySpeed={5000}
      infinite={true}
      // responsive={[{ breakpoint: 640, settings: { dots: false } }]}
      // dots={false}
      // nextArrow={<SampleNextArrow />}
      // prevArrow={<SampleBackArrow />}
    >
      {/* First slide */}
      <div className="text-primary-blue pt-10 pb-12 bg-grey px-4 h-[80vh] lg:h-[90vh] xl:[80vh]">
        <div className="m-auto flex flex-wrap max-w-[1024px]">
          <div className="">
            <h2 className="font-baby-doll text-left text-subtitle mb-2">
              BIENVENIDOS
            </h2>
            <p className="font-sans text-[13px]">
              Somos dos <span className="font-bold">psico amigas</span> con
              muchas ganas de contagiar y llevar la psicología a cada persona y
              rincón de este mundo
            </p>
            <br />
            <p className="font-sans text-[13px]">
              Creamos y pensamos Mi mundo psi para compartirles talleres,
              cursos, recursos terapéuticos, notas y reflexiones para que puedas
              comenzar tu proceso autoconocimiento cómo, cuándo y desde donde
              quieras.
            </p>
            <br />
            <p className="font-sans text-[13px]">
              Además, si te animas podes comenzar el cambio con nosotras, a
              través de sesiones online!
            </p>
            <div className="my-4">
              <Link
                href="#workshops"
                className="rounded-[20px] border-2 border-primary-blue px-6 py-1 uppercase font-bold text-[11px]"
              >
                ver más
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap mt-4 text-white justify-start pr-8">
            <Link
              href="#presentation"
              className="w-3/4 mb-4 bg-orange rounded-lg px-2 py-1 font-bold h-[33px] font-baby-doll"
            >
              Presentación
            </Link>
            <Link
              href="#workshops"
              className="w-3/4 mb-4 bg-pink rounded-lg px-2 py-1 font-bold h-[33px] font-baby-doll"
            >
              Talleres y Workshops
            </Link>
            <Link
              href="#blog"
              className="w-3/4 mb-4 bg-blue-grey rounded-lg px-2 py-1 font-bold h-[33px] font-baby-doll"
            >
              Blog
            </Link>
            <Link
              href="#shop"
              className="w-3/4 mb-4 bg-primary-sky-blue rounded-lg px-2 py-1 font-bold h-[33px] font-baby-doll"
            >
              Tienda
            </Link>
            <Link
              href="#contact"
              className="w-3/4 mb-4 bg-primary-grey rounded-lg px-2 py-1 font-bold h-[33px] font-baby-doll"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>

      {/* Second slide */}
      <div className="bg-blue-grey text-white py-12 px-8 h-[80vh] lg:h-[90vh] xl:[80vh]">
        <div className="flex flex-wrap max-w-[1024px] m-auto">
          <div className="w-full">
            <h2 className="font-baby-doll text-subtitle leading-4 w-full mb-2">
              CONOCE
            </h2>
            <h3 className="text-[24px] font-bold w-full leading-6 mb-6">
              Nuestros Talleres
            </h3>
            <button className="my-4 rounded-[20px] border-2 border-white px-6 py-1 uppercase font-bold text-[11px] hidden lg:block">
              ver más
            </button>
          </div>
          <div className="flex flex-wrap pr-4">
            <div className="w-full bg-orange rounded-[20px] px-4 py-1 mb-2">
              <Link href="#antoCourse" className="text-[14px] font-bold">
                ¿Y ahora qué?
              </Link>
              <br />
              <Link href="#antoCourse" className="text-[14px]">
                CONSTRUCCIÓN VOCACIONAL
              </Link>
            </div>
            <div className="w-full bg-pink rounded-[20px] px-4 py-1">
              <Link href="#danaCourse" className="text-[14px] font-bold">
                A.L.M.A <span className="font-normal">ALIMENTACIÓN</span>
              </Link>
              <br />
              <Link href="#danaCourse" className="text-[14px]">
                CONSCIENTE Y MINDFUL EATING
              </Link>
            </div>
          </div>
          <Link
            href="#workshops"
            className="my-4 rounded-[20px] border-2 border-white px-6 py-1 uppercase font-bold text-[11px] mt-4 lg:hidden"
          >
            ver más
          </Link>
        </div>
      </div>

      {/* Third slide */}
      <div className="bg-primary-sky-blue text-white py-12 px-4 h-[80vh] lg:h-[90vh] xl:[80vh]">
        <div className="flex justify-center flex-wrap max-w-[1024px] m-auto">
          <h3 className="text-subtitle font-semibold text-center w-full">
            SOMOS 2
          </h3>
          <h2 className="font-baby-doll text-title leading-4 text-center font-semibold w-full mb-10">
            PSICO AMIGAS
          </h2>
          <div className="w-full flex justify-center">
            <Image
              src={logoColor}
              width={70}
              height={50}
              alt="logo-mi-mundo"
            ></Image>
          </div>
          <div className="mt-10 flex">
            <div className="flex justify-center items-center mr-1">
              <h2 className="font-baby-doll text-primary-blue uppercase text-custom-text-desktop mr-2">
                soy <br /> dana!
              </h2>
              <div className="bg-orange p-1 rounded-full">
                <Image
                  src={imageDana}
                  width={100}
                  height={100}
                  alt="dana-rounded"
                  className={styles.image}
                ></Image>
              </div>
            </div>
            <div className="flex justify-center items-center ml-1">
              <div className="bg-orange rounded-full flex justify-center p-1">
                <Image
                  src={imageAnto}
                  width={100}
                  height={100}
                  alt="anto-rounded"
                  className={styles.image}
                ></Image>
              </div>
              <h2 className="font-baby-doll text-primary-blue uppercase text-custom-text-desktop ml-2">
                soy <br /> anto!
              </h2>
            </div>
          </div>
        </div>
        <p className="bg-pink py-2 px-4 mt-10 rounded-[45px] font-semibold max-w-[275px] text-center mx-auto">
          Con muchas ganas de contagiar y llevar la psicología a cada persona y
          rincón <br /> de este mundo.
        </p>
      </div>

      {/* Last slide */}
      <div className="bg-grey text-white py-12 px-4 h-[80vh] lg:h-[90vh] xl:[80vh]">
        <div className="h-full flex flex-col justify-center  max-w-[1024px] m-auto">
          <h2 className="text-primary-blue font-baby-doll text-title leading-3 text-center font-semibold">
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
    // </div>
  );
}
