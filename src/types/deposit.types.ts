export type DepositStatus =
  | 'NORMAL'
  | 'WARNING'
  | 'CRITICAL'
  | 'OFFLINE'

export interface Deposit {
  id: string
  name: string
  waterLevelCm: number
  percentage: number
  liters: number
  status: DepositStatus
  battery: number
  rssi: number
  snr: number
  updatedAt: string
}