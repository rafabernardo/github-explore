import React, { useState } from 'react'
import ReactLoading from 'react-loading'
import { useDebounce } from 'use-debounce'

import RepositoryItem from '../../components/repository-item'
import SearchInput from '../../components/search-input'
import { useGetRepositories } from '../../hooks/useSearch'

import styles from './styles.css'

const Main = () => {
  const [test, setTest] = useState('')
  const [searchResult] = useDebounce(test, 1500)

  const { data, isLoading, isIdle } = useGetRepositories(searchResult)

  const handleChange = (event) => {
    const { value } = event.target
    setTest(value)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Repositories</h1>
      <SearchInput onChange={handleChange} />
      {isLoading && !isIdle ? (
        <div className={styles.loading}>
          <ReactLoading
            type='bubbles'
            color='red'
            height='100px'
            width='100px'
          />
        </div>
      ) : (
        data?.items?.map((item) => (
          <RepositoryItem key={item.id} name={item.name} />
        ))
      )}
    </div>
  )
}

export default Main
