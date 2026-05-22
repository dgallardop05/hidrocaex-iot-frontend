import type {
  HistoricoDepositoDto,
} from '@/types/dto/history.dto'

import type {
  WaterLevelHistory,
} from '@/types/history.types'

export const mapHistoryDtoToDomain = (
  dto: HistoricoDepositoDto,
): WaterLevelHistory[] => {
  return dto.puntos.map((point) => ({
    timestamp:
      new Date(
        point.timestamp,
      ).toLocaleTimeString(
        'es-ES',
        {
          hour: '2-digit',
          minute: '2-digit',
        },
      ),

    waterLevelCm:
      point.alturaAguaCm,

    percentage:
      point.porcentaje,

    liters:
      point.litros,
  }))
}