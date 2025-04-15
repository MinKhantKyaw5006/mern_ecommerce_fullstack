import bannerImg from "@/assets/banner1.png";
import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ShopItemCard = () => {
  const item = {
    name: "Sample Product",
    description: "This is a short description of the item.",
    price: 49.99,
    imageUrl: bannerImg,
  };

  return (
    <Card className="w-[250px] shadow-md rounded-md overflow-hidden border border-gray-200">
      {/* Card Header - Item Image */}
      <CardHeader className="p-0">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-[200px] object-cover"
        />
      </CardHeader>

      {/* Card Content - Item Name and Price */}
      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
        <span className="text-xl font-bold text-gray-900">${item.price}</span>
      </CardContent>

      {/* Card Footer - Add to Cart Button */}
      <CardFooter className="p-4">
        <Button variant="outline" className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ShopItemCard;
