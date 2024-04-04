import { Button, Form, Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { dbSlice } from "../../../store/reducers/dbSlice";

const Tables = () => {
  const products = useAppSelector((store) => store.dbReducer.products);
  const dispatch = useAppDispatch();
  const { removeProductById } = dbSlice.actions;

  const removeProduct = (id: string) => {
    dispatch(removeProductById(id));
  };

  if (products.length === 0) {
    return (
      <>
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>List is empty</p>
      </>
    );
  }

  return (
    <>
      <Table className="text-center" striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th style={{ width: "15%" }}>Published</th>
            <th style={{ width: "15%" }}></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <Form.Check disabled defaultChecked={product.published} />
                </td>
                <td>
                  <Button
                    onClick={() => removeProduct(product.id)}
                    variant="outline-danger"
                    size="sm"
                  >
                    Remove
                  </Button>
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
