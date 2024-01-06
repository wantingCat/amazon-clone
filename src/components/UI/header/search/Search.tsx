import React from "react";
import searchIcon from "../../../../assets/logo/search-svgrepo-com.svg";

import classes from "./Search.module.css";
import { redirect } from "react-router-dom";

function Search() {
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    redirect("/products/search");
  };
  return (
    <div>
      <search className={classes.search}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="search">
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search..."
            />
            <button type="submit">
              <img src={searchIcon} alt="search" height={15} />
            </button>
          </label>
        </form>
      </search>
    </div>
  );
}

export default Search;
