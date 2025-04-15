import HomeBanner from "@/components/HomeBanner";
import { Button } from "@/components/ui/button";

// src/pages/Home.tsx
const Home = () => {
    return (
    <>
  
      <div className="">
        <HomeBanner/>
        <h1 className="text-black">Welcome to Home Page!!</h1>

      </div>
      <Button>Click for more</Button>
    </>
    );
  };
  
  export default Home;
  