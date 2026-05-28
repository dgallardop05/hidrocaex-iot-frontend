import { apiClient } from '@/services/api/apiClient';
import { API_ENDPOINTS } from '@/services/api/endpoints';
import { mapDepositDtoToDomain } from '@/mappers/deposit.mapper';
export const getDeposits = async () => {
    const response = await apiClient.get(API_ENDPOINTS.deposits);
    return response.data.map(mapDepositDtoToDomain);
};
export const getDepositById = async (id) => {
    const deposits = await getDeposits();
    return deposits.find((deposit) => deposit.id === id);
};
