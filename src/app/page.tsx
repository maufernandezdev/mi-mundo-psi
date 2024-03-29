import styles from "./page.module.css";
import { FrontSection } from "@/sections/front-section/FrontSection";
import { PresentationSection } from "@/sections/presentation/Presentation";
import { Workshops } from "@/sections/workshops/Workshops";
import { Blog } from "@/sections/blog/Blog";
import { Contact } from "@/sections/contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <FrontSection></FrontSection>
      <PresentationSection></PresentationSection>
      <Workshops></Workshops>
      <Blog></Blog>
      <Contact></Contact>
    </main>
  );
}
