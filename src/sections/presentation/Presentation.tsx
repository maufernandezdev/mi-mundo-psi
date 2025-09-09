"use client";

import styles from "./PresentationSection.module.css";
import { PrimaryButton } from "../shared/PrimaryButton";
import { PersonalPresentation } from "./PersonalPresentation";
import logoColor from "@/assets/images/logo-color.png";
import Image from "next/image";
import Link from "next/link";

export function PresentationSection() {
  return (
    <section className={styles.presentation} id="presentation">
      <section className={styles.welcome}>
        <div className={styles.title}>
          <h2 className="font-baby-doll text-subtitle lg:text-title text-center mr-2 text-primary-blue">
            Bienvenidos!
          </h2>
          <Image src={logoColor} width={30} height={25} alt="logo"></Image>
        </div>
        <div className={styles.introContainer}>
          <p>
            Hola, bienvendxs ! Somos Dana y Anto,
            <span>
              {` dos psico amigas con muchas ganas de contagiar y llevar la
              psicología`}{" "}
            </span>
            a cada persona y rincón de este mundo.
          </p>
          <br />
          <p>
            Creamos y pensamos Mi mundo psi para compartirles talleres, cursos,
            recursos terapéuticos, notas y reflexiones para que puedas comenzar
            tu proceso autoconocimiento cómo, cuándo y desde donde quieras.
          </p>
          <br />
          <p>
            <span>
              Además, si te animas podes comenzar el <br />
              cambio con nosotras, a través de sesiones online!
            </span>
          </p>
          {/* <div className={styles.buttonContainer}>
            <PrimaryButton
              title="AGENDAR CONSULTA"
              backgroundColor="#edb6a4"
              shadow={true}
            ></PrimaryButton>
          </div> */}
        </div>
      </section>
      <PersonalPresentation person="anto"></PersonalPresentation>
      <PersonalPresentation person="dana"></PersonalPresentation>
    </section>
  );
}
