import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from "react-router-dom";

const CustomBackBtn = (props)  => {
    const {backPageText ,adminLink, history, location} = props
    const handleOnClick = () => {
        if(location.pathname === '') {
            window.location.href = adminLink;   
        } else {
            history.push('')
        }
    }   
    return (
        <div className='app-flex app-flex-row justify-content-center align-items-center cursor-pointer' onClick={handleOnClick}>
            <FontAwesomeIcon icon="arrow-left" color="white"/> <span style={{paddingLeft:'10px'}}>Back to {backPageText}</span>
        </div>
    )
}

export default withRouter(CustomBackBtn)
