import React from 'react';
import styled from './ListProducts.module.scss';
import { useListProducts } from './useListProducts';
import Card from '../../components/Card/Card';
import Preloader from '../../components/Preloader/Preloader';
import RequestMessage from '../../components/RequestMessage/RequestMessage';

const ListProducts = () => {

  const [products, { status, error }] = useListProducts();
  
  return (
    <>
      {status === 'rejected' && <RequestMessage msg={error} />}
      {status === 'loading' && <Preloader />}
      {status === 'received' &&
        (products.length !== 0 ? (
          <ul className={styled.list}>
            {products.length !== 0 &&
              products.map((product) => (
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

export default ListProducts;
