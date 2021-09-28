import React from "react";
import styles from "./mainsect.module.css";
import logo192 from './logo192.png';

console.log(logo192);
export default function Mainsect(props){
    return(
        
            <div className={styles.header_back}>
                <div className={styles.header_head}>{props.Mainsection}</div>
                <div className={styles.header_pic}>
               <img src={logo192} alt={logo192}/>
                </div>
                <div className={styles.header_Line}>{props.category}| 
                <span className={styles.header_Sline}>{props.context}</span>
                </div>
            </div>
        
    )
}