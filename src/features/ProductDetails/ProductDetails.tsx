import React from 'react';
import { Like } from 'components/Like';
import { CounterBtn } from 'components/CounterBtn';
import { Description } from 'components/Description';
import { RequestMessage } from 'components/RequestMessage';
import { Preloader } from 'components/Preloader';
import { BASE_URL } from 'utils/constants';
import { useProductDetails } from './useProductDetails';
import { PriceCounter } from '../PriceCounter';
import styles from './ProductDetails.module.scss';

interface ProductDetailsProps {
  id?: string
}

export const ProductDetails = ({ id }: ProductDetailsProps) => {

  const { currentProduct, status, error } = useProductDetails(id);

  return (
    <>
      {status === 'rejected' && <RequestMessage msg={error} />}
      {status === 'loading' && <Preloader />}
      {currentProduct && (
        <section className={styles.detailed}>
          <img
            className={styles.img}
            src={`${BASE_URL}${currentProduct.picture.path}`}
            alt={currentProduct.name}
          />
          <div className={styles.productInfo}>
            <div className={styles.productAbout}>
              <Description
                textTitle={currentProduct.name}
                textDescription={currentProduct.info}
              />
              <Description
                textTitle={currentProduct.description}
                textDescription={currentProduct.details}
                type="subtitle"
              />
            </div>
            <div className={styles.actionsWrapper}>
              <PriceCounter price={currentProduct.price} />
              <div className={styles.btnWrapper}>
                <Like
                  isActive={currentProduct.like}
                  position="center"
                />
                <CounterBtn
                  value="Add to cart"
                  type="add"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
