import { useMemo } from "react";
import { filterType, IProduct } from "../../types/types";
import ProductItem from "../ProductItem/ProductItem";

interface IFilterProps<T> {
  items: T[];
  filter: filterType;
}

const Filter = <T extends IProduct>({ items, filter }: IFilterProps<T>) => {
  const searchedItems = useMemo(() => {
    return items.filter((item) =>
      item.title.toLocaleLowerCase().includes(filter.query.toLowerCase()),
    );
  }, [filter]);

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
