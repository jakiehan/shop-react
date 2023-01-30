import React, { useMemo, useState } from 'react';
import { useAppDispatch } from 'store';
import { debounce } from 'utils/debounce';
import { setSearch } from './formSearchSlice';

type HandleSubmit = React.FormEventHandler<HTMLFormElement>;
type HandleChange = React.ChangeEventHandler<HTMLInputElement>;

export const useFormSearch = (): [string, HandleSubmit, HandleChange] => {

  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit: HandleSubmit = (e) => {
    e.preventDefault();
  };

  const debounceHandleChange = useMemo(
    () => debounce((val) => {
        dispatch(setSearch(val));
      }, 500),
    []
  );

  const handleChange: HandleChange = (e) => {
    setValue(e.target.value);
    debounceHandleChange(e.target.value);
  };

  return [value, handleSubmit, handleChange];
};
