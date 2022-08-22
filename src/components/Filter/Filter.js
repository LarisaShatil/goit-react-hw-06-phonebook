import PropTypes from 'prop-types';
import s from './Filter.module.css';

import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setFilter } from '../../redux/filterSlice';

function Filter() {
  const filterName = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getFilteredContacts = (e) => {
    const name = e.currentTarget.value;
    dispatch(setFilter(name));
  };

  return (
    <>
      <label className={s.label}>🔎 Find by name 
        <input
          className={s.input}
          type="text"
          name="filter"
          value={filterName}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={getFilteredContacts}
        />
      </label>
    </>
  )
};

Filter.propTypes = {
  filterName: PropTypes.string
};

export default Filter;