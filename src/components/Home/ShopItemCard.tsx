import { useState } from "react";
import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { StarIcon, ArrowRightIcon, HeartIcon } from "@heroicons/react/20/solid";
import ProductModal from "./ProductModal";

type ShopItem = {
  name: string;
  description: string;
  stock: string;
  rating: number;
  oldprice?: number;
  price: number;
  imageUrl: string;
  thumbnails?: string[];
};


const ShopItemCard = ({ item }: { item: ShopItem }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card
          onClick={() => setOpen(true)}
          className="group w-[200px] rounded-2xl overflow-hidden border border-gray-300 shadow-sm transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
        >
          {/* Image Section */}
          <CardHeader className="p-0 h-[140px] relative overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay Actions */}
            <div className="absolute top-2 right-2 z-10 flex flex-col items-end space-y-0.5">
              <div className="transition-all duration-300 transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-[-10px]">
                <Button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
                  <ArrowRightIcon className="h-5 w-5 text-gray-800" />
                </Button>
              </div>

              <div className="transition-all duration-500 delay-100 transform opacity-0 group-hover:opacity-100 group-hover:translate-y-2 -translate-y-4">
                <Button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
                  <HeartIcon className="h-5 w-5 text-red-500" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Details */}
          <CardContent className="m-0 space-y-0.5">
            <h3 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.stock}</p>

            {/* Rating */}
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(item.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">({item.rating})</span>
            </div>

            {/* Price */}
            <div className="flex gap-2 items-center">
              {item.oldprice && (
                <span className="text-sm text-gray-500 line-through">${item.oldprice}</span>
              )}
              <span className="text-xl font-bold text-gray-900">${item.price}</span>
            </div>
          </CardContent>

          {/* Add to Cart */}
          <CardFooter className="px-4 py-2">
            <Button
              variant="default"
              className="w-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </DialogTrigger>

      {/*the product detail dialog content*/}
      <DialogContent className="w-full max-w-4xl mx-auto p-6 max-h-[90vh] overflow-y-auto">

      <ProductModal item={{ ...item, thumbnails: item.thumbnails ?? [item.imageUrl, item.imageUrl, item.imageUrl] }} />

      </DialogContent>

    </Dialog>
  );
};

export default ShopItemCard;
