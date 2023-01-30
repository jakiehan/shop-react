import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { useFormSearch } from './useFormSearch';
import styles from './Form.module.scss';

export const FormSearch = () => {

  const [value, handleSubmit, handleChange] = useFormSearch();

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
      <IoSearchSharp className={styles.searchIcon} />
    </form>
  );
};

