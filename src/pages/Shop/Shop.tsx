import { useState } from "react";
import cl from "./Shop.module.css";
import { Tab, Tabs } from "react-bootstrap";
import Products from "./Products/Products";

function Shop() {
  const [tabKey, setTabKey] = useState("products");

  return (
    <div className={cl.productsPage}>
      <Tabs
        defaultActiveKey={tabKey}
        id="uncontrolled-tab-example"
        className={`mb-3 ${cl.tabs}`}
        variant="tabs"
        justify
      >
        <Tab eventKey="products" title="Products">
          <Products />
        </Tab>
        <Tab eventKey="lists" title="Lists">
          Tab content for Lists
        </Tab>
      </Tabs>
    </div>
  );
}

export default Shop;
