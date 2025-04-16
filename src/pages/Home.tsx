import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ShopItemCard from "@/components/Home/ShopItemCard";
import { shopItems, ShopItem } from "@/constants/shopitems";

const Home = () => {
  return (
    <section className="container mx-auto mt-4 mb-8 ">
      {/* Best Popular Products */}
      <div>
        <div className="">
          <h1 className="text-3xl font-bold text-gray-900">
            Best Popular Products
          </h1>
          <h4 className="text-sm md:text-base font-medium text-gray-600 mt-1">
            Don't miss out the latest offers until the end of March
          </h4>
        </div>

        <div className="relative w-full">
          <Carousel
            opts={{
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="!ml-0">
              {shopItems.map((item: ShopItem, index: number) => (
                <CarouselItem
                  key={index}
                  className="!pl-0 basis-[220px] shrink-0 grow-0 mt-4 mb-10"
                >
                  <ShopItemCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/70 hover:bg-white shadow-md" />
            <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/70 hover:bg-white shadow-md" />
          </Carousel>
        </div>
      </div>

      {/* New Items */}
      <div className="">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-900">New Items</h1>
          <h4 className="text-sm md:text-base font-medium text-gray-600 mt-1">
            Recently added fresh products just for you
          </h4>
        </div>

        <div className="relative w-full">
          <Carousel
            opts={{
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="!ml-0">
              {shopItems.map((item: ShopItem, index: number) => (
                <CarouselItem
                  key={index}
                  className="!pl-0 basis-[220px] shrink-0 grow-0 mt-4 mb-10"
                >
                  <ShopItemCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/70 hover:bg-white shadow-md" />
            <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/70 hover:bg-white shadow-md" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Home;
