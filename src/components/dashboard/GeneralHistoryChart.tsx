import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'

import type {
  GeneralHistorySeries,
} from '@/types/general-history.types'

interface Props {
  data: GeneralHistorySeries[]
}

const colors = [
  '#3b82f6',
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
      bg-gray-800
      border
      border-gray-700
      rounded-2xl
      p-6
      h-[420px]
    ">
      <h3 className="
        text-2xl
        font-semibold
        mb-6
      ">
        Histórico general
      </h3>

      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart data={mergedData}>
          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis dataKey="timestamp" />

          <YAxis domain={[0, 100]} />

          <Tooltip />

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
              />
            ),
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default GeneralHistoryChart