import type { HistoricoDepositoDto } from '@/types/dto/history.dto';
import type { WaterLevelHistory } from '@/types/history.types';
import type { GeneralHistorySeries } from '@/types/general-history.types';
export declare const mapHistoryDtoToDomain: (dto: HistoricoDepositoDto) => WaterLevelHistory[];
export declare const mapGeneralHistoryDtoToDomain: (dtoList: HistoricoDepositoDto[]) => WaterLevelHistory[];
export declare const mapGeneralHistorySeries: (dtoList: HistoricoDepositoDto[]) => GeneralHistorySeries[];
