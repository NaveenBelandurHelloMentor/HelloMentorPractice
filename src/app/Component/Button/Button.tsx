import React from 'react'
import style from './button.module.css'

interface Buttontype{
    text:string,
    size:'lg' | 'md'
}

const Button = ({text,size}:Buttontype) =>{
    return (
        <>
        <button className={size == 'lg' ? style.button_large : style.button_small}>{size == 'lg' ? 'BreakingNews' : 'Read more'}</button>
        </>
    )
}




export default Button