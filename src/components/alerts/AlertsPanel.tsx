import AlertBadge from './AlertBadge'

import type { Alert } from '@/types/alert.types'

interface Props {
  alerts: Alert[]
}

const AlertsPanel = ({
  alerts,
}: Props) => {
  return (
    <div className="
      bg-gray-800
      border
      border-gray-700
      rounded-2xl
      p-6
      flex
      flex-col
      gap-4
    ">
      <div className="
        flex
        items-center
        justify-between
      ">
        <h3 className="text-xl font-semibold">
          Alertas activas
        </h3>

        <span className="
          bg-red-700
          text-white
          px-3
          py-1
          rounded-full
          text-sm
          font-bold
        ">
          {alerts.length}
        </span>
      </div>

      {alerts.length === 0 && (
        <div className="text-gray-400">
          No existen alertas activas
        </div>
      )}

      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="
            bg-gray-900
            rounded-xl
            p-4
            flex
            flex-col
            gap-3
          "
        >
          <div className="
            flex
            items-center
            justify-between
            gap-4
            flex-wrap
          ">
            <h4 className="font-semibold">
              {alert.title}
            </h4>

            <AlertBadge
              severity={alert.severity}
            />
          </div>

          <p className="text-gray-300">
            {alert.description}
          </p>

          <span className="text-gray-500 text-sm">
            {alert.createdAt}
          </span>
        </div>
      ))}
    </div>
  )
}

export default AlertsPanel