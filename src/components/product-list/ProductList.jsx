import React from "react";
import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
  const { productList } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Product Title</th>
          <th>Source</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </table>
  );
};

export default ProductList;
