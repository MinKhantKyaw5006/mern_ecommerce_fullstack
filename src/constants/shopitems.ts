// src/constants/shopItems.ts
import productchip from "@/assets/productchip.png";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";

export type ShopItem = {
  name: string;
  description: string;
  stock: string;
  rating: number;
  oldprice: number;
  price: number;
  imageUrl: string;
  thumbnails: string[];
};

export const shopItems: ShopItem[] = Array.from({ length: 10 }).map((_, i) => ({
  name: `Basket of Veges ${i + 1}`,
  description:
    "Fresh from local market and planted with organic soil ready to be served, cooked, baked, fried and enjoy with families",
  stock: "In Stock",
  rating: 4.7,
  oldprice: 89.99,
  price: 49.99,
  imageUrl: productchip,
  thumbnails: [productchip, product2, product3, product4],
}));
