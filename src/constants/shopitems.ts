// src/constants/shopItems.ts
import productchip from "@/assets/productchip.png";

export type ShopItem = {
    name: string;
    description: string;
    stock: string;
    rating: number;
    oldprice: number;
    price: number;
    imageUrl: string;
  };
  

export const shopItems: ShopItem[] = Array.from({ length: 10 }).map((_, i) => ({
    name: `Basket of Veges ${i + 1}`,
    description: "Fresh from local market",
    stock: "In Stock",
    rating: 4.7,
    oldprice: 89.99,
    price: 49.99,
    imageUrl: productchip,
  }));
  