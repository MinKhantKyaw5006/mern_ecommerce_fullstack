import bannerImg from "@/assets/banner1.png";
import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon, HeartIcon } from "@heroicons/react/20/solid"; // Importing arrow and heart icons

const ShopItemCard = () => {
  const item = {
    name: "Basket of Veges",
    description: "Fresh from local market",
    stock: 'In Stock',
    rating: 4.7,
    oldprice: 89.99,
    price: 49.99,
    imageUrl: bannerImg,
  };

  return (
    <div>
      <Card className="group w-[200px] rounded-2xl overflow-hidden border border-gray-300 shadow-sm transition-all duration-300 hover:shadow-2xl hover:scale-105">
        
        {/* Card Header - Item Image */}
        <CardHeader className="p-0 h-[140px] relative"> {/* Added relative for positioning the image */}
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110" 
          />
          
          {/* Overlay buttons */}
          <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            {/* Detail Button - Arrow Right Icon */}
            <Button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition duration-300">
              <ArrowRightIcon className="h-5 w-5 text-gray-800" />
            </Button>
            
            {/* Love Button - Heart Icon */}
            <Button 
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition duration-300 transform translate-y-[-20px] group-hover:translate-y-[2px]"
            >
              <HeartIcon className="h-5 w-5 text-red-500" />
            </Button>
          </div>
        </CardHeader>

        {/* Card Content - Item Name, Description, Stock, Rating, and Price */}
        <CardContent className="m-0 space-y-0.5">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h3>
          {/* <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p> */}
          
          {/* Stock */}
          <p className="text-sm text-gray-600">{item.stock}</p>

          {/* Rating */}
          <div className="flex items-center text-yellow-500">
            {/* Stars */}
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className={`h-5 w-5 ${i < Math.floor(item.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
            ))}
            {/* Rating Number */}
            <span className="ml-2 text-sm text-gray-600">({item.rating})</span>
          </div>

          {/* Price */}
          {item.oldprice && (
            <span className="text-sm text-gray-500 line-through">${item.oldprice}</span>
          )}
          <span className="text-xl font-bold text-gray-900">${item.price}</span>
        </CardContent>

        {/* Card Footer - Add to Cart Button */}
        <CardFooter className="px-4 py-2">
          <Button
            variant="default"
            className="w-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Add to Cart
          </Button>
        </CardFooter>

      </Card>
    </div>
  );
};

export default ShopItemCard;
