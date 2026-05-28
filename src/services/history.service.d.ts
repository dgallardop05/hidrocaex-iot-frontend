import type { WaterLevelHistory } from '@/types/history.types';
import type { GeneralHistorySeries } from '@/types/general-history.types';
export declare const getDepositHistory: (depositId: string) => Promise<WaterLevelHistory[]>;
export declare const getGeneralHistory: () => Promise<GeneralHistorySeries[]>;
