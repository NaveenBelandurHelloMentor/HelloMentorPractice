import React from 'react'
import styles from './page.module.css'

interface TagsType {
    color:boolean | true,
    text:string
}

const Tags = ({color,text}:TagsType) =>{
    return (
        <>
        <div className={color  ? styles.tagContainer : styles.tagContainer_default}>
           <p>{text}</p>
        </div>
        </>
    )
}



export default Tags