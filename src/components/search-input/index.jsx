import PropTypes from 'prop-types'
import React from 'react'

import SearchIcon from '../../assets/ic-search.svg'

import styles from './styles.css'

const SearchInput = ({ onChange }) => {
  return (
    <div className={styles.container}>
      <svg viewBox={SearchIcon.viewBox} className={styles.searchIcon}>
        <use xlinkHref={`#${SearchIcon.id}`} />
      </svg>
      <input type='text' className={styles.input} onChange={onChange} />
    </div>
  )
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default SearchInput
