'use client'

import styles from './PresentationSection.module.css'
import { PrimaryButton } from '../shared/PrimaryButton'
import { PersonalPresentation } from './PersonalPresentation'

export function PresentationSection (){
    return (
        <section  className={styles.presentation}>
            <section className={styles.welcome}>
                <h2>Bienvenidos</h2>
                <p>Hola, bienvendxs ! Somos Dana y Anto, 
                    <span> dos psico amigas con muchas ganas 
                    de contagiar y llevar la psicología </span> 
                    a cada persona y rincón de este mundo.
                </p>
                <br />
                <p>Creamos y pensamos Mi mundo psi para compartirles talleres, cursos, recursos 
                    terapéuticos, notas y reflexiones para que puedas comenzar tu proceso 
                    autoconocimiento cómo, cuándo y desde donde quieras.
                </p>
                <br />
                <p>
                    <span>
                        Además, si te animas podes comenzar el
                        cambio con nosotras, a través de sesiones online!
                    </span>
                </p>
                <div className={styles.buttonContainer}>
                    <PrimaryButton title='AGENDAR CONSULTA' backgroundColor='#edb6a4' shadow={true}></PrimaryButton>
                </div>
            </section>
            <PersonalPresentation person='anto'></PersonalPresentation>
            <PersonalPresentation person='dana'></PersonalPresentation>
        </section>
    )
}