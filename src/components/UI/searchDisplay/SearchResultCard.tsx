import React from "react";
import { Link } from "react-router-dom";

import ResultCard from "../card/search-results/ResultCard";
import Product from "../../../utils/Product";

interface prodObj {
  products: Product[];
}

const SearchResultCard: React.FC<prodObj> = ({ products }) => {
  return (
    <>
      {products.map((product: Product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <ResultCard data={product} />
        </Link>
      ))}
    </>
  );
};

export default SearchResultCard;
