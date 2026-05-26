import { FaGithub, FaInfo, FaPhone, FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav className="navbar">
            <a
                href="https://github.com/Alexandru101"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub className="nav-icons" style={{ fontSize: "40px" }} title="Github Profile"/>
            </a>

            <div style={{ fontWeight: "bold", fontSize: "20px" }}>Developer Portfolio</div>

            <div>
                <Link to="/projects">
                    <FaFolder className="nav-icons" title="Projects" />
                </Link>

                <Link to="/about">
                    <FaInfo className="nav-icons" title="About Me" />
                </Link>

                <Link to="/contact">
                    <FaPhone className="nav-icons" title="Conctact" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
