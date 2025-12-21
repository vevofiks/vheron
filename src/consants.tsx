
import { Product, NavLink } from './types';

export const COLORS = {
  sage: '#a3b18a',
  cream: '#fefae0',
  forest: '#588157',
  darkForest: '#3a5a40',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home Page', href: '#', sublabel: 'Explore' },
  { label: 'Services', href: '#services', sublabel: 'Our' },
];

export const RIGHT_NAV_LINKS: NavLink[] = [
  { label: 'Cart', href: '#cart', sublabel: "Let's" },
  { label: 'Sign In', href: '#signin', sublabel: "Let's" },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Essence No. 1',
    collection: 'Signature Series',
    price: '$180',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
    description: 'A delicate blend of bergamot and white musk.'
  },
  {
    id: '2',
    name: 'Midnight Bloom',
    collection: 'Nocturnal Collection',
    price: '$210',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
    description: 'Rich jasmine intertwined with deep patchouli notes.'
  },
  {
    id: '3',
    name: 'Solar Dew',
    collection: 'Luminous Line',
    price: '$165',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
    description: 'Fresh citrus paired with warm cedarwood undertones.'
  },
];
