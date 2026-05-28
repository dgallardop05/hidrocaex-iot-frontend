import {
  useEffect,
  useState,
} from 'react'

import { getDepositById }
from '@/services/deposit.service'

import { getLastMeasurement }
from '@/services/measurement.service'

import type {
  Deposit,
} from '@/types/deposit.types'

export const useDeposit = (
  depositId: string,
) => {
  const [deposit, setDeposit] =
    useState<Deposit | null>(null)

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    if (!depositId) {
      setLoading(false)

      return
    }

    const loadDeposit = async () => {
      try {
        const depositData =
          await getDepositById(
            depositId,
          )

        const measurementData =
          await getLastMeasurement(
            depositId,
          )

        const mergedDeposit = {
          ...(depositData as Deposit),

          deviceEui:
            measurementData.deviceEui,

          deviceName:
            measurementData.deviceName,

          gatewayTime:
            measurementData.gatewayTime,

          radarSignalRssi:
            measurementData.radarSignalRssi,

          position:
            measurementData.position,
        }

        setDeposit(
          mergedDeposit ?? null,
        )
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    void loadDeposit()
  }, [depositId])

  return {
    deposit,
    loading,
  }
}