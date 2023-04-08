import { useState } from 'react';
import css from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';

export const Searchbar = ({ onSubmit }) => {
  const [imageName, setImageName] = useState('');

  const handleNameChange = event => {
    setImageName(event.currentTarget.value.toLowerCase());
  };

  const onHendleSubmit = event => {
    event.preventDefault();
    onSubmit(imageName);
    event.target.reset();
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onHendleSubmit}>
        <input
          className={css.SearchForm_input}
          type="text"
          name="imageName"
          value={imageName}
          onChange={handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button type="submit" className={css.SearchForm_button}>
          <span className={css.SearchForm_button_label}>
            <BsSearch />
          </span>
        </button>
      </form>
    </header>
  );
};
