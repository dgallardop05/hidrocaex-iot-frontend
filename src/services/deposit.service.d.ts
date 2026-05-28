import type { Deposit } from '@/types/deposit.types';
export declare const getDeposits: () => Promise<Deposit[]>;
export declare const getDepositById: (id: string) => Promise<Deposit | undefined>;
