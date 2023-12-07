import React from "react";

const ProductListItem = (props) => {
  const { product, index, onDeleteProduct } = props;

  const handleDelete = (id) => () => {
    onDeleteProduct(id);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.title}</td>
      <td>{product.source}</td>
      <td>
        <button
          style={{ width: "100%", color: "red" }}
          onClick={handleDelete(product.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductListItem;
