import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { productsAPI } from "../../../services/ProductService";
import cl from "./Products.module.css";
import Filter from "../../../components/Filter/Filter";
import { filterType } from "../../../types/types";
import { useDebounce } from "use-debounce";

const Products = () => {
  const [productsLimit, setProductsLimit] = useState(8);
  const [filter, setFilter] = useState<filterType>({ query: "", sortBy: "" });
  const [searchValue, setSearchValue] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [value] = useDebounce(searchValue, 1000);
  const {
    error,
    data: products,
    isLoading,
  } = productsAPI.useFetchAllProductsQuery(productsLimit);

  useEffect(() => {
    setFilter({ query: searchValue, sortBy });
  }, [value, sortBy]);

  return (
    <>
      <div className={cl.productsControls}>
        <Form className={cl.formContainer}>
          <Form.Control
            value={searchValue}
            placeholder="Search..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Form.Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Default select example"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </Form.Select>
        </Form>
        <div className={cl.productsControlsBtns}>
          <Button
            onClick={() => {
              setProductsLimit(8);
            }}
            variant={`${productsLimit === 8 ? "secondary" : "outline-secondary"}`}
          >
            8
          </Button>
          <Button
            onClick={() => {
              setProductsLimit(16);
            }}
            variant={`${productsLimit === 16 ? "secondary" : "outline-secondary"}`}
          >
            16
          </Button>
          <Button
            onClick={() => {
              setProductsLimit(20);
            }}
            variant={`${productsLimit === 20 ? "secondary" : "outline-secondary"}`}
          >
            20
          </Button>
        </div>
      </div>
      {isLoading && "Loading..."}
      {error && <p className={cl.errorMessage}>{"Something wrong :/"}</p>}
      <div className={cl.products}>
        {products?.length ? <Filter items={products} filter={filter} /> : ""}
      </div>
    </>
  );
};

export default Products;
