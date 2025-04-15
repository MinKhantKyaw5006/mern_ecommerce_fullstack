
import ShopItemCard from "@/components/Home/ShopItemCard";


// src/pages/Home.tsx
const Home = () => {
    return (
      <section className="container mx-auto mt-2 mb-2">
        <div>
          <h1>Best Popular Items</h1>
          <h4>Don't miss out</h4>
        </div>
      <div className="  flex items-center justify-betweenpx-2 py-10 rounded-lg shadow mt-2 ">
        <ShopItemCard/>


      </div>
      <div className="mb-10 mt-10">
          class
        </div>
    </section>
    );
  };
  
  export default Home;
  