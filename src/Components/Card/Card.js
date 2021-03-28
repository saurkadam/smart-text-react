import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Card.module.css'

export default function Card(props) {
    const { SearchResult } = props
    return (
        <div className={`${styles['card-component']} back-color-white`}>
            <Link 
                to={{
                    pathname:'/case',
                    state: SearchResult.name
                }}
                style={{
                    fontSize:'25px'
                }}>{SearchResult.name}</Link>
                <p>{SearchResult.description}</p>
        </div>
    )
}
