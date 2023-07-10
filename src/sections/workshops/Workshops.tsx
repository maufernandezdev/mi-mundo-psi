import styles from './Workshops.module.css'
import Image from 'next/image'
import imageAnto from '@/assets/images/anto.jpg'
import imageDana from '@/assets/images/dana.jpg'
import { Modality } from './Modality'
import { Content } from './Content'
import { Requirements } from './Requirements'
import { PrimaryButton } from '../shared/PrimaryButton'

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
            <section>
                <div className={styles.course}>
                    <h2>¿Y AHORA QUE?</h2>
                    <h3 className={styles.blueTitle}>CONSTRUCCIÓN VOCACIONAL</h3>
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
                <div className={styles.courseContent} style={{backgroundColor:'#edb6a4'}}>
                    <Modality text='Virtual, asincrónico e individual'></Modality>
                    <Content text='videos explicativos +19 fichas de actividades descargables'></Content>
                    <Requirements text='Dispositivo reproduzca: audio-vídeo, lector PDF.'></Requirements>
                </div>
                <div className={styles.buttonContainer}>
                    <PrimaryButton title='inscribirme' backgroundColor='#5f728d' shadow={true}></PrimaryButton>
                </div>
            </section>
            <section style={{borderTop: '1px solid #fff'}}>
                <div className={styles.course}>
                    <h2>A.L.M.A</h2>
                    <h3 className={styles.pinkTitle}>ALIMENTACIÓN CONSCIENTE</h3>
                    <h3 className={styles.pinkTitle}>Y MINDFUL EATING</h3>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgBox__dana}>
                            <Image 
                                src={imageDana}
                                width={100} height={100} 
                                alt="dana"
                                className={styles.image}>
                            </Image>
                        </div>
                    </div>
                    <h4>Coordinadora: Lic. Dana Petit</h4>

                    <p className={styles.courseDescription}>
                        <span>OBJETIVOS: </span>
                            Aunque se trate de la alimentación el objetivo no es descender de peso, lo que 
                            se propone a través del <span style={{fontStyle:'italic'}}>Mindful Eating&nbsp;</span> y de la <span style={{fontStyle:'italic'}}>alimentación Consciente </span> es generar una 
                            nueva relación a largo plazo con la comida, con los patrones de ingesta pero sobre todo con 
                            sus cuerpos y con ustedes mismos. <span style={{fontStyle:'italic'}}>Una relación basada en la aceptación</span>, el no juicio y la 
                            autocompasión. ¿En qué consiste el taller? En 6 módulos prácticos, con espacios breves de 
                            psicoeducación, que podrán hacer en el tiempo que deseen.
                            <br /> <br />
                            ¿Qué pasaría si tras estos 6 encuentros, aunque no hubieran perdido peso, tuvieran un 
                            nuevo vínculo con la comida? Una relación diferente a la que han tenido hasta ahora, ¿Y si 
                            sintieran que ese cambio puede ser permanente porque algo se ha modificado en ustedes?.
                    </p>
                </div>
                <div className={styles.courseContent} style={{backgroundColor:'#edc37c'}}>
                    <Modality text='Grupal'></Modality>
                    <Content text='6 Módulos Prácticos'></Content>
                    <Requirements text='Dispositivo reproduzca: audio-vídeo, lector PDF.'></Requirements>
                </div>
                <div className={styles.buttonContainer}>
                    <PrimaryButton title='inscribirme' backgroundColor='#5f728d' shadow={true}></PrimaryButton>
                </div>
            </section>
        </section>
    )
}