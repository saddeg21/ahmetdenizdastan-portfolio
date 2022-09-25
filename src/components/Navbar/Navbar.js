import "./Navbar.css";
import logo from "../../images/logo.png";

const Navbar = () => {
    return(<div className="navbar-wrapper">
        <div className="navbar-logo">
            <h1>ADD</h1>
        </div>
        <div className="navbar-links">
            <ul>
                <li>Projelerim</li>
                <li>Hakkımda</li>
                <li>İletişim</li>
            </ul>
        </div>
        <div>C</div>
    </div>)
};

export default Navbar;