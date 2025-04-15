// import { LucideIcon, TvIcon, TagsIcon, HomeIcon, DumbbellIcon, BookIcon, HeartIcon, Gamepad2Icon, DogIcon } from 'lucide-react';

// export interface Category {
//   value: string;
//   label: string;
//   icon: LucideIcon;
// }

// export const categories: Category[] = [
//   { value: 'electronics', label: 'Electronics', icon: TvIcon },
//   { value: 'clothes', label: 'Clothes', icon: TagsIcon },
//   { value: 'home-garden', label: 'Home & Garden', icon: HomeIcon },
//   { value: 'sports', label: 'Sports & Outdoors', icon: DumbbellIcon },
//   { value: 'books', label: 'Books', icon: BookIcon },
//   { value: 'beauty', label: 'Beauty & Health', icon: HeartIcon },
//   { value: 'toys', label: 'Toys & Games', icon: Gamepad2Icon },
//   { value: 'pets', label: 'Pet Supplies', icon: DogIcon },
// ];


import { LucideIcon, TvIcon, TagsIcon, HomeIcon, DumbbellIcon, BookIcon, HeartIcon, Gamepad2Icon, DogIcon } from 'lucide-react';

export interface Category {
  value: string;
  label: string;
  icon: LucideIcon;
  subcategories: { value: string; label: string }[];
}

export const categories: Category[] = [
  {
    value: 'electronics',
    label: 'Electronics',
    icon: TvIcon,
    subcategories: [
      { value: 'laptops', label: 'Laptops' },
      { value: 'mobiles', label: 'Mobiles' },
      { value: 'cameras', label: 'Cameras' },
      { value: 'tvs', label: 'TVs' },
    ],
  },
  {
    value: 'clothes',
    label: 'Clothes',
    icon: TagsIcon,
    subcategories: [
      { value: 'men', label: 'Men' },
      { value: 'women', label: 'Women' },
      { value: 'children', label: 'Children' },
    ],
  },
  {
    value: 'home-garden',
    label: 'Home & Garden',
    icon: HomeIcon,
    subcategories: [
      { value: 'furniture', label: 'Furniture' },
      { value: 'outdoor', label: 'Outdoor' },
      { value: 'kitchen', label: 'Kitchen' },
      { value: 'bedding', label: 'Bedding' },
    ],
  },
  {
    value: 'sports',
    label: 'Sports & Outdoors',
    icon: DumbbellIcon,
    subcategories: [
      { value: 'fitness', label: 'Fitness' },
      { value: 'outdoor', label: 'Outdoor' },
      { value: 'team-sports', label: 'Team Sports' },
      { value: 'water-sports', label: 'Water Sports' },
    ],
  },
  {
    value: 'books',
    label: 'Books',
    icon: BookIcon,
    subcategories: [
      { value: 'fiction', label: 'Fiction' },
      { value: 'non-fiction', label: 'Non-Fiction' },
      { value: 'children', label: 'Children' },
      { value: 'comics', label: 'Comics' },
    ],
  },
  {
    value: 'beauty',
    label: 'Beauty & Health',
    icon: HeartIcon,
    subcategories: [
      { value: 'skincare', label: 'Skincare' },
      { value: 'makeup', label: 'Makeup' },
      { value: 'haircare', label: 'Haircare' },
      { value: 'wellness', label: 'Wellness' },
    ],
  },
  {
    value: 'toys',
    label: 'Toys & Games',
    icon: Gamepad2Icon,
    subcategories: [
      { value: 'action-figures', label: 'Action Figures' },
      { value: 'puzzles', label: 'Puzzles' },
      { value: 'board-games', label: 'Board Games' },
      { value: 'educational', label: 'Educational' },
    ],
  },
  {
    value: 'pets',
    label: 'Pet Supplies',
    icon: DogIcon,
    subcategories: [
      { value: 'dogs', label: 'Dogs' },
      { value: 'cats', label: 'Cats' },
      { value: 'fish', label: 'Fish' },
    ],
  },
];

