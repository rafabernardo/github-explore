import { useInfiniteQuery } from 'react-query'

import { fetchRepositories } from '../service/request'

const useGetRepositories = (param) => {
  return useInfiniteQuery(['repositories', param], ({ pageParam = 1 }) => fetchRepositories({ param, pageParam }), {
    onError: () => {},
    enabled: !!param,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    getPreviousPageParam: (firstPage) => firstPage.previousPage,
  })
}

export default useGetRepositories
