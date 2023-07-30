"use client";

import styles from "./Blog.module.css";
import blogList from "./blog.json";
import { Card } from "./Card";
import logoColor from "@/assets/images/logo-color.png";
import Image from "next/image";

export function Blog() {
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <Image src={logoColor} width={45} height={8} alt="logo"></Image>
        <h2 className="text-primary-blue uppercase mx-2">mi mundo psi</h2>
        <h2 className="uppercase text-white bg-primary-sky-blue rounded-[15px] px-2">
          blog!
        </h2>
      </div>
      {blogList &&
        blogList.map((blog, index) => {
          return <Card key={index} {...blog}></Card>;
        })}
    </section>
  );
}
