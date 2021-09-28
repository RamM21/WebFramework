import React from 'react'
import style from "./searchView.module.css"
import Product from './Product'

export default function SearchView(props) {
    return (
        <div>
            <div className={style.grid}>
                {
                    props.items.map((items,index)=> <Product key={index} {...items}/>)
                }
            </div>
        </div>
    )
}
