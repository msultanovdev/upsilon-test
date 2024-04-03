import { useParams } from "react-router-dom";
import { productsAPI } from "../../services/ProductService";
import cl from "./Product.module.css";
import { Button } from "react-bootstrap";

const Product = () => {
  const { id } = useParams();

  const {
    error,
    data: product,
    isLoading,
  } = productsAPI.useFetchOneProductQuery(id ?? "");
  console.log(product);

  if (!isLoading && !product) {
    return <p>Product not found</p>;
  }

  if (error) {
    return <p>Ooops... Something wrong :/</p>;
  }

  return (
    <div className={cl.container}>
      {!isLoading ? (
        <>
          <div className={cl.leftColumn}>
            {product?.image && <img src={product.image} alt="product image" />}
          </div>
          <div className={cl.rightColumn}>
            <div className={cl.productDescription}>
              {product?.category && <span>{product.category}</span>}
              {product?.title && <h2>{product.title}</h2>}
              {product?.description && <p>{product.description}</p>}
            </div>

            <div className={cl.productPrice}>
              {product?.price && <span>{product.price}$</span>}
              <Button variant="outline-success">Add to cart</Button>
            </div>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Product;
