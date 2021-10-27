/* eslint-disable import/prefer-default-export */
import axios from 'axios'

export const request = axios.create({
  baseURL: `https://api.github.com/`,
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
})
