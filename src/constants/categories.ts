import { LucideIcon, TvIcon, TagsIcon, HomeIcon, DumbbellIcon, BookIcon, HeartIcon, Gamepad2Icon, DogIcon } from 'lucide-react';

export interface Category {
  value: string;
  label: string;
  icon: LucideIcon;
}

export const categories: Category[] = [
  { value: 'electronics', label: 'Electronics', icon: TvIcon },
  { value: 'clothes', label: 'Clothes', icon: TagsIcon },
  { value: 'home-garden', label: 'Home & Garden', icon: HomeIcon },
  { value: 'sports', label: 'Sports & Outdoors', icon: DumbbellIcon },
  { value: 'books', label: 'Books', icon: BookIcon },
  { value: 'beauty', label: 'Beauty & Health', icon: HeartIcon },
  { value: 'toys', label: 'Toys & Games', icon: Gamepad2Icon },
  { value: 'pets', label: 'Pet Supplies', icon: DogIcon },
];
