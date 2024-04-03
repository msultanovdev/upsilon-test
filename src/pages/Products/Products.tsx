import { useState } from "react";
import { productsAPI } from "../../services/ProductService";
import ProductItem from "../../components/ProductItem/ProductItem";
import cl from "./Products.module.css";
import { Button } from "react-bootstrap";

function Products() {
  const [productsLimit, setProductsLimit] = useState(8);
  const {
    error,
    data: products,
    isLoading,
  } = productsAPI.useFetchAllProductsQuery(productsLimit);
  console.log(products);
  return (
    <div className={cl.productsPage}>
      <div className={cl.productsControls}>
        <Button
          onClick={() => {
            setProductsLimit(8);
          }}
          variant={`${productsLimit === 8 ? "primary" : "outline-primary"}`}
        >
          8
        </Button>
        <Button
          onClick={() => {
            setProductsLimit(16);
          }}
          variant={`${productsLimit === 16 ? "primary" : "outline-primary"}`}
        >
          16
        </Button>
        <Button
          onClick={() => {
            setProductsLimit(20);
          }}
          variant={`${productsLimit === 20 ? "primary" : "outline-primary"}`}
        >
          20
        </Button>
      </div>
      {isLoading && "Loading..."}
      <div className={cl.products}>
        {products?.map((product) => {
          return (
            <ProductItem
              key={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
