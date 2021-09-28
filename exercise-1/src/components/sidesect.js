import React from "react";
import styles from "./sidesect.module.css";

 function SideSectList(Data){
      return (<div className={styles.sidesect_line}>
            <div className={styles.header_numb}>{Data.number}</div>
            <div ><span className={styles.header_categor}>{Data.category} |</span>
                {Data.context}
            </div>
   </div>) 
}


export default function SideSect(props){
    return(
        <div className={styles.header_back}>
            <div className={styles.header_head}>
                Luetuimmat
            </div>
            <div>
            {
            props.data.map(element=><SideSectList number={element.number} category={element.category} context={element.context}/>)
            }
            </div>
            
        </div>
    )
}