import { useEffect, useState } from 'react'

import { getDeposits } from '@/services/deposit.service'

import type { Deposit } from '@/types/deposit.types'

import {
  setLastUpdate,
} from '@/services/system/lastUpdate'

export const useDeposits = () => {
  const [deposits, setDeposits] = useState<
    Deposit[]
  >([])

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    const loadDeposits = async () => {
      try {
        const data =
          await getDeposits()

        setDeposits(data)
        setLastUpdate()
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    void loadDeposits()

    const interval = setInterval(
      () => {
        void loadDeposits()
      },
      15000,
    )

    return () => {
      clearInterval(interval)
    }
  }, [])

  return {
    deposits,
    loading,
  }
}