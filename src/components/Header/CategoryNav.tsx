import { Link, useLocation } from 'react-router-dom';
import { categories } from '@/constants/categories';

const CategoryNav = () => {
  const location = useLocation();
  const currentCategory = location.pathname.split('/')[1];

  return (
    <nav className="flex flex-wrap items-center gap-12 text-sm font-medium text-gray-700">
      {categories.map(({ value, label, icon: Icon }) => (
        <Link
          key={value}
          to={`/${value}`}
          className={`flex items-center gap-2 transition hover:text-blue-500 ${
            currentCategory === value ? 'text-blue-600 font-semibold underline' : ''
          }`}
        >
          {/* Category Icon */}
          <Icon className="w-5 h-5 text-gray-700" />
          {/* Category Label */}
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default CategoryNav;
