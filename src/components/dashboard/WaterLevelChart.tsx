import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

import type { WaterLevelHistory } from '@/types/history.types'

interface Props {
  data: WaterLevelHistory[]
  title: string
}

const WaterLevelChart = ({
  data,
  title,
}: Props) => {
  return (
    <div className="
      bg-gray-800
      rounded-2xl
      p-6
      border
      border-gray-700
      w-full
      h-[320px]
    ">
      <h3 className="text-xl font-semibold mb-6">
        {title}
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="percentage"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default WaterLevelChart