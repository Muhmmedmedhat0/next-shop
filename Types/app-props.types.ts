export interface AppProps {
  children: React.ReactNode;
}

export interface CategoryItem {
  id: number;
  img: string;
  title: string;
  category: string;
}
export interface CategorieItemProps {
  category: CategoryItem;
}

export interface SliderContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  slideindex: number;
}
export interface Products {
  products?: Product[];
}

export interface Product {
  quantity: number;
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  rate: number;
  count: number;
}

// cart

export interface CartItemType  {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
};
export interface CartContextType {
  cartItems: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}
export interface CartProviderProps {
  children: React.ReactNode;
}