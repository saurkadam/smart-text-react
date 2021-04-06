import React from 'react'
import styles from './Card.module.css'

export default function Card(props) {
    const { children, padding } = props
    return (
        <div className={`${styles['card-component']} back-color-white`} style={padding}>
            {children}

        </div>
    )
}
