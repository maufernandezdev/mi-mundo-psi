import Image from "next/image"
import logo from '@/assets/images/Logo2.svg'
import styles from './FrontSection.module.css'

export function FooterFrontSection (){
    return (
        <div className={styles.footerFrontSection}>
            <Image src={logo} width={425} height={300} alt="logo"></Image>
        </div>
    )
}