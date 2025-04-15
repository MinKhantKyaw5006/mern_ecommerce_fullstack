import {
    LucideIcon,
    TvIcon,
    TagsIcon,
    HomeIcon,
    DumbbellIcon,
    BookIcon,
    HeartIcon,
    Gamepad2Icon,
    DogIcon,
    LaptopIcon,
    SmartphoneIcon,
    CameraIcon,
    MonitorIcon,
    ShirtIcon,
    BabyIcon,
    SofaIcon,
    UtensilsIcon,
    BedIcon,
    TreePineIcon,
    UsersIcon,
    WavesIcon,
    BookOpenIcon,
    SmileIcon,
    PaletteIcon,
    DropletIcon,
    HeartPulseIcon,
    PuzzleIcon,
    JoystickIcon,
    GraduationCapIcon,
    DogIcon as DogSubIcon,
    CatIcon,
    FishIcon
  } from 'lucide-react';
  
  export interface Subcategory {
    value: string;
    label: string;
    icon: LucideIcon;
  }
  
  export interface Category {
    value: string;
    label: string;
    icon: LucideIcon;
    subcategories: Subcategory[];
  }
  
  export const categories: Category[] = [
    {
      value: 'electronics',
      label: 'Electronics',
      icon: TvIcon,
      subcategories: [
        { value: 'laptops', label: 'Laptops', icon: LaptopIcon },
        { value: 'mobiles', label: 'Mobiles', icon: SmartphoneIcon },
        { value: 'cameras', label: 'Cameras', icon: CameraIcon },
        { value: 'tvs', label: 'TVs', icon: MonitorIcon },
      ],
    },
    {
      value: 'clothes',
      label: 'Clothes',
      icon: TagsIcon,
      subcategories: [
        { value: 'men', label: 'Men', icon: ShirtIcon },
        { value: 'women', label: 'Women', icon: PaletteIcon },
        { value: 'children', label: 'Children', icon: BabyIcon },
      ],
    },
    {
      value: 'home-garden',
      label: 'Home & Garden',
      icon: HomeIcon,
      subcategories: [
        { value: 'furniture', label: 'Furniture', icon: SofaIcon },
        { value: 'outdoor', label: 'Outdoor', icon: TreePineIcon },
        { value: 'kitchen', label: 'Kitchen', icon: UtensilsIcon },
        { value: 'bedding', label: 'Bedding', icon: BedIcon },
      ],
    },
    {
      value: 'sports',
      label: 'Sports & Outdoors',
      icon: DumbbellIcon,
      subcategories: [
        { value: 'fitness', label: 'Fitness', icon: DumbbellIcon },
        { value: 'outdoor', label: 'Outdoor', icon: TreePineIcon },
        { value: 'team-sports', label: 'Team Sports', icon: UsersIcon },
        { value: 'water-sports', label: 'Water Sports', icon: WavesIcon },
      ],
    },
    {
      value: 'books',
      label: 'Books',
      icon: BookIcon,
      subcategories: [
        { value: 'fiction', label: 'Fiction', icon: BookOpenIcon },
        { value: 'non-fiction', label: 'Non-Fiction', icon: BookOpenIcon },
        { value: 'children', label: 'Children', icon: SmileIcon },
        { value: 'comics', label: 'Comics', icon: BookOpenIcon },
      ],
    },
    {
      value: 'beauty',
      label: 'Beauty & Health',
      icon: HeartIcon,
      subcategories: [
        { value: 'skincare', label: 'Skincare', icon: DropletIcon },
        { value: 'makeup', label: 'Makeup', icon: PaletteIcon },
        { value: 'haircare', label: 'Haircare', icon: DropletIcon },
        { value: 'wellness', label: 'Wellness', icon: HeartPulseIcon },
      ],
    },
    {
      value: 'toys',
      label: 'Toys & Games',
      icon: Gamepad2Icon,
      subcategories: [
        { value: 'action-figures', label: 'Action Figures', icon: JoystickIcon },
        { value: 'puzzles', label: 'Puzzles', icon: PuzzleIcon },
        { value: 'board-games', label: 'Board Games', icon: PuzzleIcon },
        { value: 'educational', label: 'Educational', icon: GraduationCapIcon },
      ],
    },
    {
      value: 'pets',
      label: 'Pet Supplies',
      icon: DogIcon,
      subcategories: [
        { value: 'dogs', label: 'Dogs', icon: DogSubIcon },
        { value: 'cats', label: 'Cats', icon: CatIcon },
        { value: 'fish', label: 'Fish', icon: FishIcon },
      ],
    },
  ];
  