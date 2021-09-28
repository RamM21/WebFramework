import React from 'react'
import style from './ProductAdminView.module.css'

export default function ProductAdminView(props) {
    return (
        <div className={style.margin}>
             Product: {props.Title} By: {props.Producer} Price: {props.Cost}
            <button className={style.button_Margin} onClick={()=>props.onDelete(props.id)}>X</button>
        </div>
    )
}
