import { useMemo } from 'react'

import { generateAlerts } from '@/utils/generateAlerts'

import type { Deposit } from '@/types/deposit.types'

export const useAlerts = (
  deposits: Deposit[],
) => {
  const alerts = useMemo(() => {
    return generateAlerts(deposits)
  }, [deposits])

  return {
    alerts,
  }
}