import { Link } from "react-router-dom";
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
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link>Cart</Link>
                            </li>
                        </ul>
                        <button onClick={changeState}>{btnName}</button>
                    </div>
                    
                </div>
                
                
            </div>
        );
    }
export default Header;