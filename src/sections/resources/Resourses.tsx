"use client";

import styles from "./Resource.module.css";
import blogList from "./resources.json";
import { Card } from "./Card";
import logoColor from "@/assets/images/logo-color.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PrimaryButton } from "../shared/PrimaryButton";
import { useRouter } from "next/navigation";
import { ModalResources } from "./ModalResources";

export interface IResource {
  image: string;
  categoryLabel: string;
  labelBackgroundColor: string;
  title: string;
  author: string;
}

export function Resources() {
  const router = useRouter();
  const [sampleBlogList, setSampleBlogList] = useState<IResource[]>([]);
  useEffect(() => {
    const sample = blogList.slice(0, 3);
    setSampleBlogList(sample);
  }, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<IResource>();

  return (
    <section className={styles.container} id="resources">
      <div className="flex justify-center flex-wrap max-w-[1024px] mx-auto">
        <div className="flex justify-center w-full mb-[32px] lg:justify-start max-w-[750px] flex-wrap">
          <Image src={logoColor} width={55} height={8} alt="logo"></Image>
          <h2 className="text-primary-blue uppercase mx-2 text-subtitle lg:text-title font-baby-doll">
            mi mundo psi
          </h2>
          <h2 className="uppercase text-white bg-primary-sky-blue rounded-[15px] px-2 text-subtitle lg:text-title font-baby-doll flex items-center">
            recursos!
          </h2>
        </div>
        <div className="w-full flex flex-wrap justify-center max-w-[750px] lg:justify-between">
          {sampleBlogList &&
            sampleBlogList.map((blog: IResource, index: number) => {
              return (
                <Card
                  key={index}
                  {...blog}
                  openModal={() => {
                    setSelectedResource(blog);
                    setModalOpen(true);
                  }}
                ></Card>
              );
            })}
        </div>
        <div className="text-center mt-6 lg:mt-10 w-full">
          <PrimaryButton
            title="Ver más"
            backgroundColor="#5f728d"
            type="button"
            onClickEvent={() => router.push("/recursos")}
          ></PrimaryButton>
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
