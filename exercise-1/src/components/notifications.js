import React from "react";
import styles from "./notification.module.css"

export default function Notification(props){
    return(
        <div className={styles.header_back}>
            <span className={styles.header}>{props.topic}:</span>
            <span className={styles.header_small}>{props.body}</span>
        </div>
    )
}