import { LOGO_URL } from "../utils/constants";

export const Header = () => (
    <div className="heading">
        <div className="logo-container">
            <img src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact US</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;