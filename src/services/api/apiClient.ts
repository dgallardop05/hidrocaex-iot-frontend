import axios from 'axios'

import {
  getServerOfflineStatus,
  setServerOfflineStatus,
} from '@/services/system/serverStatus'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,

  timeout: 10000,

  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  (config) => {
    console.log(
      '[API REQUEST]',
      config.method?.toUpperCase(),
      config.url,
    )

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

apiClient.interceptors.response.use(
  (response) => {
    console.log(
      '[API RESPONSE]',
      response.status,
      response.config.url,
    )

    return response
  },
  (error) => {
    console.error(
      '[API ERROR]',
      error.response?.status,
      error.message,
    )

    const alreadyOffline =
      getServerOfflineStatus()

    if (!alreadyOffline) {
      setServerOfflineStatus(true)

      window.dispatchEvent(
        new Event('api-offline'),
      )
    }

    return Promise.reject(error)
  },
)