import { useEffect, useState } from 'react'

import { mockDeposits } from '@/constants/mockDeposits'
import { calculateDepositStatus } from '@/utils/depositStatus'

import type { Deposit } from '@/types/deposit.types'

const generateUpdatedDeposits = (
  deposits: Deposit[],
): Deposit[] => {
  return deposits.map((deposit) => {
    const variation =
      Math.floor(Math.random() * 5) - 2

    let nextPercentage =
      deposit.percentage + variation

    if (nextPercentage < 0) {
      nextPercentage = 0
    }

    if (nextPercentage > 100) {
      nextPercentage = 100
    }

    return {
      ...deposit,
      percentage: nextPercentage,
      liters: nextPercentage * 400,
      waterLevelCm: nextPercentage * 4,
      status:
        calculateDepositStatus(nextPercentage),
      updatedAt: 'Tiempo real',
    }
  })
}

export const useRealtimeDeposits = () => {
  const [deposits, setDeposits] = useState<Deposit[]>(
    mockDeposits,
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setDeposits((currentDeposits) =>
        generateUpdatedDeposits(
          currentDeposits,
        ),
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return {
    deposits,
  }
}