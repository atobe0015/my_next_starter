import aspida from '@aspida/axios'
import axios from 'axios'
import api from '_types/Requests/$api'

const _axios = axios.create()

_axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)
const fetchConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true
}

export const fetcher = api(aspida(_axios, fetchConfig))
