"use client";

import styles from "./Blog.module.css";
import blogList from "./blog.json";
import { Card } from "./Card";
import logoColor from "@/assets/images/logo-color.png";
import Image from "next/image";

export function Blog() {
  return (
    <section className={styles.container}>
      <div className="flex justify-center flex-wrap max-w-[1024px] mx-auto">
        <div className="flex justify-center w-full mb-[32px] lg:justify-start max-w-[750px]">
          <Image src={logoColor} width={50} height={8} alt="logo"></Image>
          <h2 className="text-primary-blue uppercase mx-2">mi mundo psi</h2>
          <h2 className="uppercase text-white bg-primary-sky-blue rounded-[15px] px-2">
            blog!
          </h2>
        </div>
        <div className="w-full flex flex-wrap justify-center max-w-[750px] lg:justify-between">
          {blogList &&
            blogList.map((blog, index) => {
              return <Card key={index} {...blog}></Card>;
            })}
        </div>
      </div>
    </section>
  );
}
