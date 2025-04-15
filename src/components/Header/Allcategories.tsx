import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { categories } from "@/constants/categories";

const Allcategories = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the category from the current path (e.g., "/clothes" => "clothes")
  const currentPath = location.pathname.split("/")[1]; 
  const selectedCategory = categories.find(cat => cat.value === currentPath)?.value || '';
  // Find the category in the 'categories' array that matches the current path
  // If no match is found, set selectedCategory to an empty string

   // Handle category selection from the dropdown
  const handleSelect = (value: string) => {
    navigate(`/${value}`);
  };

  // Get the details of the selected category (icon, label) to display in the dropdown trigger
  const selectedCategoryDetails = categories.find(category => category.value === selectedCategory);

  return (
    <Select onValueChange={handleSelect} value={selectedCategory}>
       {/* The dropdown trigger button (shows the selected category) */}
      <SelectTrigger className="w-[180px] bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 flex items-center gap-2">

       {/* Show the category icon (if available) or the default menu icon */}
        {selectedCategoryDetails ? (
          <selectedCategoryDetails.icon className="w-4 h-4 text-white" />
        ) : (
          <Menu className="w-4 h-4 text-white" />
        )}
        <span className="text-white whitespace-nowrap overflow-hidden text-ellipsis">

          {/* Display the label of the selected category or "All Categories" if no category is selected */}
          {selectedCategoryDetails ? selectedCategoryDetails.label : 'All Categories'}
        </span>
      </SelectTrigger>

      <SelectContent>
        {categories.map(({ value, label, icon: Icon }) => (
          <SelectItem key={value} value={value}>
            <span className="flex items-center gap-2">
              <Icon className={`w-4 h-4 ${selectedCategory === value ? 'text-white' : ''}`} />
              {label}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Allcategories;
