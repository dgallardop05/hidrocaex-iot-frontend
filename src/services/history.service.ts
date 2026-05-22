import { apiClient }
from '@/services/api/apiClient'

import { API_ENDPOINTS }
from '@/services/api/endpoints'

import {
  mapHistoryDtoToDomain,
  mapGeneralHistorySeries,
} from '@/mappers/history.mapper'

import type {
  HistoricoDepositoDto,
} from '@/types/dto/history.dto'

import type {
  WaterLevelHistory,
} from '@/types/history.types'

import type {
  GeneralHistorySeries,
} from '@/types/general-history.types'

export const getDepositHistory = async (
  depositId: string,
): Promise<WaterLevelHistory[]> => {
  const response =
    await apiClient.get<
      HistoricoDepositoDto
    >(
      API_ENDPOINTS.depositHistory(
        depositId,
      ),
    )

  return mapHistoryDtoToDomain(
    response.data,
  )
}

export const getGeneralHistory = async (): Promise<
  GeneralHistorySeries[]
> => {
  const response =
    await apiClient.get<
      HistoricoDepositoDto[]
    >(
      API_ENDPOINTS.generalHistory,
    )

  return mapGeneralHistorySeries(
    response.data,
  )
}