import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const Product = () => {
  const [productList, setProductList] = useState([]);
  const handleAddProduct = (product) => {
    console.log("product", product);
    setProductList((pre) => [...pre, product]);
  };

  return (
    <div>
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList productList={productList} />
    </div>
  );
};

export default Product;
