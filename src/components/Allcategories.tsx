
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { categories } from "@/constants/categories";

const Allcategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleSelect = (value: string) => {
    setSelectedCategory(value);
    navigate(`/${value}`);
  };

  const selectedCategoryDetails = categories.find(category => category.value === selectedCategory);

  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger className="w-[180px] bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 flex items-center gap-2">
        {selectedCategoryDetails ? (
          <selectedCategoryDetails.icon className="w-4 h-4 text-white" />
        ) : (
          <Menu className="w-4 h-4 text-white" />
        )}
        <span className="text-white whitespace-nowrap overflow-hidden text-ellipsis">
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
