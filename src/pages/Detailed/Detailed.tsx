import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetails } from 'features/ProductDetails';

export const Detailed = () => {
  const { id } = useParams();

  return <ProductDetails id={id} />;
};
