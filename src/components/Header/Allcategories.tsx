import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { categories } from "@/constants/categories";
import { useMemo } from 'react';

const Allcategories = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathParts = location.pathname.split("/"); // ['', 'main', 'sub']
  const currentCategory = pathParts[1];
  const currentSubCategory = pathParts[2] || '';

  const selectedCategory = categories.find(cat => cat.value === currentCategory);
  const selectedSubCategory = useMemo(() => {
    return selectedCategory?.subcategories?.find(sub => sub.value === currentSubCategory);
  }, [selectedCategory, currentSubCategory]);

  const handleSelect = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Dropdown Menu Button */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 w-[180px] flex items-center gap-2">
            {selectedCategory ? (
              <selectedCategory.icon className="w-4 h-4 text-white" />
            ) : (
              <Menu className="w-4 h-4 text-white" />
            )}
            <span className="text-white whitespace-nowrap overflow-hidden text-ellipsis">
              {selectedCategory ? selectedCategory.label : 'All Categories'}
            </span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Categories</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {categories.map(({ value, label, icon: Icon, subcategories }) => (
            <DropdownMenuGroup key={value}>
              {subcategories && subcategories.length > 0 ? (
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:text-[#63b3ed] flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {label}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {subcategories.map((sub) => (
                        <DropdownMenuItem
                          key={sub.value}
                          onClick={() => handleSelect(`${value}/${sub.value}`)}
                          className="hover:text-[#63b3ed] flex items-center gap-2"
                        >
                          {/* Show subcategory icon */}
                          {sub.icon && <sub.icon className="w-4 h-4 mr-2" />}
                          {sub.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              ) : (
                <DropdownMenuItem
                  onClick={() => handleSelect(value)}
                  className="hover:text-[#63b3ed] flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </DropdownMenuItem>
              )}
            </DropdownMenuGroup>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Subcategory Display */}
      <div className="px-3 py-2 text-sm bg-gray-100 text-gray-800 rounded-md shadow-sm whitespace-nowrap flex items-center">
        {selectedSubCategory ? (
          <>
            {/* Show subcategory icon if selected */}
            {selectedSubCategory.icon && <selectedSubCategory.icon className="w-4 h-4 mr-2" />}
            {selectedSubCategory.label}
          </>
        ) : (
          'Sub-category: none'
        )}
      </div>


    </div>
  );
};

export default Allcategories;
