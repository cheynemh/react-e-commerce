import styles from "./Searchbar.module.scss";
import { Search } from "react-bootstrap-icons";

const Searchbar = () => {
    return (
        <span>
            <input
                className={styles.Searchbar}
                type="text"
                placeholder="What are you looking for?"
            />
            <span className={styles.Searchbar__button}>
                <button>
                    <Search color="black" size={16} />
                </button>
            </span>
        </span>
    );
};

export default Searchbar;
