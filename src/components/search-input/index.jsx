import React from 'react'
import SearchIcon from '../../assets/ic-search.svg'
import styles from './styles.css'

const SearchInput = () => {
  return (
    <div className={styles.container}>
      <svg viewBox={SearchIcon.viewBox} className={styles.searchIcon}>
        <use xlinkHref={`#${SearchIcon.id}`} />
      </svg>
      <input type="text" className={styles.input} />
    </div>
  )
}

export default SearchInput
