import PropTypes from 'prop-types'
import React from 'react'

import SearchIcon from '../../assets/ic-search.svg'

import styles from './styles.css'

const SearchInput = ({ onChange, placeholder }) => {
  return (
    <div className={styles.container}>
      <svg viewBox={SearchIcon.viewBox} className={styles['search-icon']}>
        <use xlinkHref={`#${SearchIcon.id}`} />
      </svg>
      <input type='text' className={styles.input} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default SearchInput
