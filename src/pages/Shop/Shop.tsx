import { useState } from "react";
import cl from "./Shop.module.css";
import { Tab, Tabs } from "react-bootstrap";
import Products from "./Products/Products";
import Tables from "./Tables/Tables";
import { getLocal, setLocal } from "../../utils/helpers";

function Shop() {
  const tabKey = getLocal("tabKey");

  return (
    <div className={cl.productsPage}>
      <Tabs
        onSelect={(k) => setLocal("tabKey", k ?? "products")}
        defaultActiveKey={tabKey}
        id="uncontrolled-tab-example"
        className={`mb-3 ${cl.tabs}`}
        variant="tabs"
        justify
      >
        <Tab eventKey="products" title="Products">
          <Products />
        </Tab>
        <Tab eventKey="list" title="List">
          <Tables />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Shop;
