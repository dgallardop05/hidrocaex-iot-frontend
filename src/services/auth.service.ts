import { apiClient }
from '@/services/api/apiClient'

import { API_ENDPOINTS }
from '@/services/api/endpoints'

import type {
  LoginRequest,
  LoginResponse,
} from '@/types/auth.types'

export const login = async (
  credentials: LoginRequest,
): Promise<LoginResponse> => {

  const response =
    await apiClient.post<
      LoginResponse
    >(
      API_ENDPOINTS.login,
      credentials,
    )

  return response.data
}