import type { Picture } from './picture';
import type { Price } from './price';

export type DetailsProduct = {
  id: string;
  name: string;
  description: string;
  info: string;
  details: string;
  like: boolean;
  picture: Picture;
  price: Price;
};
