import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { API } from "../../../utils/api";

import MiniCard from "./mini-card/MiniCard";

import classes from "./ProductDisplayHome.module.css";

function ProductDisplayHome() {
  const [data, setData] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const temp = await fetch(`${API}?limit=4`);
      const result = await temp.json();

      setData(result.products);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (data.length === 0) {
      fetchData();
    }
  }, [fetchData, data]);

  return (
    <div className={classes.card}>
      {data.length > 0 &&
        data.map((product) => (
          <Link to={`products/${product.id}`}>
            <MiniCard
              image={product.thumbnail}
              rating={product.rating}
              title={product.title}
              key={product.id}
            />
          </Link>
        ))}
    </div>
  );
}

export default ProductDisplayHome;

interface Product {
  id: string;
  thumbnail: string;
  rating: number;
  title: string;
}
