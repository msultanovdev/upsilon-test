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

  return (
    <div className={cl.container}>
      <div className={cl.leftColumn}>
        <img src={product?.image} alt="" />
      </div>

      <div className={cl.rightColumn}>
        <div className={cl.productDescription}>
          <span>{product?.category}</span>
          <h2>{product?.title}</h2>
          <p>
            The preferred choice of a vast range of acclaimed DJs. Punchy,
            bass-focused sound and high isolation. Sturdy headband and on-ear
            cushions suitable for live performance
          </p>
        </div>

        <div className={cl.productPrice}>
          <span>148$</span>
          <Button variant="outline-success">Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
