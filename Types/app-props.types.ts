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
export interface CartItem {
  product: Product;
  quantity: number;
}

export type Action =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: Product }
  | { type: "CHANGE_QUANTITY"; payload: { product: Product; quantity: number } }
  | { type: "CLEAR_CART" };

export interface State {
  items: CartItem[];
}

export interface CartContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}
