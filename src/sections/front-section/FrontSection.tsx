"use client";

import { Card } from "./Card";
import styles from "./FrontSection.module.css";
import { FooterFrontSection } from "@/sections/front-section/FooterFrontSection";
import { SliderHome } from "@/sections/slider-home/Slider";
import imageBlog from "@/assets/images/front-blog.jpg";
import Image from "next/image";

export function FrontSection() {
  return (
    // <div className="flex mx-auto flex-wrap w-full">
    <div className="">
      <SliderHome></SliderHome>
      {/* <div className="bg-orange text-white h-[585px] w-[274px] p-10 absolute z-30 ml-[750px]">
        <h3 className="font-semibold">Blog</h3>
        <Image
          src={imageBlog}
          width={250}
          height={100}
          alt="blog"
          className="my-4"
        ></Image>
        <h2 className="font-baby-doll text-[30px] leading-5 mb-4">
          MATERIAL GRATUITO
        </h2>
        <p className="">
          Aquí encontrarás notas, reflexiones y bibliografía recomendada
          totalmente gratuita para que puedas disfrutar.{" "}
        </p>
        <div className="text-right">
          <button className="my-4 rounded-[20px] border-2 border-white px-6 py-1 uppercase font-bold text-[11px]">
            ver más
          </button>
        </div>
      </div> */}
      {/* <section className={styles.section}>
        <Card person="dana"></Card>
        <FooterFrontSection></FooterFrontSection>
        <Card person="anto"></Card>
      </section> */}
    </div>
  );
}
