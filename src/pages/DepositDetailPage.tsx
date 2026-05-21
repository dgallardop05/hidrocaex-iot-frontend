import { useParams } from 'react-router-dom'

import { mockDeposits } from '@/constants/mockDeposits'

const DepositDetailPage = () => {
  const { id } = useParams()

  const deposit = mockDeposits.find(
    (item) => item.id === id,
  )

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
              <strong>{deposit.waterLevelCm} cm</strong>
            </div>

            <div className="flex justify-between">
              <span>Porcentaje</span>
              <strong>{deposit.percentage}%</strong>
            </div>

            <div className="flex justify-between">
              <span>Litros</span>
              <strong>
                {deposit.liters.toLocaleString()} L
              </strong>
            </div>

            <div className="flex justify-between">
              <span>Batería</span>
              <strong>{deposit.battery}%</strong>
            </div>

            <div className="flex justify-between">
              <span>RSSI</span>
              <strong>{deposit.rssi}</strong>
            </div>

            <div className="flex justify-between">
              <span>SNR</span>
              <strong>{deposit.snr}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepositDetailPage