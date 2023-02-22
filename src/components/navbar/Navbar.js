import './Navbar.css';
import {FaBars, FaSearch, FaUserAlt} from "react-icons/fa";

function Navbar() {
    return (
        <div className="topnav">
            <a href="inicio">Início</a>
            <a href="responder">Responder</a>
            <a href="perguntar">Perguntar</a>
            <a href="comunidade">Comunidade</a>

            <div className="search-container">
                    <input type="text" />
                    <button className="submit-lente" type="submit">
                        <FaSearch/>
                    </button>
            </div>

            <div className="dropdown">
                <button className="dropbtn"><FaUserAlt/>
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#">Editar</a>
                    <a href="#">Sair</a>
                </div>
            </div>

            <a href="javascript:void(0);" className="icon" onClick="navbarResponse()">
                <FaBars/>
            </a>
        </div>

);
}

function navbarResponse() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function myFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

export default Navbar;
