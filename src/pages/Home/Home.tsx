import { useNavigate } from "react-router-dom";
import cl from "./Home.module.css";
import { Button } from "react-bootstrap";
import { setLocal } from "../../utils/helpers";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    setLocal("tabKey", "products");
    navigate("/products");
  };
  return (
    <div className={cl.home}>
      <h2>Welcome to Upsilon Shop!</h2>
      <p>We have 50k happiest clients...</p>
      <Button variant="outline-secondary" onClick={() => handleNavigate()}>
        Catalog page
      </Button>
    </div>
  );
};

export default Home;
