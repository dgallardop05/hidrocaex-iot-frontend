import type {
  HistoricoDepositoDto,
} from '@/types/dto/history.dto'

import type {
  WaterLevelHistory,
} from '@/types/history.types'

import type {
  GeneralHistorySeries,
} from '@/types/general-history.types'

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

export const mapGeneralHistoryDtoToDomain = (
  dtoList: HistoricoDepositoDto[],
): WaterLevelHistory[] => {
  return dtoList
    .flatMap((deposit) =>
      deposit.puntos,
    )
    .map((point) => ({
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

export const mapGeneralHistorySeries = (
  dtoList: HistoricoDepositoDto[],
): GeneralHistorySeries[] => {
  return dtoList.map((deposit) => ({
    depositId: deposit.depositoId,

    name: deposit.nombre,

    points: deposit.puntos.map(
      (point) => ({
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

        percentage:
          point.porcentaje,
      }),
    ),
  }))
}