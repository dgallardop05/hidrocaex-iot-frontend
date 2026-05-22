export interface HistoricoPuntoDto {
  timestamp: string

  alturaAguaCm: number

  porcentaje: number

  litros: number

  estado: string

  bateria: number | null

  rssi: number | null

  snr: number | null
}

export interface HistoricoDepositoDto {
  depositoId: number

  nombre: string

  puntos: HistoricoPuntoDto[]
}