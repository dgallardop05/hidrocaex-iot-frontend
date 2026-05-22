import type { WaterLevelHistory } from '@/types/history.types'

export const mockHistory: Record<
  string,
  WaterLevelHistory[]
> = {
  '1': [
    { time: '08:00', level: 78 },
    { time: '10:00', level: 75 },
    { time: '12:00', level: 73 },
    { time: '14:00', level: 71 },
    { time: '16:00', level: 70 },
  ],

  '2': [
    { time: '08:00', level: 45 },
    { time: '10:00', level: 42 },
    { time: '12:00', level: 38 },
    { time: '14:00', level: 34 },
    { time: '16:00', level: 30 },
  ],

  '3': [
    { time: '08:00', level: 20 },
    { time: '10:00', level: 18 },
    { time: '12:00', level: 15 },
    { time: '14:00', level: 12 },
    { time: '16:00', level: 10 },
  ],
}