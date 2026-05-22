import type { DashboardDepositDto }
from '@/types/dto/dashboard.dto'

import type {
  Deposit,
  DepositStatus,
} from '@/types/deposit.types'

export const mapDepositDtoToDomain = (
  dto: DashboardDepositDto,
): Deposit => {
  return {
    id: dto.depositoId.toString(),

    name: dto.nombre,

    waterLevelCm:
      dto.alturaAguaCm ?? 0,

    percentage:
      dto.porcentaje ?? 0,

    liters:
      dto.litros ?? 0,

    status: dto.estado
      ? (dto.estado as DepositStatus)
      : 'OFFLINE',

    battery:
      dto.bateria ?? 0,

    rssi:
      dto.rssi ?? 0,

    snr:
      dto.snr ?? 0,

    updatedAt:
      dto.timestamp
        ? new Date(
            dto.timestamp,
          ).toLocaleString(
            'es-ES',
            {
              day: '2-digit',
              month: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
            },
          )
        : 'Sin datos',
  }
}