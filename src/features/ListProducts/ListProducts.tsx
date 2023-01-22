import React from 'react';
import { Card } from 'components/Card';
import { Preloader } from 'components/Preloader';
import { RequestMessage } from 'components/RequestMessage';
import { useListProducts } from './useListProducts';
import styled from './ListProducts.module.scss';

export const ListProducts = () => {

  const [products, { status, error }] = useListProducts();

  return (
    <>
      {status === 'rejected' && <RequestMessage msg={error} />}
      {status === 'loading' && <Preloader />}
      {status === 'received' &&
        (products.length !== 0 ? (
          <ul className={styled.list}>
            {products.length !== 0 &&
              products.map(product => (
                <li key={product.id}>
                  <Card cardInfo={product} />
                </li>
              ))}
          </ul>
        ) : (
          <RequestMessage msg="nothing found" />
        ))}
    </>
  );
};
