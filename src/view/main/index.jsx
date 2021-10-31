import React, { useState, useMemo } from 'react'
import ReactLoading from 'react-loading'
import { useDebounce } from 'use-debounce'

import RepositoryItem from '../../components/repository-item'
import SearchInput from '../../components/search-input'
import useGetRepositories from '../../hooks/useSearch'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'

import styles from './styles.css'

const Main = () => {
  const [test, setTest] = useState('')
  const [searchResult] = useDebounce(test, 1500)
  const { data, isLoading, isIdle, fetchNextPage } = useGetRepositories(searchResult)

  useInfiniteScroll(fetchNextPage)

  const handleChange = (event) => {
    const { value } = event.target
    setTest(value)
  }

  const repositories = useMemo(() => {
    return data?.pages?.flatMap((page) => page.data.items)
  }, [data])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Repositories</h1>
      <SearchInput onChange={handleChange} />
      {isLoading && !isIdle ? (
        <div className={styles.loading}>
          <ReactLoading type='bubbles' color='red' height='100px' width='100px' />
        </div>
      ) : (
        <div className={styles.content}>
          {repositories?.map((item) => (
            <RepositoryItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Main
