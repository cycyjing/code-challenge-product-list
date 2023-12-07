import React from "react";
import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
  const { productList } = props;

  return (
    <table border={1} style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>No</th>
          <th>Product Title</th>
          <th>Source</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {productList.map((product, index) => (
          <ProductListItem key={product.id} product={product} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
