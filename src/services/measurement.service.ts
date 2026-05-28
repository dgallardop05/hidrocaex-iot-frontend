import { apiClient }
from '@/services/api/apiClient'

export const getLastMeasurement =
  async (
    depositId: string,
  ) => {
    const response =
      await apiClient.get(
        `/mediciones/deposito/${depositId}/ultima`,
      )

    return response.data
  }