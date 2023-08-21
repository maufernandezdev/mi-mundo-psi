import Image from "next/image";
import logo from "@/assets/images/Logo2.svg";
import logoColor from "@/assets/images/logo-color.png";
import styles from "./FrontSection.module.css";

export function FooterFrontSection() {
  return (
    <div className={styles.footerFrontSection}>
      <div>
        <Image src={logoColor} width={80} height={60} alt="logo"></Image>
      </div>
      <h2 className="text-center font-baby-doll text-[27px] text-primary-blue uppercase mt-1">
        Mi mundo psi
      </h2>
    </div>
  );
}
