'use client'

import styles from './Blog.module.css'
import blogList from './blog.json'
import { Card } from './Card'

export function Blog (){
    
    return (
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <h2>Blog!</h2>
            </div>
            {
                blogList && (
                    blogList.map((blog, index)=>{
                        return (
                            <Card key={index} {...blog} ></Card>
                        )
                    })
                )
            }
        </section>
    )
}