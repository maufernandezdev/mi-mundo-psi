import { Card } from "./Card"
import styles from './FrontSection.module.css'
import { FooterFrontSection } from '@/sections/front-section/FooterFrontSection'

export function FrontSection(){
    return (
        <>
            <section className={styles.section}>
                <Card person="anto"></Card>
                <Card person="dana"></Card>
            </section>
            <FooterFrontSection></FooterFrontSection>
        </>
    )
}