
import ShopItemCard from "@/components/Home/ShopItemCard";
import { Button } from "@/components/ui/button";

// src/pages/Home.tsx
const Home = () => {
    return (
    <>
  
      <div className="">

        <h1 className="text-black">Welcome to Home Page!!</h1>
        <ShopItemCard/>

      </div>
      <Button>Click for more</Button>
    </>
    );
  };
  
  export default Home;
  