"use client";

import { useEffect, useState } from "react";
import styles from "../../sections/blog/Blog.module.css";
import blogList from "../../sections/resources/resources.json";
import Image from "next/image";
import logoColor from "@/assets/images/logo-color.png";
import { Card } from "@/sections/resources/Card";
import { IResource } from "@/sections/resources/Resourses";
import { ModalResources } from "@/sections/resources/ModalResources";

export default function Recursos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sampleBlogList, setSampleBlogList] = useState<any>([]);
  const [selectedResource, setSelectedResource] = useState<IResource>();
  useEffect(() => {
    setSampleBlogList(blogList);
  }, []);
  return (
    <section className={styles.container} id="blog">
      <div className="flex justify-center flex-wrap max-w-[1024px] mx-auto">
        <div className="flex justify-center w-full mb-[32px] lg:justify-start max-w-[750px]">
          <Image src={logoColor} width={60} height={8} alt="logo"></Image>
          <h2 className="text-primary-blue uppercase mx-2 text-subtitle lg:text-title font-baby-doll">
            mi mundo psi
          </h2>
          <h2 className="uppercase text-white bg-primary-sky-blue rounded-[15px] px-2 text-subtitle lg:text-title font-baby-doll flex items-center">
            blog!
          </h2>
        </div>
        <div className="w-full flex flex-wrap justify-center max-w-[750px] lg:justify-start">
          {sampleBlogList &&
            sampleBlogList.map((blog: any, index: number) => {
              return (
                <div className="lg:mr-5">
                  <Card
                    key={index}
                    {...blog}
                    openModal={() => {
                      setSelectedResource(blog);
                      setModalOpen(true);
                    }}
                  ></Card>
                </div>
              );
            })}
        </div>
        <ModalResources
          onClose={() => setModalOpen(false)}
          showModal={modalOpen}
          selectedResource={selectedResource}
        />
      </div>
    </section>
  );
}
