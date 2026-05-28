export type DepositStatus =
  | 'NORMAL'
  | 'NIVEL_MINIMO'
  | 'NIVEL_CRITICO'
  | 'OFFLINE'

export interface Deposit {
  id: string

  name: string

  deviceEui?: string

  deviceName?: string

  gatewayTime?: string

  radarSignalRssi?: number

  position?: number

  heightCm: number

  widthCm: number

  lengthCm: number

  offsetSensorCm: number

  minLevelCm: number

  criticalMinLevelCm: number

  maxMarginCm: number

  criticalMaxMarginCm: number

  waterLevelCm: number

  percentage: number

  liters: number

  status: DepositStatus

  battery: number

  rssi: number

  snr: number

  updatedAt: string
}