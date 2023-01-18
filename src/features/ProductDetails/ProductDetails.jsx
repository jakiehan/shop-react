import React from 'react';
import styles from './ProductDetails.module.scss';
import { useProductDetails } from './useProductDetails';
import { BASE_URL } from '../../utils/constants';
import Like from '../../components/Like/Like';
import CounterBtn from '../../components/CounterBtn/CounterBtn';
import Description from '../../components/Description/Description';
import PriceCounter from '../PriceCounter/PriceCounter';
import RequestMessage from '../../components/RequestMessage/RequestMessage';
import Preloader from '../../components/Preloader/Preloader';

const ProductDetails = ({ id }) => {

  const { currentProduct, status, error } = useProductDetails(id);
  const { picture, name, info, description, details, price, like  } = status === 'received' && currentProduct;

  return (
    <>
      {status === 'rejected' && <RequestMessage msg={error} />}
      {status === 'loading' && <Preloader />}
      {status === 'received' && (
        <section className={styles.detailed}>
          <img
            className={styles.img}
            src={`${BASE_URL}${picture.path}`}
            alt={name}
          />
          <div className={styles.productInfo}>
            <div className={styles.productAbout}>
              <Description
                textTitle={name}
                textDescription={info}
              />
              <Description
                textTitle={description}
                textDescription={details}
                type="subtitle"
              />
            </div>
            <div className={styles.actionsWrapper}>
              <PriceCounter price={price} />
              <div className={styles.btnWrapper}>
                <Like
                  isActive={like}
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

export default ProductDetails;
