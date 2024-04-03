import { useState } from "react";
import { productsAPI } from "../../services/ProductService";
import ProductItem from "../../components/ProductItem/ProductItem";
import cl from "./Products.module.css";

function Products() {
  const [productsLimit, setProductsLimit] = useState(8);
  const {
    error,
    data: products,
    isLoading,
  } = productsAPI.useFetchAllProductsQuery(productsLimit);
  console.log(products);
  return (
    <div>
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
