import React from "react";
import styles from "./table.module.css";

function Table({ data }) {

  return (
    <div>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Sold</th>
              <th>Images</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>{item.sold ? "Yes" : "No"}</td>
                  <td>
                    {item.images && item.images.length > 0 ? (
                      <img src={item.images[0]} alt="Product" width="50" />
                    ) : (
                      "No Image"
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
