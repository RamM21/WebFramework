import React from 'react';
import styles from './header.module.css';

export default function Header(){
    return(
        <div className={styles.header_back}>
                <div className={styles.header}>
                <div className={styles.header_flex}>
                    <div className={styles.header_big}>HELSINGIN SANOMAT</div>
                    <div className={styles.header_small}>Etusivu</div>
                    <div className={styles.header_small}>Uutiset</div>
                    <div className={styles.header_small}>Lehdet</div>
                    <div className={styles.header_small}>Asiakaspalvelu</div>
                    <div className={styles.header_oth}>
                    <div className={styles.header_tilaa}>Tilaa</div>
                    <div className={styles.header_small}>Kirjaudu</div>
                    <div className={styles.header_small}>valikko</div>
                    </div>
            
            
               </div>
            </div>
          
        </div>
    )
}