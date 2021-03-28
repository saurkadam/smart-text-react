import React from 'react'
import styles from './Appbar.module.css'

export default function Appbar(props) {
    const {caseNumber, imgSrc} = props
    return (
        <div className={`back-color-white`}>
            <div className={`app-flex app-flex-row ${styles['app-bar-container']} `}>
                <img src={imgSrc} alt={imgSrc} className={styles['logo-size']}/>
                <div>
                    <h2>Case No: {caseNumber}</h2>
                </div>
            </div>
        </div>
    )
}
