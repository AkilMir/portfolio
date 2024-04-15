import React from "react";
import { Link } from 'react-scroll';
import '../App.css';

const Footer = () => {
    const closingParenthesis = ")";
    return (
        <footer className = "footer">
            <div className = "footer-container">
                <div>
                    <p className = "footer-line" >Feel free to reach out! :{closingParenthesis}</p>
                </div>
                <div>
                    <Link activeClass="active" to="nav" spy={true} smooth={true} duration={500}>
                        <a className = "back-to-home">Back to Home</a>
                    </Link>
                </div>

            </div>
        </footer>


    );
}

export default Footer;