import styles from './PresentationSection.module.css'
import { PrimaryButton } from '../shared/PrimaryButton'
import imageAnto from '@/assets/images/anto.jpg'
import imageDana from '@/assets/images/dana.jpg'
import Image from 'next/image'

interface Props{
    person: string
}
export function PersonalPresentation ({person}: Props){
    return (
        <section className={person === 'anto' ? styles.antoPresentation : styles.danaPresentation }>
            <h2 style={{color:'#fff'}}>HOLA</h2>
            <h2 style={{
                marginBottom:'1rem', 
                textTransform:'uppercase',
                fontWeight: 'bold',
                color: person === 'anto' ? '#5f728d' : '#edb6a4'
            }}>
                SOY {person}!
            </h2>
            {
                person === 'anto' ? (
                    <div>
                        <p>
                            Hola ! <span>Soy Antonela Oreggioni</span>, Lic. en psicología (Mat. 1994). 
                            Estoy especializada en psicología clínica y orientación vocacional.
                        </p>
                        <br />
                        <p>
                            Me encantan las temáticas sociales y vinculares, disfruto de 
                            poder encontrarme con mis pacientes y acompañarlos en sus 
                            procesos de cambio. También disfruto mucho de mantenerme 
                            siempre activa aprendiendo y compartiendo con mis colegas.
                        </p>
                        <br />
                        <p>
                            Soy fundadora y coordinadora de Sentido Nortes consultorios 
                            integrales, el espacio que siempre me permitió imprimir mi 
                            esencia: desarrollar talleres, ateneos y conocer maravillosas 
                            personas.
                        </p>
                        <br />
                        <p>
                            He trabajado en Secretaria de Niñez, Adolescencia y Familia de la 
                            ciudad de Esperanza, donde fui muy feliz.
                        </p>
                        <br />
                        <p>
                            También encontre mi mundito en acompañar a personas en la
                            <span style={{fontStyle:'italic'}}> búsqueda de su proyecto de vida, ayudándoles desde la 
                                orientación vocacional a pensarse y re-pensarse. 
                            </span> 
                        </p>
                        <br />
                        <p>
                            Hoy me encuentro lejos de mi país natal, tratando de no perder la 
                            esencia y reinventándome, porque la vida para mi es eso...
                            <span>una constante búsqueda de la felicidad.</span> 
                        </p>
                        <div className={styles.imageContainer}>
                            <Image 
                                src={imageAnto}
                                width={335} height={335} 
                                alt="anto"
                                className={styles.image}>
                            </Image>
                        </div>
                        <div className={styles.buttonContainer}>
                            <PrimaryButton title='agendar consulta' backgroundColor='#5f728d' shadow={true}></PrimaryButton>
                        </div>

                    </div>
                ) : (
                    <div>
                        <p>
                            Hola ! Soy <span>Dana Petit</span>, creo mucho en lo lindo de mostrar la parte 
                            humana del terapeuta así que hoy voy a contarles un poco de mí: 
                            soy licenciada en psicología y trabajo haciendo psicoterapia 
                            clínica desde el día que me recibí desde un abordaje integrativo.
                        </p>
                        <br />
                        <p>
                            Amo esta profesión y lo más importante para mí es qué las 
                            hermosas personas que lleguen al consultorio se sientan en un 
                            espacio cálido y de confianza. También soy mamá, esposa, hija, 
                            amiga, entre otras cosas más. 
                        </p>
                        <br />
                        <p>
                            Me especialicé en Terapia Sistémica y Terapia Cognitivo 
                            Conductual. He trabajado y me he 
                            <span style={{fontStyle:'italic'}}> diplomado en el abordaje de 
                                Trastornos de la conducta alimentaria, obesidad y ansiedad.
                            </span> 
                        </p>
                        <br />
                        <p>
                            El compromiso que siento por esta vocación me hace querer 
                            llegar a ustedes para acompañarlos en su camino personal, 
                            descubriendo recursos y potenciando nuevos. 
                        </p>
                        <br />
                        <p>
                            <span>El bienestar se construye</span> y me gustaría estar ahí para 
                            acompañarlos a través de estos talleres o de las sesiones de 
                            psicoterapia.
                        </p>
                        <br />
                        <p>Los espero.</p>
                        <div className={styles.imageContainer}>
                            <Image 
                                src={imageDana}
                                // width={195} height={325} 
                                width={335} height={335}
                                alt="dana"
                                className={styles.image}>
                            </Image>
                        </div>
                        <div className={styles.buttonContainer}>
                            <PrimaryButton title='agendar consulta' backgroundColor='#7cbab5' shadow={true}></PrimaryButton>
                        </div>
                    </div>
                )
            }
        </section>
    )
}