import React from 'react'
import FooterInfo from './FooterInfo/FooterInfo'
import FooterTable from './FooterTable/FooterTable'
import "./Footer.css"


const Footer = () => {
    return (
        <div className="FooterContainer">
           <FooterInfo/> 
           <FooterTable />
        </div>
    )
}

export default Footer
