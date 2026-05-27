import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts'

import type {
  GeneralHistorySeries,
} from '@/types/general-history.types'

interface Props {
  data: GeneralHistorySeries[]
}

const colors = [
  '#38bdf8',
  '#22c55e',
  '#eab308',
  '#f97316',
  '#ef4444',
]

const GeneralHistoryChart = ({
  data,
}: Props) => {
  const mergedData =
    data[0]?.points.map(
      (_, index) => {
        const point: Record<
          string,
          string | number
        > = {
          timestamp:
            data[0].points[index]
              .timestamp,
        }

        data.forEach(
          (deposit) => {
            point[deposit.name] =
              deposit.points[index]
                ?.percentage ?? 0
          },
        )

        return point
      },
    ) ?? []

  return (
    <div className="
      relative

      overflow-hidden

      bg-gradient-to-br
      from-slate-800
      to-slate-900

      border
      border-blue-900/30

      rounded-3xl

      p-6

      h-[460px]

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
        items-center
        justify-between

        mb-6
      ">
        <div>
          <h3 className="
            text-2xl
            font-bold
            text-white
          ">
            Histórico general
          </h3>

          <p className="
            text-sm
            text-gray-400
            mt-1
          ">
            Nivel porcentual de depósitos
          </p>
        </div>
      </div>

      <ResponsiveContainer
        width="100%"
        height="85%"
      >
        <LineChart data={mergedData}>
          <CartesianGrid
            strokeDasharray="4 4"
            stroke="rgba(255,255,255,0.08)"
          />

          <XAxis
            dataKey="timestamp"
            tick={{
              fill: '#94a3b8',
              fontSize: 12,
            }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            domain={[0, 100]}
            tick={{
              fill: '#94a3b8',
              fontSize: 12,
            }}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              background:
                'rgba(15,23,42,0.95)',

              border:
                '1px solid rgba(59,130,246,0.3)',

              borderRadius: '18px',

              color: 'white',

              backdropFilter:
                'blur(12px)',

              boxShadow:
                '0 10px 30px rgba(0,0,0,0.35)',
            }}

            labelStyle={{
              color: '#cbd5e1',
              marginBottom: '8px',
            }}
          />

          <Legend
            wrapperStyle={{
              color: 'white',
              paddingTop: '20px',
            }}
          />

          {data.map(
            (
              deposit,
              index,
            ) => (
              <Line
                key={deposit.depositId}
                type="monotone"
                dataKey={deposit.name}
                stroke={
                  colors[
                    index %
                    colors.length
                  ]
                }
                strokeWidth={3}

                dot={false}

                activeDot={{
                  r: 6,
                  strokeWidth: 0,
                }}

                animationDuration={1200}
              />
            ),
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default GeneralHistoryChart