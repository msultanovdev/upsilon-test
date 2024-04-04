import { Button, Form, Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { dbSlice } from "../../../store/reducers/dbSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IDBProduct } from "../../../types/types";
import { getLocal, setLocal } from "../../../utils/helpers";

const Tables = () => {
  const products = useAppSelector((store) => store.dbReducer.products);
  const [list, setList] = useState<IDBProduct[]>([]);
  const [selectValue, setSelectValue] = useState(
    getLocal("selectValue") ?? false,
  );

  const dispatch = useAppDispatch();
  const { removeProductById } = dbSlice.actions;

  const navigate = useNavigate();
  const removeProduct = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => {
    e.stopPropagation();
    dispatch(removeProductById(id));
  };

  useEffect(() => {
    if (selectValue) {
      const onlySelectedProducts = products.filter(
        (product) => product.published,
      );
      setList(onlySelectedProducts);
    } else {
      const onlyunSelectedProducts = products.filter(
        (product) => !product.published,
      );
      setList(onlyunSelectedProducts);
    }
  }, [selectValue, products]);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocal("selectValue", JSON.stringify(e.target.checked));
    setSelectValue(e.target.checked);
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
      <div>
        <Form>
          <Form.Check
            defaultChecked={selectValue}
            type="switch"
            id="custom-switch"
            label="unpublished/published"
            onChange={(e) => handleSelect(e)}
          />
        </Form>
      </div>
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
          {list.length === 0 ? (
            <tr style={{ textAlign: "center" }}>
              <td>No products</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          ) : (
            ""
          )}
          {list.map((product) => {
            return (
              <tr
                key={product.id}
                onClick={() => navigate(`/form/${product.id}`)}
              >
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <Form.Check disabled defaultChecked={product.published} />
                </td>
                <td>
                  <Button
                    onClick={(e) => removeProduct(e, product.id)}
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
