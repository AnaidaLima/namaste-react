import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export const Header = () => {
        const changeState = () => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
        }

        const [btnName, setBtnName] = useState("Login");
        return (
            <div className="heading">
                <div className="logo-container">
                    <img src={LOGO_URL}/>
                </div>
                <div>
                    <div className="nav-items">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact US</li>
                            <li>Cart</li>
                        </ul>
                        <button onClick={changeState}>{btnName}</button>
                    </div>
                    
                </div>
                
                
            </div>
        );
    }
export default Header;