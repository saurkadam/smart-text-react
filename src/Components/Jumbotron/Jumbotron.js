import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import CustomBackBtn from '../CustomBackBtn/CustomBackBtn'
import styles from './Jumbotron.module.css'

export default function Jumbotron(props) {
    const { backPageText, adminLink, caseFile, searchTextLabel, searchText, searchCallBack} = props
    return (
    <div className={`dark-blue-color ${styles['padding-jumbotron']} text-center`}>
        <div className={`app-flex app-flex-row ${styles['padding-jumbtron-head']}  justify-content-space-between`}>
           <CustomBackBtn backPageText={backPageText} adminLink={adminLink}/> 
           {caseFile && <p style={{marginRight:'8em'}}>Case Name: {caseFile}</p>}
           <p></p>
        </div>
        <h4>{searchTextLabel}</h4>
        <SearchBar searchTextLabel={searchTextLabel} callBackMethod={(value) => {searchCallBack(value)}} searchText={searchText}/>
    </div>
    )
}
