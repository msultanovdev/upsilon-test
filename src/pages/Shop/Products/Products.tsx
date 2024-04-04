import { useState } from "react";
import { Button } from "react-bootstrap";
import ProductItem from "../../../components/ProductItem/ProductItem";
import { productsAPI } from "../../../services/ProductService";
import cl from "./Products.module.css";

const Products = () => {
  const [productsLimit, setProductsLimit] = useState(8);
  const {
    error,
    data: products,
    isLoading,
  } = productsAPI.useFetchAllProductsQuery(productsLimit);
  return (
    <>
      <div className={cl.productsControls}>
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
      {isLoading && "Loading..."}
      {error && <p className={cl.errorMessage}>{"Something wrong :/"}</p>}
      <div className={cl.products}>
        {products?.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
