// Modules //
import styles from "./Home.module.css";

// Images //
import avatar from "../../assets/avatar.png";

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

            <div className={styles.navigation}>
                <span className={styles.glowLine} />
            </div>
        </div>
    )
};

// Next: Finish designing page options