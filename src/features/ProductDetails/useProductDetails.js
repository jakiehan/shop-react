import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearDetails, loadDetailsInfo, selectDetails } from './productDetailsSlice';

export const useProductDetails = (id) => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadDetailsInfo(id));

    return () => {
      dispatch(clearDetails());
    }
  }, [id, dispatch])

  return details;
}

