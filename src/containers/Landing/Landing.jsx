import styles from "./Landing.module.scss";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>wishlist</h1>
            <p className={styles.desc}>
                the next time someone asks me what i want as a gift,
                <br />
                i'll promptly redirect them here instead of shrugging
                <br />
                <span className={styles.desc__italic}>
                    ... and inevitably asking for candles.
                </span>
            </p>

            <p className={styles.seeMore}>
                <Link to={`/products`}>see products &rarr;</Link>
            </p>
        </div>
    );
};

export default Landing;
