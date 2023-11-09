import { useState } from 'react';

import css from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [searchParam, setSearchParam] = useState('');

  const onInputChange = evt => {
    const param = evt.currentTarget.value;
    setSearchParam(param.toLowerCase());
  };

  const onFormChange = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchPhoto = form.elements.searchParam.value;

    if (searchPhoto.trim()) {
      onSubmit(searchParam);
      setSearchParam('');
    }
    form.reset();
  };

  return (
    <header className={css.Searchbar}>
      <form onSubmit={onFormChange} className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={onInputChange}
          name="searchParam"
          value={searchParam}
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
