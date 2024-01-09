import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductDetails from "../components/ProductDetails";
import { API } from "../utils/api";
import Product from "../utils/Product";

function ProductPage() {
  const [productData, setProductData] = useState<Product>();
  const { productId } = useParams();

  const fetchProductData = async () => {
    try {
      const temp = await fetch(`${API}/${productId}`);
      const data = await temp.json();
      setProductData(data as Product);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  return (
    <>
      {!productData && <p>Loading...</p>}
      {productData && (
        <ProductDetails
          title={productData.title}
          id={productData.id}
          description={productData.description}
          price={productData.price}
          discountPercentage={productData.discountPercentage}
          rating={productData.rating}
          stock={productData.stock}
          brand={productData.brand}
          category={productData.category}
          thumbnail={productData.thumbnail}
          images={productData.images}
        />
      )}
    </>
  );
}

export default ProductPage;
