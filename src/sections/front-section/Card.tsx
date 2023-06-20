import Image from "next/image";
import imageAnto from '@/assets/images/anto.jpg'
import imageDana from '@/assets/images/dana.jpg'
import styles from './FrontSection.module.css'

interface Props{
    person: string
}

export function Card({person}: Props){
    return (
        <div className={person === 'anto' ? styles.cardAnto : styles.cardDana }>
            <div>
                <Image 
                    src={person === 'anto' ? imageAnto : imageDana}
                    width={160} height={160} 
                    alt="person" 
                    className={styles.image}></Image>
            </div>
            <div style={{width:'100%'}}>
                <h3 style={{color:'#fff', marginBottom:'0.5em'}}>Hola <br /> <span className={person === 'anto' ? styles.titleAnto: styles.titleDana}>soy {person === 'anto' ? ' Anto' : 'Dana'}!</span></h3>
                {
                    person === 'anto' ? <p className={styles.paragraph}>Lic. en psicología. <br />
                    Estoy especializada en 
                    psicología clínica y 
                    orientación vocacional.</p> : 
                    <p className={styles.paragraph}>Lic. en psicología. <br />
                    Estoy especializada en 
                    Terapia Sistémica y 
                    Terapia Cognitivo 
                    Conductual.</p>
                }
                
            </div>
        </div>
    )
}