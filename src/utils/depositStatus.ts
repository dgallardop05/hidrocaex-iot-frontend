import type {
  DepositStatus,
} from '@/types/deposit.types'

export const calculateDepositStatus = (
  percentage: number,
): DepositStatus => {
  if (percentage <= 15) {
    return 'NIVEL_CRITICO'
  }

  if (percentage <= 40) {
    return 'NIVEL_MINIMO'
  }

  return 'NORMAL'
}