import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import SelectLocation from './SelectLocation';
import SearchBar from './SearchBar';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ShoppingCart } from "lucide-react";



const Header = () => {
  const [selectedLocation, setSelectedLocation] = React.useState("");

  return (
    <>
      {/*Header Line*/}
      <header className="header">
          <div className="container mx-auto text-center">
            <p className="mb-0 mt-0 ">
              Exciting new <span className="font-bold">updates</span> coming soon – stay tuned for an amazing experience!
            </p>
          </div>
      </header>

      {/*second section with logo,location,search */}
      <section className="container mx-auto mt-2 mb-2 bg-white  rounded-lg shadow">
        <div className="flex flex-row items-center justify-center gap-8 text-center">

        {/*logo*/}
        <div className="flex-none p-2">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8 w-auto shrink-0" />
          </Link>
        </div>


          {/*selectlocation button*/}
          <SelectLocation
            selectedLocation={selectedLocation}
            onSelectLocation={(loc) => setSelectedLocation(loc)}
          />

          {/*SearchBar*/}
          <SearchBar/>

          {/*Profile Avatar*/}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/*price show*/}
          <span>3.49$</span>


          {/* Shopping cart with badge */}
          <div className="relative">
            <button
              className="p-2 rounded text-gray-700 hover:text-blue-400 focus:outline-none active:scale-95 transition-all duration-150"
              onClick={() => console.log("Cart clicked")}
            >
              <ShoppingCart className="w-8 h-8" />
            </button>

            {/* Badge */}
            <span className="absolute top-1 right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-400 rounded-full">
              12
            </span>
          </div>




        </div>
      </section>
    </>
  );
};

export default Header;
