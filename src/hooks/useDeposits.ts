import { useEffect, useState } from 'react'

import { getDeposits } from '@/services/deposit.service'

import type { Deposit } from '@/types/deposit.types'

export const useDeposits = () => {
  const [deposits, setDeposits] = useState<
    Deposit[]
  >([])

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    const loadDeposits = async () => {
      try {
        const data = await getDeposits()

        setDeposits(data)
      } finally {
        setLoading(false)
      }
    }

    void loadDeposits()
  }, [])

  return {
    deposits,
    loading,
  }
}