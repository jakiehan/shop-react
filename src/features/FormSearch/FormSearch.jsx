import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash/function';
import styles from './Form.module.scss'
import { setSearch } from './formSearchSlice';

const FormSearch = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const debounceHandleChange = useMemo(
    () => debounce((val) => {
    dispatch(setSearch(val));
  }, 500), [])

  const handleChange = (e) => {
    setValue(e.target.value);
    debounceHandleChange(e.target.value);
  }

  return (
    <form
      className={styles.form}
      name="form"
      onSubmit={handleSubmit}
    >
      <input
        className={styles.input}
        type="search"
        name="search"
        placeholder="Search products"
        onChange={handleChange}
        value={value}
      />
      <svg className={styles.searchIcon}>
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" />
      </svg>
    </form>
  )
}

export default FormSearch;
