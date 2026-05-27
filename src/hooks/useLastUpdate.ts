import {
  useEffect,
  useState,
} from 'react'

import {
  getLastUpdate,
} from '@/services/system/lastUpdate'

export const useLastUpdate = () => {
  const [lastUpdate, setLastUpdateState] =
    useState(
      getLastUpdate(),
    )

  useEffect(() => {
    const handleUpdate = () => {
      setLastUpdateState(
        getLastUpdate(),
      )
    }

    window.addEventListener(
      'dashboard-update',
      handleUpdate,
    )

    return () => {
      window.removeEventListener(
        'dashboard-update',
        handleUpdate,
      )
    }
  }, [])

  return {
    lastUpdate,
  }
}