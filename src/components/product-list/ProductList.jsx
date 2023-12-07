import React from "react";
import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
  const { productList, onDeleteProduct } = props;

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
          <ProductListItem
            key={product.id}
            product={product}
            index={index}
            onDeleteProduct={onDeleteProduct}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
