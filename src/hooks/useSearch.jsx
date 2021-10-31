import { useInfiniteQuery } from 'react-query'

import { request } from '../service/request'

const fetchRepositories = async ({ param, pageParam }) => {
  const res = await request.get('search/repositories', {
    params: { q: param, page: pageParam },
  })

  return { data: res.data, nextPage: pageParam + 1, previousPage: pageParam }
}

const useGetRepositories = (param) => {
  return useInfiniteQuery(['repositories', param], ({ pageParam = 1 }) => fetchRepositories({ param, pageParam }), {
    onError: () => {},
    enabled: !!param,
    keepPreviousData: true,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    getPreviousPageParam: (firstPage) => firstPage.previousPage,
  })
}

export default useGetRepositories
