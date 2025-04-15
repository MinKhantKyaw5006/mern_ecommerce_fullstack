import { Link, useLocation } from 'react-router-dom';
import { categories } from '@/constants/categories';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const CategoryNav = () => {
  const location = useLocation();
  const currentCategory = location.pathname.split('/')[1];

  return (
    <nav className="flex flex-wrap items-center gap-8 text-sm font-medium text-gray-700">
      {categories.map(({ value, label, icon: Icon, subcategories }) => {
        const isActive = currentCategory === value;

        return subcategories && subcategories.length > 0 ? (
          <DropdownMenu key={value}>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-2 transition hover:text-[#63b3ed] ${
                  isActive ? 'text-blue-600 font-semibold underline' : ''
                }`}
              >
                <Icon className="w-5 h-5 text-gray-700" />
                {label}
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent side="bottom" align="start" className="w-48">
              {subcategories.map((sub) => (
                <DropdownMenuItem asChild key={sub.value}>
                  <Link
                    to={`/${value}/${sub.value}`}
                    className={`w-full text-gray-700 hover:text-[#63b3ed] flex items-center gap-2 ${
                      currentCategory === value && location.pathname.split('/')[2] === sub.value
                        ? 'text-blue-600 font-semibold'
                        : ''
                    }`}
                  >
                    {/* Subcategory icon */}
                    {sub.icon && <sub.icon className="w-4 h-4 mr-2 text-gray-700" />}
                    {sub.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={value}
            to={`/${value}`}
            className={`flex items-center gap-2 transition hover:text-[#63b3ed] ${
              isActive ? 'text-blue-600 font-semibold underline' : ''
            }`}
          >
            <Icon className="w-5 h-5 text-gray-700" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default CategoryNav;
