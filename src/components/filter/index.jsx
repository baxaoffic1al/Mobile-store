import { useState } from 'react';
import styles from './filter.module.scss';

function Filter({ products, setFilteredProducts }) {
  const [search, setSearch] = useState('')
  const [selectedOption, setSelectedOption] = useState('choose');
  const [fromPrice, setFromPrice] = useState('');
  const [toPrice, setToPrice] = useState('');

  // qidiruv

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    const filteredBySearch = products.filter((product) =>
      product.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredProducts(filteredBySearch);
  };

  // tanlov filter
  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    filterProducts(selectedValue);
  };
  const handleFromPrice = (e) => {
    const inputValue = e.target.value;
    const regex = /^[0-9]*$/;

    if (inputValue === '' || regex.test(inputValue)) {
      setFromPrice(inputValue);
      filterByPrice(inputValue, toPrice);
    }
  };

  const handleToPrice = (e) => {
    const inputValue = e.target.value;
    const regex = /^[0-9]*$/;

    if (inputValue === '' || regex.test(inputValue)) {
      setToPrice(inputValue);
      filterByPrice(fromPrice, inputValue);
    }
  };

  // narx bo'yicha
  const filterByPrice = (from, to) => {
    const filteredByPrice = products.filter(
      (product) =>
        (from === '' || parseFloat(product.price) >= parseFloat(from)) &&
        (to === '' || parseFloat(product.price) <= parseFloat(to))
    );
    setFilteredProducts(filteredByPrice);
  };
  const filterProducts = (selectedValue) => {
    setFromPrice('')
    setToPrice('')
    if (selectedValue === 'choose') {
      setFilteredProducts(products);
    } else if (selectedValue === 'cheap') {
      const filteredByPrice = [...products].sort((a, b) => a.price - b.price);
      setFilteredProducts(filteredByPrice);
    } else if (selectedValue === 'expensive') {
      const filteredByPrice = [...products].sort((a, b) => b.price - a.price);
      setFilteredProducts(filteredByPrice);
    } else if (selectedValue === 'az') {
      const sortedAZ = [...products].sort((a, b) => a.title.localeCompare(b.title));
      setFilteredProducts(sortedAZ);
    } else if (selectedValue === 'za') {
      const sortedZA = [...products].sort((a, b) => b.title.localeCompare(a.title));
      setFilteredProducts(sortedZA);
    } else {
      console.error('error');
    }
  };

  return (
    <section className={styles.filter}>
      <input
        type="text"
        placeholder='Search...'
        value={search}
        onChange={handleSearch}
        className={styles.filter__search}
      />
      <div className={styles.filter__box}>
        <label className={styles.filter__price}>
          $
          <input
            name='fromPrice'
            value={fromPrice}
            onChange={handleFromPrice}
            type="text"
            placeholder="from"
            className={styles.filter__price_input}
          />
          <input
            name='toPrice'
            value={toPrice}
            onChange={handleToPrice}
            type="text"
            placeholder="to"
            className={styles.filter__price_input}
          />
        </label>
        <select
          className={styles.filter__select}
          onChange={handleSelect}
          value={selectedOption}
        >
          <option value="choose" className={styles.filter__option}>
            Choose
          </option>
          <option value="cheap" className={styles.filter__option}>
            Cheap
          </option>
          <option value="expensive" className={styles.filter__option}>
            Expensive
          </option>
          <option value="az" className={styles.filter__option}>
            A-Z
          </option>
          <option value="za" className={styles.filter__option}>
            Z-A
          </option>
        </select>
      </div>
    </section>
  );
}

export default Filter;
