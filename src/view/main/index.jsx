import { useGetRepositories } from '../../hooks/useSearch'
import RepositoryItem from '../../components/repository-item'
import SearchInput from '../../components/search-input'
import styles from './styles.css'

const Main = () => {
  const { data: repositories, isLoading } = useGetRepositories()
  if (isLoading) {
    return <div>...</div>
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Repositories</h1>
      <SearchInput />
      {repositories?.map((item) => (
        <RepositoryItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Main
