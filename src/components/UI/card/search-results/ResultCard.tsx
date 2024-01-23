import React from "react";

import classes from "./ResultCard.module.css";
import Product from "../../../../utils/Product";

interface prodObj {
  data: Product;
}

const ResultCard: React.FC<prodObj> = ({ data }) => {
  return (
    <div className={classes.main__container}>
      <img src={data.thumbnail} alt={data.title} />
      <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ResultCard;
