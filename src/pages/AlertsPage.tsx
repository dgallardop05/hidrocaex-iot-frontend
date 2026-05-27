import {
  TriangleAlert,
} from 'lucide-react'

import {
  useDeposits,
} from '@/hooks/useDeposits'

import {
  useAlerts,
} from '@/hooks/useAlerts'

const AlertsPage = () => {
  const {
    deposits,
    loading,
  } = useDeposits()

  const {
    alerts,
  } = useAlerts(deposits)

  if (loading) {
    return (
      <div className="
        text-white
      ">
        Cargando alertas...
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
        items-center
        justify-between
      ">
        <div>
          <h2 className="
            text-4xl
            font-black
            tracking-tight
          ">
            Alertas del sistema
          </h2>

          <p className="
            text-gray-400
            mt-2
          ">
            Monitorización y eventos críticos
          </p>
        </div>

        <div className="
          flex
          items-center
          gap-3

          px-5
          py-3

          rounded-2xl

          bg-red-500/10

          border
          border-red-500/20
        ">
          <TriangleAlert
            className="
              text-red-400
            "
          />

          <span className="
            text-xl
            font-bold
            text-white
          ">
            {alerts.length}
          </span>
        </div>
      </div>

      {alerts.length === 0 ? (
        <div className="
          bg-gradient-to-br
          from-slate-800
          to-slate-900

          rounded-3xl

          p-8

          border
          border-blue-900/30

          text-gray-300
        ">
          No hay alertas activas actualmente.
        </div>
      ) : (
        <div className="
          flex
          flex-col
          gap-4
        ">
          {alerts.map(
            (alert, index) => (
              <div
                key={index}
                className="
                  relative

                  overflow-hidden

                  bg-gradient-to-br
                  from-slate-800
                  to-slate-900

                  border
                  border-red-500/20

                  rounded-3xl

                  p-6

                  shadow-xl
                  shadow-black/20
                "
              >
                <div className="
                  absolute
                  top-0
                  left-0

                  w-full
                  h-[2px]

                  bg-gradient-to-r
                  from-red-500
                  via-orange-400
                  to-red-500
                " />

                <div className="
                  flex
                  items-start
                  justify-between

                  gap-6
                ">
                  <div className="
                    flex
                    flex-col
                    gap-3
                  ">
                    <div className="
                      flex
                      items-center
                      gap-3
                    ">
                      <TriangleAlert
                        className="
                          text-red-400
                        "
                      />

                      <h3 className="
                        text-2xl
                        font-bold
                        text-white
                      ">
                        {alert.title}
                      </h3>
                    </div>

                    <p className="
                      text-gray-300
                      text-lg
                    ">
                      {alert.description}
                    </p>

                    <span className="
                      text-gray-500
                      text-sm
                    ">
                      {alert.createdAt}
                    </span>
                  </div>

                  <div className="
                    px-4
                    py-2

                    rounded-full

                    bg-red-500/15

                    border
                    border-red-500/30

                    text-red-300

                    text-sm
                    font-bold
                    uppercase
                  ">
                    Critical
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  )
}

export default AlertsPage