import React from "react";
import { Form, Table } from "react-bootstrap";
import { useAppSelector } from "../../../hooks/redux";

const Tables = () => {
  const products = useAppSelector((store) => store.dbReducer.products);

  return (
    <>
      <Table className="text-center" striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th style={{ width: "15%" }}>Published</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="d-flex justify-content-center">
                  <Form.Check disabled defaultChecked={product.published} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Tables;
