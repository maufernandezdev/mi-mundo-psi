import Image from 'next/image'
import bookImage from '@/assets/images/viktor-frankl.jpg'
import styles from './Blog.module.css'
import { PrimaryButton } from '../shared/PrimaryButton'

interface Props {
    image: string;
    categoryLabel: string,
    title: string;
    author: string;
}
export function Card ({image,categoryLabel,title, author}: Props){
    
    return (
        <div className={styles.card}>
            <Image src={bookImage} width={125} height={150} alt="book"></Image>
            <h3>{categoryLabel}</h3>
            <h3>{title}</h3>
            <h3>{author}</h3>
            {/* <button>leer más</button> */}
            <div style={{marginTop: 15}}>
                <PrimaryButton title='leer más' backgroundColor='#5f728d'></PrimaryButton>
            </div>
        </div>
    )
}