import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import Product from "./Product";
import { fetchProducts } from "../features/productSlice";
import { calculateTotalOfProducts } from "../utils/utils";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>{calculateTotalOfProducts(products)}</h2>
      {products.map((product) => (
        <Product {...product} />
      ))}
    </div>
  );
};

export default List;
