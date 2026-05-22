import {
  useEffect,
  useState,
} from 'react'

import { getDepositById }
from '@/services/deposit.service'

import type {
  Deposit,
} from '@/types/deposit.types'

export const useDeposit = (
  depositId: string,
) => {
  const [deposit, setDeposit] =
    useState<Deposit | null>(null)

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    if (!depositId) {
      setLoading(false)

      return
    }

    const loadDeposit = async () => {
      try {
        const data =
          await getDepositById(
            depositId,
          )

        setDeposit(data ?? null)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    void loadDeposit()
  }, [depositId])

  return {
    deposit,
    loading,
  }
}