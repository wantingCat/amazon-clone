import searchIcon from "../../../../assets/logo/search-svgrepo-com.svg";

import classes from "./Search.module.css";

function Search() {
  return (
    <div>
      <search className={classes.search}>
        <form>
          <label htmlFor="search">
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search..."
            />
            <button>
              <img src={searchIcon} alt="search" height={15} />
            </button>
          </label>
        </form>
      </search>
    </div>
  );
}

export default Search;
