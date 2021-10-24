import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import React from "react";
import { Cart4, MoonStars, Heart } from "react-bootstrap-icons";
import Searchbar from "./Searchbar/Searchbar";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <MoonStars className={styles.nav__icon} color="black" size={20} />
            <span className={styles.nav__logo}>WISHLIST</span>
            <span className={styles.searchbar}>
                <Searchbar />
            </span>
            <span className={styles.nav__right}>
                <Link to="/fav">
                    <Heart
                        className={styles.nav__icon_heart}
                        color="black"
                        size={20}
                    />
                </Link>
                <Link to="/cart">
                    <Cart4
                        className={styles.nav__icon}
                        color="black"
                        size={24}
                    />
                </Link>
            </span>
        </nav>
    );
};

export default Nav;
