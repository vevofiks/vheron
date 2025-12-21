
export interface Product {
  id: string;
  name: string;
  collection: string;
  price: string;
  image: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
  sublabel?: string;
}
