"use client";

import Image from "next/image";
import bookImage from "@/assets/images/viktor-frankl.jpg";
import styles from "./Blog.module.css";
import { PrimaryButton } from "../shared/PrimaryButton";

interface Props {
  image: string;
  categoryLabel: string;
  title: string;
  author: string;
  labelBackgroundColor: string;
}
export function Card({
  image,
  categoryLabel,
  title,
  author,
  labelBackgroundColor,
}: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Image
          src={bookImage}
          width={"100"}
          height={215}
          className={styles.img}
          alt="book"
        ></Image>
      </div>
      <h3
        className={styles.label}
        style={{ backgroundColor: labelBackgroundColor }}
      >
        {categoryLabel}
      </h3>
      <h3 className={styles.title}>{title}</h3>
      <h3 className={styles.author}>{author}</h3>
      {/* <button>leer más</button> */}
      <div style={{ marginTop: 35, marginBottom: 15 }}>
        <PrimaryButton
          title="leer más"
          backgroundColor="#5f728d"
        ></PrimaryButton>
      </div>
    </div>
  );
}
