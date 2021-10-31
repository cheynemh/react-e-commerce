import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

import { Cart4, MoonStars } from "react-bootstrap-icons";
import Searchbar from "../Searchbar";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            {/* <MoonStars className={styles.nav__icon} color="black" size={20} /> */}
            <NavLink exact to="/" className={styles.nav__logo}>
                WISHLIST
            </NavLink>
            <span className={styles.searchbar}>
                <Searchbar />
            </span>
            <span className={styles.nav__right}>
                <NavLink exact to="/products" className={styles.nav__logo}>
                    PRODUCTS
                </NavLink>
                <NavLink exact to="/cart">
                    <Cart4
                        className={styles.nav__icon}
                        color="black"
                        size={23}
                    />
                </NavLink>
            </span>
        </nav>
    );
};

export default Nav;
