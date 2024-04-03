import { useState } from "react";
import { productsAPI } from "../../services/ProductService";

function Products() {
  const [productsLimit, setProductsLimit] = useState(8);
  const {
    error,
    data: products,
    isLoading,
  } = productsAPI.useFetchAllProductsQuery(8);
  console.log(products);
  return <div>{isLoading && "Loading..."}</div>;
}

export default Products;
