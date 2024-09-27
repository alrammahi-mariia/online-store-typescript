import { Product } from "../features/productSlice";

export const calculateTotalOfProducts = (products: Product[]) => {
  let total: number = 0;

  products.forEach((product) => {
    total += product.price;
  });

  return parseFloat(total.toFixed(2));
};
