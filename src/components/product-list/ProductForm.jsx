import React, { useState } from "react";

const ProductForm = () => {
  const [product, setProduct] = useState({
    title: "",
    source: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = () => {
    console.log("product", product);
    setProduct({
      title: "",
      source: "",
    });
    setIsDisabled(true);
  };

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <label htmlFor="title">Product Title:</label>
          </td>
          <td>
            <input
              type="text"
              name="title"
              id="title"
              value={product.title}
              onChange={(e) => {
                setProduct((pre) => {
                  return { ...pre, title: e.target.value };
                });
                setIsDisabled(e.target.value.length === 0);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="source">Source:</label>
          </td>
          <td>
            <select
              name="source"
              id="source"
              value={product.source}
              onChange={(e) => {
                setProduct((pre) => {
                  return { ...pre, source: e.target.value };
                });
              }}
            >
              <option value="">Select a source</option>
              <option value="YouTube">YouTube</option>
              <option value="Google">Google</option>
              <option value="ChatGPT">ChatGPT</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button disabled={isDisabled} onClick={handleSubmit}>
              Submit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductForm;
