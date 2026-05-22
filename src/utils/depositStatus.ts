import type { DepositStatus } from '@/types/deposit.types'

export const calculateDepositStatus = (
  percentage: number,
): DepositStatus => {
  if (percentage <= 15) {
    return 'CRITICAL'
  }

  if (percentage <= 40) {
    return 'WARNING'
  }

  return 'NORMAL'
}