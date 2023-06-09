import styles from './page.module.css'
import { FrontSection } from '@/sections/front-section/FrontSection'
import { PresentationSection } from '@/sections/presentation/Presentation'
import { Workshops } from '@/sections/workshops/Workshops'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Slider Home</h1>
      <FrontSection></FrontSection>
      <PresentationSection></PresentationSection>
      <Workshops></Workshops>
    </main>
  )
}
