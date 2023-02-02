import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import { clearDetails, loadDetailsInfo } from './productDetailsSlice';
import { selectDetails } from './productDetailsSelect';

export const useProductDetails = (id: string | undefined) => {
  const dispatch = useAppDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(loadDetailsInfo(id));
    }

    return () => {
      dispatch(clearDetails());
    };
  }, [id, dispatch]);

  return details;
};
