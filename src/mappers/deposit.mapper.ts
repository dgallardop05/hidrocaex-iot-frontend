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

    deviceEui:
      dto.deviceEui ?? undefined,

    deviceName:
      dto.deviceName ?? undefined,

    gatewayTime:
      dto.gatewayTime ?? undefined,

    radarSignalRssi:
      dto.radarSignalRssi ?? undefined,

    position:
      dto.position ?? undefined,

    heightCm:
      dto.alturaCm,

    lengthCm: 0,

    widthCm: 0,

    offsetSensorCm: 0,

    minLevelCm: 0,

    criticalMinLevelCm: 0,

    maxMarginCm: 0,

    criticalMaxMarginCm: 0,

    waterLevelCm:
      Number(
        (
          dto.alturaAguaCm ?? 0
        ).toFixed(1),
      ),

    percentage:
      Number(
        (
          dto.porcentaje ?? 0
        ).toFixed(1),
      ),

    liters:
      Math.round(
        dto.litros ?? 0,
      ),

    status: dto.estado
      ? dto.estado as DepositStatus
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