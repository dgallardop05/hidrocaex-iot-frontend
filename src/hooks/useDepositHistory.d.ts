import type { WaterLevelHistory } from '@/types/history.types';
export declare const useDepositHistory: (depositId: string) => {
    history: WaterLevelHistory[];
    loading: boolean;
};
