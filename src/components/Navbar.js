import React from "react";
import { Link } from 'react-scroll';
import '../App.css';

const Navbar = () => {
    return (
        <nav className="navigation-bar">
            <div className = "navigation-container">
                <div className="navigation-list-container">
                    <ul className="navigation-list">
                        <li>
                            <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                                <a className = "navigation-item">About Me</a>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}>
                                <a className = "navigation-item">Skills</a>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
                                <a className = "navigation-item">Projects</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className = "navigation-contact-container">
                    <a href = "mailto:akilmir8222003@gmail.com">
                        <img className = "contact-img" src = "https://cdn-icons-png.flaticon.com/512/281/281769.png" alt = "mail-link"></img>
                    </a>
                    <a href = "https://www.linkedin.com/in/akil-mir/" target="_blank" rel="noopener noreferrer">
                        <img className = "contact-img" src = "https://blog.waalaxy.com/wp-content/uploads/2021/01/linkedin-2.png" alt = "linkedin-link"></img>
                    </a>
                    <a href = "https://github.com/AkilMir" target="_blank" rel="noopener noreferrer">
                        <img className = "contact-img" src = "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" alt = "github-link"></img>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;