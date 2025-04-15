
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShirtIcon,
  TvIcon,
  TagsIcon,
  HomeIcon,
  DumbbellIcon,
  BookIcon,
  HeartIcon,
  Gamepad2Icon,
  CarIcon,
  DogIcon,
  Menu,
} from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
 
} from "@/components/ui/select";

const categories = [
  { value: 'fashion', label: 'Fashion', icon: <ShirtIcon className="w-4 h-4" /> },
  { value: 'electronics', label: 'Electronics', icon: <TvIcon className="w-4 h-4" /> },
  { value: 'clothes', label: 'Clothes', icon: <TagsIcon className="w-4 h-4" /> },
  { value: 'home-garden', label: 'Home & Garden', icon: <HomeIcon className="w-4 h-4" /> },
  { value: 'sports', label: 'Sports & Outdoors', icon: <DumbbellIcon className="w-4 h-4" /> },
  { value: 'books', label: 'Books', icon: <BookIcon className="w-4 h-4" /> },
  { value: 'beauty', label: 'Beauty & Health', icon: <HeartIcon className="w-4 h-4" /> },
  { value: 'toys', label: 'Toys & Games', icon: <Gamepad2Icon className="w-4 h-4" /> },
  { value: 'automotive', label: 'Automotive', icon: <CarIcon className="w-4 h-4" /> },
  { value: 'pets', label: 'Pet Supplies', icon: <DogIcon className="w-4 h-4" /> },
];

const Allcategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleSelect = (value: string) => {
    setSelectedCategory(value);
    navigate(`/${value}`);
  };

  // Find the selected category's icon and label, safely handling undefined cases
  const selectedCategoryDetails = categories.find(category => category.value === selectedCategory);

  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger className="w-[180px] bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 flex items-center gap-2 [&>svg]:text-white">
        {/* Show hamburger icon or selected category icon */}
        {selectedCategoryDetails ? (
          React.cloneElement(selectedCategoryDetails.icon, { className: "w-4 h-4 text-white" })
        ) : (
          <Menu className="w-4 h-4 text-white" />
        )}
        
        <span className="text-white whitespace-nowrap overflow-hidden text-ellipsis">
          {selectedCategoryDetails ? selectedCategoryDetails.label : 'All Categories'}
        </span>
      </SelectTrigger>

      <SelectContent>
        {categories.map(({ value, label, icon }) => (
          <SelectItem key={value} value={value}>
            <span className="flex items-center gap-2">
              {React.cloneElement(icon, {
                className: `w-4 h-4 ${selectedCategory === value ? 'text-white' : ''}`
              })}
              {label}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Allcategories;
