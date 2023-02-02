import type { Price } from './price';
import type { Picture } from './picture';

export type Product = {
  id: string;
  name: string;
  description: string;
  like: boolean;
  picture: Picture;
  price: Price;
};
