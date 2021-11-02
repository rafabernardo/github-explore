import React, { useState, useMemo } from 'react'
import ReactLoading from 'react-loading'
import { useDebounce } from 'use-debounce'
import Particles from 'react-tsparticles'

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
      <Particles
        style={{ position: 'absolute', zIndex: 1 }}
        options={{
          background: {
            color: {
              value: '#0d47a1',
            },
          },
          fpsLimit: 30,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'attract',
              },
              onHover: {
                enable: true,
                mode: 'bubble',
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 300,
                easing: 'ease-out-quart',
                factor: 0.4,
                maxSpeed: 1,
              },
              bubble: {
                distance: 200,
                duration: 0.5,
                opacity: 0.6,
                size: 5,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 700,
              },
              value: 50,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 1,
            },
          },
          detectRetina: true,
        }}
      />
      <h1 className={styles.title}>Repositories</h1>
      <SearchInput onChange={handleChange} placeholder='Search for a repository name' />

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
