import { useQuery } from 'react-query'
import { request } from '../service/request'

const fetchRepositories = async (params) => {
  const res = await request.get('search/repositories', { params: { q: params } })
  return res.data
}

export const useGetRepositories = (param) => {
  return useQuery(['repositories', param], () => fetchRepositories(param), {
    onError: () => {
      console.log('Could not retrieve feedbacks')
    },
    enabled: !!param,
  })
}
