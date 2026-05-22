import { useParams } from 'react-router-dom'

import WaterLevelChart from '@/components/dashboard/WaterLevelChart'

import { useDepositHistory } from '@/hooks/useDepositHistory'

import { useDeposit } from '@/hooks/useDeposit'

const DepositDetailPage = () => {
  const { id } = useParams()

  const {
    deposit,
    loading: depositLoading,
  } = useDeposit(
    id ?? '',
  )

  const {
    history,
    loading: historyLoading,
  } = useDepositHistory(
    id ?? '',
  )

  if (depositLoading) {
    return (
      <div className="text-white">
        Cargando depósito...
      </div>
    )
  }

  if (!deposit) {
    return (
      <div className="text-white">
        Depósito no encontrado
      </div>
    )
  }

  return (
    <div className="
      flex
      flex-col
      gap-6
      w-full
    ">
      <div className="
        flex
        flex-col
        gap-2
      ">
        <h2 className="text-3xl font-bold">
          {deposit.name}
        </h2>

        <p className="text-gray-400">
          Información detallada del depósito
        </p>
      </div>

      <div className="
        flex
        flex-wrap
        gap-6
      ">
        <div className="
          bg-gray-800
          border
          border-gray-700
          rounded-2xl
          p-6
          min-w-[320px]
          flex-1
        ">
          <h3 className="text-xl font-semibold mb-6">
            Estado actual
          </h3>

          <div className="
            flex
            flex-col
            gap-4
          ">
            <div className="flex justify-between">
              <span>Nivel agua</span>

              <strong>
                {deposit.waterLevelCm} cm
              </strong>
            </div>

            <div className="flex justify-between">
              <span>Porcentaje</span>

              <strong>
                {deposit.percentage}%
              </strong>
            </div>

            <div className="flex justify-between">
              <span>Litros</span>

              <strong>
                {(deposit.liters ?? 0)
                  .toLocaleString()} L
              </strong>
            </div>

            <div className="flex justify-between">
              <span>Batería</span>

              <strong>
                {deposit.battery}%
              </strong>
            </div>

            <div className="flex justify-between">
              <span>RSSI</span>

              <strong>
                {deposit.rssi}
              </strong>
            </div>

            <div className="flex justify-between">
              <span>SNR</span>

              <strong>
                {deposit.snr}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {historyLoading ? (
        <div className="text-white">
          Cargando histórico...
        </div>
      ) : (
        <WaterLevelChart
          title="Histórico de nivel"
          data={history}
        />
      )}
    </div>
  )
}

export default DepositDetailPage