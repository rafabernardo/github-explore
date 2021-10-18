import { useQuery } from 'react-query'
import { request } from '../service/request'

const fetchRepositories = async () => {
  const res = await request.get('orgs/rocketseat/repos')
  return res.data
}

export const useGetRepositories = () =>
  useQuery('repositories', fetchRepositories, {
    onError: () => {
      console.log('Could not retrieve feedbacks')
    },
  })
