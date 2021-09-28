import React from 'react'
import style from './product.module.css'

export default function Product(props) {
    return (
        <ul className={style.Box_Size}>
            <div className={style.Left_Margin}>
                <div >
                    <img src={"/Pictures/"+props.Img+".PNG"} alt="Capture"/>
                </div>
                <div>
                    {props.Title}
                </div>
                <div>
                    By {props.Producer}
                </div>
                <div>
                    {props.Rating}/5
                </div>
                <div>
                    <span className={style.price_Size}>{props.Cost} </span>
                     <span className={style.old_Price}>{props.oldPrice}</span>
                     <span className={style.shipping_Size}>{props.shippingCost}</span>
                </div>
                <div className={style.text_Bold}>
                    {props.Arrival}
                </div>
            </div>
        </ul>
    )
}
