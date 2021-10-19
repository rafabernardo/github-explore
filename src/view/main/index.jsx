import React, { useEffect, useState } from 'react'
import { useGetRepositories } from '../../hooks/useSearch'
import RepositoryItem from '../../components/repository-item'
import SearchInput from '../../components/search-input'
import styles from './styles.css'
import { useDebounce } from 'use-debounce'

const Main = () => {
  const [test, setTest] = useState('')
  const [searchResult] = useDebounce(test, 1500)

  const { data, isLoading, isIdle } = useGetRepositories(searchResult)

  if (isLoading && !isIdle) {
    return <div>...</div>
  }

  const handleChange = (event) => {
    const { value } = event.target
    setTest(value)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Repositories</h1>
      <SearchInput onChange={handleChange} />
      {data?.items?.map((item) => (
        <RepositoryItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Main
