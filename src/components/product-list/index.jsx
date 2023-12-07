import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const Product = () => {
  const [productList, setProductList] = useState([]);
  const handleAddProduct = (product) => {
    setProductList((pre) => [...pre, product]);
  };
  const handleDeleteProduct = (id) => {
    setProductList((pre) => pre.filter((p) => p.id !== id));
  };

  return (
    <div>
      <ProductForm onAddProduct={handleAddProduct} />
      <br />
      <ProductList
        productList={productList}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};

export default Product;
