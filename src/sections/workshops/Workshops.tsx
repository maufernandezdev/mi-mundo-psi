import styles from './Workshops.module.css'
import Image from 'next/image'
import imageAnto from '@/assets/images/anto.jpg'
import { Modality } from './Modality'
import { Content } from './Content'
import { Requirements } from './Requirements'

export function Workshops (){
    return (
        <section className={styles.container}>
            <div className={styles.introduction}>
                <h2>Talleres <span>&</span> Workshops</h2>
                <p> 
                    Aquí encontrarás nuestros talleres y workshop para que 
                    puedas comenzar tu proceso enfocado en un área específica.
                </p>
                <br />
                <p>
                    Los talleres y workshop te darán información y recursos 
                    prácticos para lograr tus objetivos.
                </p>
            </div>
            <div className={styles.courses}>
                <h2>¿Y AHORA QUE?</h2>
                <h3>CONSTRUCCIÓN VOCACIONAL</h3>
                <div className={styles.imgContainer}>
                    <div className={styles.imgBox}>
                        <Image 
                            src={imageAnto}
                            width={100} height={100} 
                            alt="anto"
                            className={styles.image}>
                        </Image>
                    </div>
                </div>
                <h4>Coordinadora: Lic. Antonela Oreggioni</h4>

                <p className={styles.courseDescription}>
                    <span>OBJETIVOS: </span>
                    Que puedas <span style={{fontStyle:'italic'}}>autoconocerte</span>, siendo consciente de tus intereses, aptitudes, 
                    valores y motivaciones más sobresalientes. Que logres analizar críticamente las ofertas 
                    educativas y laborales existentes. Y que puedas reconocer aquellos factores propios y 
                    contextuales que influyen en la toma de decisiones. Para de esta forma lograr elegir a 
                    partir de la <span style={{fontStyle:'italic'}}>elaboración de un proyecto a futuro y tu propio perfil vocacional.</span> 
                </p>
            </div>
            <div className={styles.courseContent}>
                <Modality text='Virtual, asincrónico e individual'></Modality>
                <Content text='videos explicativos +19 fichas de actividades descargables'></Content>
                <Requirements text='Dispositivo reproduzca: audio-vídeo, lector PDF.'></Requirements>
            </div>
        </section>
    )
}