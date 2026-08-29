import { Product } from "@/types/kitchen";

export function lowStockProducts(products: Product[]) {
  return products.filter(
    (product) => product.quantity < product.mandatory
  );
}

export function shoppingList(products: Product[]) {
  return lowStockProducts(products).map((product) => ({
    ...product,
    buy: Math.max(
      0,
      Math.ceil(product.mandatory - product.quantity)
    ),
  }));
}

export function adjustStock(
  products: Product[],
  productId: string,
  amount: number
) {
  return products.map((product) =>
    product.id === productId
      ? {
          ...product,
          quantity: Math.max(
            0,
            product.quantity + amount
          ),
        }
      : product
  );
}
