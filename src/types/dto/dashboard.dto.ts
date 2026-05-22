export interface DashboardDepositDto {
  depositoId: number
  nombre: string

  alturaCm: number

  alturaAguaCm: number | null

  porcentaje: number | null

  litros: number | null

  estado: string | null

  bateria: number | null

  rssi: number | null

  snr: number | null

  timestamp: string | null
}