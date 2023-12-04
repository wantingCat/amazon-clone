import { Link } from "react-router-dom";
import amazonLogo from "../../assets/logo/amazon-2-logo-svgrepo-com.svg";
import searchIcon from "../../assets/logo/search-svgrepo-com.svg";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
    return (
        <header className={classes.container}>
            <nav className={classes.nav}>
                <div className={classes.icon}>
                    <Link to="/"><img src={amazonLogo} alt="amazon logo" width={100} /></Link>
                </div>
                <div>
                    <search className={classes.search}>
                        <form>
                            <label htmlFor="search">
                                <input type="search" id="search" name="search" placeholder="Search..." />
                                <button><img src={searchIcon} alt="search"  height={15}/></button>
                            </label>
                        </form>
                    </search>
                </div>
                <div>
                    <Link to="/account">Login</Link>
                </div>
                <div>
                    <Link to="/cart">Cart</Link>
                </div>
            </nav>
        </header>
    )
}

export default MainNavigation;