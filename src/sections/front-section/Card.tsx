import Image from "next/image";
import imageAnto from "@/assets/images/anto.jpg";
import imageDana from "@/assets/images/dana.jpg";
import styles from "./FrontSection.module.css";

interface Props {
  person: string;
}

export function Card({ person }: Props) {
  return (
    <div className={person === "anto" ? styles.cardAnto : styles.cardDana}>
      <div>
        <Image
          src={person === "anto" ? imageAnto : imageDana}
          width={100}
          height={100}
          alt="person"
          className={styles.image}
        ></Image>
      </div>
      <div className="w-[110px]">
        <h3 className="text-white uppercase text-[20px] font-semibold">Hola</h3>
        <h3
          className={`mb-2 uppercase text-[20px] mt-[-12px] font-semibold ${
            person === "anto" ? "text-blue-grey" : "text-pink"
          }`}
        >
          soy {person === "anto" ? " Anto" : "Dana"}!
        </h3>
        {person === "anto" ? (
          <p className="text-white text-[10px] h-[80px]">
            Lic. en psicología. <br />
            Estoy especializada en psicología clínica y orientación vocacional.
          </p>
        ) : (
          <p className="text-white text-[10px] h-[80px]">
            Lic. en psicología. <br />
            Estoy especializada en Terapia Sistémica y Terapia Cognitivo
            Conductual.
          </p>
        )}
      </div>
    </div>
  );
}
