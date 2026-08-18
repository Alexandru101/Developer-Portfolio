// Modules //
import styles from "./Home.module.css";

// Images + Icons //
import avatar from "../../assets/avatar.png";
import { LuLayers3, LuBriefcaseBusiness, LuUserRound, LuMail } from "react-icons/lu";

// Rendering Page //
export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.profile}>
                <img
                    src={avatar}
                    className={styles.avatar}
                />

                <h1 className={styles.name}>Alexandru</h1>
                <p className={styles.description}>
                    Full-Stack developer building modern web applications
                </p>
            </div>

            <nav className={styles.navigation}>
                <span className={styles.glowLine} />

                <div className={styles.navigation__options}>
                    <a className={styles["navigation__options-card"]}>
                        <span className={styles.card__icon}>{"</>"}</span>
                        <span className={styles.card__text}>Projects</span>
                    </a>

                    <a className={styles["navigation__options-card"]}>
                        <LuLayers3 className={styles.card__icon}/>
                        <span className={styles.card__text}>Skills</span>
                    </a>

                    <a className={styles["navigation__options-card"]}>
                        <LuBriefcaseBusiness className={styles.card__icon} />
                        <span className={styles.card__text}>Experience</span>
                    </a>

                    <a className={styles["navigation__options-card"]}>
                        <LuUserRound className={styles.card__icon} />
                        <span className={styles.card__text}>About</span>
                    </a>

                    <a className={styles["navigation__options-card"]}>
                        <LuMail className={styles.card__icon} />
                        <span className={styles.card__text}>Contact</span>
                    </a>
                </div>
            </nav>
        </div>
    )
};

// Next: Finish landing page about me and scroll down design