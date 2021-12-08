/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import humps from 'humps'

const request = axios.create({
  baseURL: `https://api.github.com/`,
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
})

export const fetchRepositories = async ({ param, pageParam }) => {
  const res = await request.get('search/repositories', {
    params: { q: param, page: pageParam },
  })

  return { data: humps.camelizeKeys(res.data), nextPage: pageParam + 1, previousPage: pageParam }
}
