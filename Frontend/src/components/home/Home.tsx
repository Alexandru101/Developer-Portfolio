// Modules //
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

// Images + Icons //
import avatar from "../../assets/avatar.png";
import { LuLayers3, LuBriefcaseBusiness, LuUserRound, LuMail, LuMouse } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

// Rendering Page //
export default function Home() {
    return (
        <div className={styles.page}>
            <header className={styles.profile}>
                <img
                    src={avatar}
                    alt=""
                    className={styles.avatar}
                />

                <h1 className={styles.name}>Alexandru</h1>
                <p className={styles.description}>
                    Full-Stack developer building modern web applications
                </p>
            </header>

            <nav className={styles.navigation}>
                <span className={styles.glowLine} />

                <div className={styles.navigation__options}>
                    <Link to="/projects" className={styles.navigation__card}>
                        <span className={styles.card__icon}>{"</>"}</span>
                        <span className={styles.card__text}>Projects</span>
                    </Link>

                    <Link to="/skills" className={styles.navigation__card}>
                        <LuLayers3 className={styles.card__icon}/>
                        <span className={styles.card__text}>Skills</span>
                    </Link>

                    <Link to="/experience" className={styles.navigation__card}>
                        <LuBriefcaseBusiness className={styles.card__icon} />
                        <span className={styles.card__text}>Experience</span>
                    </Link>

                    <Link to="/about" className={styles.navigation__card}>
                        <LuUserRound className={styles.card__icon} />
                        <span className={styles.card__text}>About</span>
                    </Link>

                    <Link to="/contact" className={styles.navigation__card}>
                        <LuMail className={styles.card__icon} />
                        <span className={styles.card__text}>Contact</span>
                    </Link>
                </div>

                <div className={styles.socials}>
                    <a href="https://github.com/Alexandru101" aria-label="Github" >
                        <FaGithub className={styles.socials__icon} />
                    </a>

                    <a href="https://gb.linkedin.com/">
                        <FaLinkedin className={styles.socials__icon} />
                    </a>

                    <a href="https://x.com/?lang=en-gb">
                        <FaTwitter className={styles.socials__icon} />
                    </a>
                </div>
            </nav>

            <div className={styles.scroll}>
                <span className={styles.scroll__text}>Scroll</span>
                <LuMouse size={30} strokeWidth={1} />
                <BiChevronDown size={30} />
            </div>
        </div>
    )
};