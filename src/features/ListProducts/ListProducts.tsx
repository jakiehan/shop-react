import React from 'react';
import { Card } from 'components/Card';
import { Preloader } from 'components/Preloader';
import { RequestMessage } from 'components/RequestMessage';
import { useListProducts } from './useListProducts';
import styled from './ListProducts.module.scss';

export const ListProducts = () => {

  const [products, { loading, loaded, error }] = useListProducts();
  const hasProducts = products.length !== 0;

  return (
    <>
      {error && <RequestMessage msg={error} />}
      {loading && <Preloader />}
      {loaded && !error &&
        (hasProducts ? (
          <ul className={styled.list}>
            {hasProducts &&
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
