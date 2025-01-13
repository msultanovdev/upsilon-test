import { useMemo } from "react";
import { filterType, IProduct } from "../../types/types";
import ProductItem from "../ProductItem/ProductItem";

interface IFilterProps {
  items: IProduct[];
  filter: filterType;
}

const Filter = ({ items, filter }: IFilterProps) => {
  const sortProducts = (products: IProduct[], sortBy: string) => {
    if (!sortBy) {
      return products;
    }
    return products.slice().sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "price") {
        return a.price - b.price;
      }
      return 0;
    });
  };

  const searchedItems = useMemo(() => {
    return sortProducts(items, filter.sortBy).filter((item) =>
      item.title.toLocaleLowerCase().includes(filter.query.toLowerCase()),
    );
  }, [filter, items]);

  return (
    <>
      {searchedItems?.map((item) => {
        return (
          <ProductItem
            key={item.id}
            id={item.id}
            img={item.image}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </>
  );
};

export default Filter;
