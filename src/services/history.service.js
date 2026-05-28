import { apiClient } from '@/services/api/apiClient';
import { API_ENDPOINTS } from '@/services/api/endpoints';
import { mapHistoryDtoToDomain, mapGeneralHistorySeries, } from '@/mappers/history.mapper';
export const getDepositHistory = async (depositId) => {
    const response = await apiClient.get(API_ENDPOINTS.depositHistory(depositId));
    return mapHistoryDtoToDomain(response.data);
};
export const getGeneralHistory = async () => {
    const response = await apiClient.get(API_ENDPOINTS.generalHistory);
    return mapGeneralHistorySeries(response.data);
};
