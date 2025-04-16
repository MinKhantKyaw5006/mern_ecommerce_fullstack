import { DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { StarIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassPlusIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
//import { Dialog } from "@/components/ui/dialog"; // Optional modal/dialog

type ProductModalProps = {
  item: {
    name: string;
    description: string;
    stock: string;
    rating: number;
    oldprice?: number;
    price: number;
    imageUrl: string;
    thumbnails?: string[];
  };
};

const ProductModal = ({ item }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(0); // Start from 0
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null); // Zoom modal state

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 0 ? q - 1 : 0));

  useEffect(() => {
    if (!api) return;
    api.scrollTo(selectedIndex);
  }, [selectedIndex, api]);

  return (
    <DialogContent className="max-w-4xl p-6 max-h-[90vh] overflow-y-auto">
      <h2 className="text-2xl font-bold text-gray-900">{item.name}</h2>

      <div className="flex justify-between items-center mt-1">
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-gray-700">Brand:</span> Sony
        </p>
        <div className="flex items-center text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(item.rating) ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-1 text-sm text-gray-600">({item.rating})</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-6">
        {/* Left - Images */}
        <div className="flex flex-col w-full md:w-[280px] shrink-0">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {(item.thumbnails ?? [item.imageUrl]).map((thumb, i) => (
                <CarouselItem key={i}>
                  <div className="relative w-full h-[240px] overflow-hidden rounded-xl">
                    <img
                      src={thumb}
                      alt={`Product Image ${i}`}
                      className="w-full h-full object-cover"
                    />
                    <MagnifyingGlassPlusIcon
                      onClick={() => setZoomedImage(thumb)}
                      className="absolute top-2 right-2 h-6 w-6 text-white bg-black/50 rounded-full p-1 cursor-pointer"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Thumbnails */}
          <div className="flex gap-2 mt-4 flex-wrap">
            {(item.thumbnails ?? [item.imageUrl]).map((thumb, i) => (
              <img
                key={i}
                src={thumb}
                className={`w-16 h-16 object-cover rounded-lg border cursor-pointer ${
                  selectedIndex === i ? "border-black" : "border-gray-200"
                }`}
                onClick={() => setSelectedIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Right - Info */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            {item.oldprice && (
              <span className="text-md text-gray-500 line-through">${item.oldprice}</span>
            )}
            <span className="text-2xl font-bold text-gray-900">${item.price}</span>
          </div>

          <span className="text-green-600 font-medium text-sm">{item.stock}</span>
          <p className="text-sm text-gray-600 text-justify ">{item.description}</p>

          

          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            <div className="flex items-center border py-2 rounded-lg">
              <button onClick={decrement} className="text-xl ">
                -
              </button>
              <span className="px-3">{quantity}</span>
              <button onClick={increment} className="text-xl ">
                +
              </button>
            </div>
            <Button className="rounded-full w-full md:w-auto">Add to Cart</Button>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
        >
          <img
            src={zoomedImage}
            alt="Zoomed Product"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </DialogContent>
  );
};

export default ProductModal;
