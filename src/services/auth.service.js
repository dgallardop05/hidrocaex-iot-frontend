import { apiClient } from '@/services/api/apiClient';
import { API_ENDPOINTS } from '@/services/api/endpoints';
export const login = async (credentials) => {
    const response = await apiClient.post(API_ENDPOINTS.login, credentials);
    return response.data;
};
