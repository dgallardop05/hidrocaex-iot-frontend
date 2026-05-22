import type { Alert } from '@/types/alert.types'
import type { Deposit } from '@/types/deposit.types'

export const generateAlerts = (
  deposits: Deposit[],
): Alert[] => {
  const alerts: Alert[] = []

  deposits.forEach((deposit) => {
    if (deposit.percentage <= 15) {
      alerts.push({
        id: `${deposit.id}-critical`,
        depositId: deposit.id,
        title: 'Nivel crítico',
        description:
          `${deposit.name} se encuentra en nivel crítico`,
        severity: 'CRITICAL',
        createdAt: 'Ahora',
      })
    } else if (deposit.percentage <= 40) {
      alerts.push({
        id: `${deposit.id}-warning`,
        depositId: deposit.id,
        title: 'Nivel bajo',
        description:
          `${deposit.name} presenta nivel bajo`,
        severity: 'WARNING',
        createdAt: 'Ahora',
      })
    }
  })

  return alerts
}