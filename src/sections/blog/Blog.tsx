"use client";

import styles from "./Blog.module.css";
import blogList from "./blog.json";
import { Card } from "./Card";
import logoColor from "@/assets/images/logo-color.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PrimaryButton } from "../shared/PrimaryButton";
import { useRouter } from "next/navigation";

export function Blog() {
  const router = useRouter();
  const [sampleBlogList, setSampleBlogList] = useState<any>([]);
  useEffect(() => {
    const sample = blogList.slice(0, 3);
    setSampleBlogList(sample);
  }, []);

  return (
    <section className={styles.container} id="blog">
      <div className="flex justify-center flex-wrap max-w-[1024px] mx-auto">
        <div className="flex justify-center w-full mb-[32px] lg:justify-start max-w-[750px]">
          <Image src={logoColor} width={55} height={8} alt="logo"></Image>
          <h2 className="text-primary-blue uppercase mx-2 text-subtitle lg:text-title font-baby-doll">
            mi mundo psi
          </h2>
          <h2 className="uppercase text-white bg-primary-sky-blue rounded-[15px] px-2 text-subtitle lg:text-title font-baby-doll flex items-center">
            blog!
          </h2>
        </div>
        <div className="w-full flex flex-wrap justify-center max-w-[750px] lg:justify-between">
          {sampleBlogList &&
            sampleBlogList.map((blog: any, index: number) => {
              return <Card key={index} {...blog}></Card>;
            })}
        </div>
        <div className="text-center mt-6 lg:mt-10 w-full">
          <PrimaryButton
            title="Ver más"
            backgroundColor="#5f728d"
            type="button"
            onClickEvent={() => router.push("/blog")}
          ></PrimaryButton>
        </div>
      </div>
    </section>
  );
}
