import Image from 'next/image'
import styles from './page.module.css'
import { FrontSection } from '@/sections/front-section/FrontSection'
import { FooterFrontSection } from '@/sections/front-section/FooterFrontSection'

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Slider Home</h1>
     <FrontSection></FrontSection>
     <FooterFrontSection></FooterFrontSection>
    </main>
  )
}
