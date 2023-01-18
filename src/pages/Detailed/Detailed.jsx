import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../features/ProductDetails/ProductDetails';

const Detailed = () => {
  const { id } = useParams();

  return (
    <ProductDetails id={id} />
  );
};

export default Detailed;

