import React from 'react'
export default ({input,label,meta:{error,touched}})=>{
    return(
        <div className="input-field ">
            <label>{label}</label>
            <input {...input} className ='validate' required/>
            <div className="red-text">{touched&&error}</div>
        </div>
    )
}