import { useParams } from 'react-router-dom'

import {
  Battery,
  Waves,
  Radio,
  Activity,
} from 'lucide-react'

import WaterLevelChart
from '@/components/dashboard/WaterLevelChart'

import {
  useDepositHistory,
} from '@/hooks/useDepositHistory'

import {
  useDeposit,
} from '@/hooks/useDeposit'

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
      gap-8
      w-full
    ">
      <div className="
        flex
        flex-col
        gap-2
      ">
        <h2 className="
          text-4xl
          font-black
          tracking-tight
        ">
          {deposit.name}
        </h2>

        <p className="
          text-gray-400
          text-lg
        ">
          Monitorización industrial en tiempo real
        </p>
      </div>

      <div className="
        grid
        grid-cols-1
        xl:grid-cols-[380px_1fr]
        gap-6
      ">
        <div className="
          relative

          overflow-hidden

          bg-gradient-to-br
          from-slate-800
          to-slate-900

          border
          border-blue-900/30

          rounded-3xl

          p-8

          shadow-2xl
          shadow-black/30
        ">
          <div className="
            absolute
            top-0
            left-0

            w-full
            h-[2px]

            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-cyan-400
          " />

          <div className="
            flex
            flex-col
            items-center
            gap-8
          ">
            <div className="
              relative

              w-[160px]
              h-[320px]

              rounded-[36px]

              border-[6px]
              border-white/40

              overflow-hidden

              bg-slate-950
            ">
              <div
                className="
                  absolute
                  bottom-0
                  left-0

                  w-full

                  bg-gradient-to-t
                  from-blue-700
                  via-blue-500
                  to-cyan-400

                  transition-all
                  duration-700

                  overflow-hidden

                  shadow-inner
                  shadow-cyan-300/20
                "
                style={{
                  height:
                    `${deposit.percentage}%`,
                }}
              >
                <div className="
                  absolute
                  top-[-12px]
                  left-[-20%]

                  w-[140%]
                  h-[24px]

                  rounded-full

                  bg-white/20

                  animate-pulse
                " />
              </div>
            </div>

            <div className="
              text-center
            ">
              <div className="
                text-6xl
                font-black
                text-white
              ">
                {deposit.percentage
                  .toFixed(1)}%
              </div>

              <div className="
                text-gray-400
                mt-2
              ">
                Nivel actual
              </div>
            </div>
          </div>
        </div>

        <div className="
          flex
          flex-col
          gap-6
        ">
          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          ">
            <div className="
              bg-gradient-to-br
              from-slate-800
              to-slate-900

              border
              border-blue-900/30

              rounded-3xl

              p-6
            ">
              <div className="
                flex
                items-center
                gap-3

                mb-4
              ">
                <Waves
                  size={22}
                  className="
                    text-cyan-400
                  "
                />

                <h3 className="
                  text-lg
                  font-bold
                ">
                  Nivel agua
                </h3>
              </div>

              <div className="
                text-4xl
                font-black
              ">
                {deposit.waterLevelCm
                  .toFixed(1)} cm
              </div>
            </div>

            <div className="
              bg-gradient-to-br
              from-slate-800
              to-slate-900

              border
              border-blue-900/30

              rounded-3xl

              p-6
            ">
              <div className="
                flex
                items-center
                gap-3

                mb-4
              ">
                <Activity
                  size={22}
                  className="
                    text-blue-400
                  "
                />

                <h3 className="
                  text-lg
                  font-bold
                ">
                  Litros
                </h3>
              </div>

              <div className="
                text-4xl
                font-black
              ">
                {(deposit.liters ?? 0)
                  .toLocaleString()} L
              </div>
            </div>

            <div className="
              bg-gradient-to-br
              from-slate-800
              to-slate-900

              border
              border-blue-900/30

              rounded-3xl

              p-6
            ">
              <div className="
                flex
                items-center
                gap-3

                mb-4
              ">
                <Battery
                  size={22}
                  className="
                    text-green-400
                  "
                />

                <h3 className="
                  text-lg
                  font-bold
                ">
                  Batería
                </h3>
              </div>

              <div className="
                text-4xl
                font-black
              ">
                {deposit.battery}%
              </div>
            </div>

            <div className="
              bg-gradient-to-br
              from-slate-800
              to-slate-900

              border
              border-blue-900/30

              rounded-3xl

              p-6
            ">
              <div className="
                flex
                items-center
                gap-3

                mb-4
              ">
                <Radio
                  size={22}
                  className="
                    text-orange-400
                  "
                />

                <h3 className="
                  text-lg
                  font-bold
                ">
                  Señal LoRaWAN
                </h3>
              </div>

              <div className="
                flex
                flex-col
                gap-2
              ">
                <span className="
                  text-xl
                  font-bold
                ">
                  RSSI:
                  {' '}
                  {deposit.rssi} dBm
                </span>

                <span className="
                  text-xl
                  font-bold
                ">
                  SNR:
                  {' '}
                  {deposit.snr} dB
                </span>
              </div>
            </div>
          </div>

          <div>
            {historyLoading ? (
              <div className="
                text-white
              ">
                Cargando histórico...
              </div>
            ) : (
              <WaterLevelChart
                title="Histórico de nivel"
                data={history}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepositDetailPage