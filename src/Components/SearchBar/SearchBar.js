import React, {useEffect, useState} from 'react'
import { debounce } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
    const {placeHolderText, callBackMethod, searchText} = props
    const [text,setText] = useState('')
    const handleClick = (event) => {
        callBackMethod(event) 
    }
    useEffect(() => {
        if(searchText !== '') {
            setText(searchText)
        }
    }, [searchText])
    return (
        <div className={styles['search-bar-container']}>
                <input onChange={(event) => {setText(event.target.value)}} value={text} type="text" placeholder={placeHolderText} className={styles['input-field']}/>
                <FontAwesomeIcon onClick={() => {handleClick()}} icon="search" color="black" className={`${styles['search-bar-icon']}`}/>
        </div>
    )
}
