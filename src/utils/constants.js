import cart from '../assets/images/link-to-cart.svg';
import profile from '../assets/images/link-to-profile.svg';

export const BASE_URL = 'http://localhost:3006/';

export const navLinks = [
  {
    id: 1,
    to: '/',
    img: cart,
    imgAlt: 'Cart',
  },
  {
    id: 2,
    to: '/',
    img: profile,
    imgAlt: 'Profile',
  }
]