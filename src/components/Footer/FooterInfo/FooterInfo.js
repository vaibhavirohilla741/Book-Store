import React from "react";
import "./FooterInfo.css";
import LogoImg from "../../../assets/images/Logo.png"

const FooterInfo = () => {
    return (
        <div className="FooterInfo">
            <table>
                <thead>
                <tr>
                    <th><img src={LogoImg} alt="logo"/></th>
                </tr>
                <tr>
                    <th><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p></th>
                </tr>
                <tr>
                    <th><p><span>Address:  </span>198 West 21th Street, Suite 721 New York NY 10016</p></th>
                </tr>
                
                <tr>
                    <th>Phone: + 1235 2355 98</th>
                </tr>
                <tr>
                    <th>Email: info@yoursite.com</th>
                </tr>
                <tr>
                    <th>Website:yoursite.com</th>
                </tr>
                </thead>
            </table>
        </div>
    )
};

export default FooterInfo;
