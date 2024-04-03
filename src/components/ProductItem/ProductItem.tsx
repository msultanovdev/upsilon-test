import { FC } from "react";
import "./ProductItem.css";
import { useNavigate } from "react-router-dom";

interface IProductItemProps {
  img: string;
  title: string;
  price: number;
  id: number;
}

const ProductItem: FC<IProductItemProps> = ({ img, title, price, id }) => {
  const navigate = useNavigate();

  return (
    <div className="el-wrapper" onClick={() => navigate(`${id}`)}>
      <div className="box-up">
        <img className="img" src={img} alt="product image" />
        <div className="img-info">
          <div className="info-inner">
            <span className="p-name">{title}</span>
          </div>
        </div>
      </div>

      <div className="box-down">
        <div className="h-bg">
          <div className="h-bg-inner"></div>
        </div>

        <p className="cart">
          <span className="price">${price}</span>
          <span className="details">
            <span className="txt">Details</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
