import { Card } from "./Card"
import styles from './FrontSection.module.css'

export function FrontSection(){
    return (
        <>
            <section className={styles.section}>
                <Card person="anto"></Card>
                <Card person="dana"></Card>
            </section>
        </>
    )
}