import styles from "./PresentationSection.module.css";
import { PrimaryButton } from "../shared/PrimaryButton";
import imageAnto from "@/assets/images/anto.jpg";
import imageDana from "@/assets/images/dana.jpg";
import Image from "next/image";
import Link from "next/link";

interface Props {
  person: string;
}
export function PersonalPresentation({ person }: Props) {
  return (
    <section
      className={
        person === "anto" ? styles.antoPresentation : styles.danaPresentation
      }
    >
      <div style={{ maxWidth: 1024, margin: "0px auto" }}>
        <h2
          style={{ color: "#fff" }}
          className="font-semibold text-center lg:text-left"
        >
          HOLA
        </h2>
        <h2
          className={`mb-4 uppercase mt-[-18px] font-semibold ${
            person === "anto" ? "text-blue-grey" : "text-pink"
          } text-center lg:text-left`}
        >
          soy {person}!
        </h2>
        {person === "anto" ? (
          <>
            <div className="max-w-[1024px] flex flex-wrap justify-around">
              <div className="max-w-[660px] lg:mr-16">
                {/* <p>
                  Hola ! <span>Soy Antonela Oreggioni</span>, Lic. en psicología
                  (Mat. 1994). Estoy especializada en psicología clínica y
                  orientación vocacional.
                </p> */}
                <p>
                  Soy <span>Antonela</span>, psicóloga especializada en
                  acompañar procesos de autoconocimiento y bienestar emocional.
                  Trabajo desde un enfoque integrativo, lo que significa que
                  adapto distintas herramientas y perspectivas terapéuticas
                  (como el psicoanálisis, la cognitivo-conductual, sistémica y
                  humanista) según tus necesidades y características. Esto nos
                  permite abordar tus objetivos de una manera personalizada,
                  profunda y efectiva.
                </p>
                <br />
                {/* <p>
                  Me encantan las temáticas sociales y vinculares, disfruto de
                  poder encontrarme con mis pacientes y acompañarlos en sus
                  procesos de cambio. También disfruto mucho de mantenerme
                  siempre activa aprendiendo y compartiendo con mis colegas.
                </p>
                <br />
                <p>
                  Soy fundadora y coordinadora de Sentido Nortes consultorios
                  integrales, el espacio que siempre me permitió imprimir mi
                  esencia: desarrollar talleres, ateneos y conocer maravillosas
                  personas.
                </p>
                <br />
                <p>
                  He trabajado en Secretaria de Niñez, Adolescencia y Familia de
                  la ciudad de Esperanza, donde fui muy feliz.
                </p>
                <br />
                <p>
                  También encontre mi mundito en acompañar a personas en la
                  <span style={{ fontStyle: "italic" }}>
                    búsqueda de su proyecto de vida, ayudándoles desde la
                    orientación vocacional a pensarse y re-pensarse.
                  </span>
                </p>
                <br />
                <p>
                  Hoy me encuentro lejos de mi país natal, tratando de no perder
                  la esencia y reinventándome, porque la vida para mi es eso...
                  <span>una constante búsqueda de la felicidad.</span>
                </p> */}
                <p className="mb-2">
                  💻 Las sesiones son online y nos encontraremos a través de
                  Google Meet, para que puedas tomarlas desde cualquier lugar
                  con comodidad y privacidad.
                </p>
                <p className="mb-2">
                  🕒 Duración: Cada sesión dura aproximadamente 50 minutos.
                </p>
                <p>
                  📆 Disponibilidad: Cuéntame tus horarios y días preferidos, y
                  buscamos un momento que se ajuste a ambos.
                </p>
                <br />
                <p>
                  Si tienes dudas, haceme todas las preguntas que necesites,
                  ¡Voy a estar feliz de ayudarte! 😊
                </p>
                <div className="hidden lg:flex lg:justify-start lg:w-full lg:mt-8">
                  <Link
                    className="bg-[#5f728d] uppercase text-white rounded-[20px] py-[4.8px] px-[48px] font-bold border-none outline-none"
                    style={{ boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.75)" }}
                    href={
                      "https://wa.me/61475126175?text=Hola Anto%2C%20quiero%20agendar%20una%20consulta"
                    }
                    target="_blank"
                  >
                    agendar consulta
                  </Link>
                </div>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={imageAnto}
                  width={335}
                  height={335}
                  alt="anto"
                  className={styles.image}
                ></Image>
              </div>
            </div>
            <div className="flex lg:hidden justify-center w-full mt-8">
              <Link
                className="bg-[#5f728d] uppercase text-white rounded-[20px] py-[4.8px] px-[48px] font-bold border-none outline-none"
                style={{ boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.75)" }}
                href={
                  "https://wa.me/61475126175?text=Hola Anto%2C%20quiero%20agendar%20una%20consulta"
                }
                target="_blank"
              >
                agendar consulta
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="max-w-[1024px] flex flex-wrap justify-around">
              <div className="max-w-[660px] lg:mr-16">
                {/* <p>
                  Hola ! Soy <span>Dana Petit</span>, creo mucho en lo lindo de
                  mostrar la parte humana del terapeuta así que hoy voy a
                  contarles un poco de mí: soy licenciada en psicología y
                  trabajo haciendo psicoterapia clínica desde el día que me
                  recibí desde un abordaje integrativo.
                </p>
                <br />
                <p>
                  Amo esta profesión y lo más importante para mí es qué las
                  hermosas personas que lleguen al consultorio se sientan en un
                  espacio cálido y de confianza. También soy mamá, esposa, hija,
                  amiga, entre otras cosas más.
                </p>
                <br />
                <p>
                  Me especialicé en Terapia Sistémica y Terapia Cognitivo
                  Conductual. He trabajado y me he
                  <span style={{ fontStyle: "italic" }}>
                    {" "}
                    diplomado en el abordaje de Trastornos de la conducta
                    alimentaria, obesidad y ansiedad.
                  </span>
                </p>
                <br />
                <p>
                  El compromiso que siento por esta vocación me hace querer
                  llegar a ustedes para acompañarlos en su camino personal,
                  descubriendo recursos y potenciando nuevos.
                </p>
                <br />
                <p>
                  <span>El bienestar se construye</span> y me gustaría estar ahí
                  para acompañarlos a través de estos talleres o de las sesiones
                  de psicoterapia.
                </p>
                <br />
                <p>Los espero.</p> */}
                <p>
                  Hola Soy Dana!Te doy un poco mas de detalles sobre la terapia.
                  ¿Que son las sesiones? Son encuentros dinámicos donde nos
                  proponemos trabajar lo que te pasa dentro de un vínculo cálido
                  y de confianza. ¿Cómo? Usando recursos como el diálogo, la
                  escucha activa y diferentes ejercicios construyendo
                  herramientas para alcanzar tu auto conocimiento y bienestar.
                </p>
                <br />
                <p>
                  ❇ Las sesiones duran 50/60min, se hacen vía Google Meet
                  (minutos antes de iniciar te envío el link). Se abonan por
                  Wise- Pay Pal- ACH- Wire- Swift. o su valor en Pesos
                  Argentinos a Dólar Blue de ese día
                </p>
                <div className="hidden lg:flex lg:justify-start lg:w-full lg:mt-8">
                  <Link
                    className="bg-[#7cbab5] uppercase text-white rounded-[20px] py-[4.8px] px-[48px] font-bold border-none outline-none"
                    style={{ boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.75)" }}
                    href={
                      "https://wa.me/5493425356008?text=Hola Dana%2C%20quiero%20agendar%20una%20consulta"
                    }
                    target="_blank"
                  >
                    agendar consulta
                  </Link>
                </div>
              </div>

              <div className={styles.imageContainer}>
                <Image
                  src={imageDana}
                  // width={195} height={325}
                  width={335}
                  height={335}
                  alt="dana"
                  className={styles.image}
                ></Image>
              </div>
            </div>

            <div className="flex lg:hidden justify-center w-full mt-8">
              <Link
                className="bg-[#7cbab5] uppercase text-white rounded-[20px] py-[4.8px] px-[48px] font-bold border-none outline-none"
                style={{ boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.75)" }}
                href={
                  "https://wa.me/5493425356008?text=Hola Dana%2C%20quiero%20agendar%20una%20consulta"
                }
                target="_blank"
              >
                agendar consulta
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
