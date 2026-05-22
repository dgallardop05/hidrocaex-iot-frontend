import { mockDeposits } from '@/constants/mockDeposits'

import type { Deposit } from '@/types/deposit.types'

import { apiClient } from '@/services/api/apiClient'
import { API_ENDPOINTS } from '@/services/api/endpoints'

import { mapDepositDtoToDomain }
from '@/mappers/deposit.mapper'

import type { DashboardDepositDto }
from '@/types/dto/dashboard.dto'

const USE_MOCKS = false

export const getDeposits = async (): Promise<
  Deposit[]
> => {
  if (USE_MOCKS) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockDeposits)
      }, 500)
    })
  }

  const response =
    await apiClient.get<
      DashboardDepositDto[]
    >(
      API_ENDPOINTS.deposits,
    )

  return response.data.map(
    mapDepositDtoToDomain,
  )
}

export const getDepositById = async (
  id: string,
): Promise<Deposit | undefined> => {
  const deposits =
    await getDeposits()

  return deposits.find(
    (deposit) =>
      deposit.id === id,
  )
}