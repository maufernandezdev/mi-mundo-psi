"use client";

import styles from "./Workshops.module.css";
import Image from "next/image";
import imageAnto from "@/assets/images/anto.jpg";
import imageDana from "@/assets/images/dana.jpg";
import { Modality } from "./Modality";
import { Content } from "./Content";
import { Requirements } from "./Requirements";
import { PrimaryButton } from "../shared/PrimaryButton";

export function Workshops() {
  return (
    <section className={styles.container}>
      <div className="w-full bg-blue-grey border border-white">
        <div className="bg-blue-grey w-full max-w-[500px] m-auto py-20 px-4">
          <h2 className="text-pink w-full font-semibold">
            Talleres <span className="text-white font-semibold">&</span>{" "}
            Workshops
          </h2>
          <p className="text-white text-[14px]">
            Aquí encontrarás nuestros talleres y workshop para que puedas
            comenzar tu proceso enfocado en un área específica.
          </p>
          <br />
          <p className="text-white">
            Los talleres y workshop te darán información y recursos prácticos
            para lograr tus objetivos.
          </p>
        </div>
      </div>
      <section>
        {/* Anto course */}
        <div>
          <div className="w-full flex max-w-[425px] justify-center pt-10 pb-4 lg:m-auto">
            <div className="w-full py-2 flex flex-col justify-center items-center">
              <h2 className="text-primary-blue font-semibold">¿Y AHORA QUE?</h2>
              <h3 className="bg-primary-sky-blue text-white rounded-[16px] mt-[-17px] flex justify-center w-[260px] px-2 font-semibold">
                CONSTRUCCIÓN VOCACIONAL
              </h3>
              <h4 className="text-primary-blue font-bold mt-2">
                Coordinadora: Lic. Antonela Oreggioni
              </h4>
            </div>
            <div className="flex items-center">
              <div className={styles.imgContainer}>
                <div className={styles.imgBox}>
                  <Image
                    src={imageAnto}
                    width={100}
                    height={100}
                    alt="anto"
                    className={styles.image}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[650px] lg:m-auto text-left">
            <p className={"text-primary-blue px-4 pt-4 pb-10 text-[14px]"}>
              <span>OBJETIVOS: </span>
              Que puedas&nbsp;
              <span style={{ fontStyle: "italic", fontWeight: "700" }}>
                autoconocerte
              </span>
              , siendo consciente de tus intereses, aptitudes, valores y
              motivaciones más sobresalientes. Que logres analizar críticamente
              las ofertas educativas y laborales existentes. Y que puedas
              reconocer aquellos factores propios y contextuales que influyen en
              la toma de decisiones. Para de esta forma lograr elegir a partir
              de la{" "}
              <span style={{ fontStyle: "italic", fontWeight: "700" }}>
                elaboración de un proyecto a futuro y tu propio perfil
                vocacional.
              </span>
            </p>
          </div>
        </div>

        <div className="py-12 bg-pink lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row max-w-[600px] m-auto">
            <Modality text="Virtual, asincrónico e individual"></Modality>
            <Content
              text="videos explicativos"
              secondText="+19 fichas de actividades descargables"
            ></Content>
            <Requirements text="Dispositivo reproduzca: audio-vídeo, lector PDF."></Requirements>
          </div>
        </div>
        <div className="py-4 lg:py-8">
          <PrimaryButton
            title="inscribirme"
            backgroundColor="#5f728d"
            shadow={true}
          ></PrimaryButton>
        </div>
      </section>
      {/** Dana course */}
      <section className="mt-10 py-10" style={{ borderTop: "1px solid #fff" }}>
        <div className="w-full flex justify-center px-2 py-4 lg:m-auto max-w-[425px]">
          <div className="flex items-center">
            <div className={styles.imgContainer}>
              <div className={styles.imgBoxDana}>
                <Image
                  src={imageDana}
                  width={100}
                  height={100}
                  alt="anto"
                  className={styles.image}
                ></Image>
              </div>
            </div>
          </div>
          <div className="w-full py-2 flex flex-col justify-center items-center">
            <h2 className="text-primary-blue font-semibold">A.L.M.A</h2>
            <h3 className="bg-pink text-white rounded-[16px] mt-[-17px] flex w-[255px] px-2 font-semibold justify-center">
              ALIMENTACIÓN CONSCIENTE
            </h3>
            <h3 className="bg-pink text-white rounded-[16px] flex w-[170px] px-2 font-semibold mt-1 justify-center">
              Y MINDFUL EATING
            </h3>
            <h4 className="text-primary-blue font-bold mt-2">
              Coordinadora: Lic. Dana Petit
            </h4>
          </div>
        </div>
        <p className="text-primary-blue px-4 py-10 text-[14px] text-left max-w-[650px] lg:m-auto">
          <span>OBJETIVOS: </span>
          Aunque se trate de la alimentación el objetivo no es descender de
          peso, lo que se propone a través del
          <span style={{ fontStyle: "italic", fontWeight: "700" }}>
            Mindful Eating&nbsp;
          </span>
          y de la&nbsp;
          <span style={{ fontStyle: "italic", fontWeight: "700" }}>
            alimentación Consciente&nbsp;
          </span>
          es generar una nueva relación a largo plazo con la comida, con los
          patrones de ingesta pero sobre todo con sus cuerpos y con ustedes
          mismos.
          <span style={{ fontStyle: "italic", fontWeight: "700" }}>
            Una relación basada en la aceptación
          </span>
          , el no juicio y la autocompasión. ¿En qué consiste el taller? En 6
          módulos prácticos, con espacios breves de psicoeducación, que podrán
          hacer en el tiempo que deseen.
          <br /> <br />
          ¿Qué pasaría si tras estos 6 encuentros, aunque no hubieran perdido
          peso, tuvieran un nuevo vínculo con la comida? Una relación diferente
          a la que han tenido hasta ahora, ¿Y si sintieran que ese cambio puede
          ser permanente porque algo se ha modificado en ustedes?.
        </p>

        <div className={"py-12 bg-orange lg:py-16"}>
          <div className="flex flex-col gap-8 lg:flex-row max-w-[600px] m-auto">
            <Modality text="Grupal"></Modality>
            <Content text="6 Módulos Prácticos"></Content>
            <Requirements text="Dispositivo reproduzca: audio-vídeo, lector PDF."></Requirements>
          </div>
        </div>
        <div className="py-4 lg:py-8">
          <PrimaryButton
            title="inscribirme"
            backgroundColor="#5f728d"
            shadow={true}
          ></PrimaryButton>
        </div>
      </section>
    </section>
  );
}
