import {
  useEffect,
  useState,
} from 'react'

import { getGeneralHistory }
from '@/services/history.service'

import type {
  GeneralHistorySeries,
} from '@/types/general-history.types'

export const useGeneralHistory = () => {
  const [history, setHistory] =
    useState<GeneralHistorySeries[]>([])

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const data =
          await getGeneralHistory()

        setHistory(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    void loadHistory()
  }, [])

  return {
    history,
    loading,
  }
}