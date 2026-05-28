import type { Deposit } from '@/types/deposit.types';
export declare const useDeposit: (depositId: string) => {
    deposit: Deposit | null;
    loading: boolean;
};
