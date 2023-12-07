import React from "react";

const ProductForm = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <label htmlFor="title">Product Title:</label>
          </td>
          <td>
            <input type="text" name="title" id="title" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="source">Source:</label>
          </td>
          <td>
            <select name="source" id="source">
              <option value="">Select a source</option>
              <option value="YouTube">YouTube</option>
              <option value="Google">Google</option>
              <option value="ChatGPT">ChatGPT</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button>Submit</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductForm;
