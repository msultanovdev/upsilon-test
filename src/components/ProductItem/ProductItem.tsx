import { FC } from "react";
import "./ProductItem.css";

interface IProductItemProps {
  img: string;
  title: string;
  price: number;
}

const ProductItem: FC<IProductItemProps> = ({ img, title, price }) => {
  return (
    <div className="el-wrapper">
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

        <a className="cart" href="#">
          <span className="price">${price}</span>
          <span className="details">
            <span className="txt">Details</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProductItem;
