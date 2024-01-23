import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../../../assets/logo/search-svgrepo-com.svg";

import { API } from "../../../../utils/api";
import Product from "../../../../utils/Product";

import classes from "./Search.module.css";

function Search() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<Product[]>([]);
  const navigate = useNavigate();

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getSearch =async () => {
    try {
      const temp = await fetch(`${API}/search?q=${search}`);
      const data = await temp.json();
      setSearchResult(data.products);
    } catch (err) {
      console.error(err);
    }
  }

  const sendData = () => {
    navigate("/products/search", { state: { data: searchResult } });
  }

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    getSearch();

    setTimeout(() => {
      sendData();
    }, 1000);
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
              value={search}
              onChange={searchInputHandler}
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
