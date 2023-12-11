import { Link } from "react-router-dom";
import Search from "./search/Search";
import amazonLogo from "../../../assets/logo/amazon-2-logo-svgrepo-com.svg";
import cartIcon from "../../../assets/logo/cart-shopping-svgrepo-com.svg"

import classes from "./MainNavigation.module.css";

function MainNavigation() {
    return (
        <header className={classes.container}>
            <nav className={classes.nav}>
                <div className={classes.icon}>
                    <Link to="/"><img src={amazonLogo} alt="amazon logo" width={100} /></Link>
                </div>
                <Search />
                <div>
                    <Link to="/auth">Login</Link>
                </div>
                <div>
                    <Link to="/cart"><img src={cartIcon} alt="cart" height={30} /></Link>
                </div>
            </nav>
        </header>
    )
}

export default MainNavigation;