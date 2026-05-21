import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

const data = [
  { time: '08:00', level: 78 },
  { time: '10:00', level: 75 },
  { time: '12:00', level: 73 },
  { time: '14:00', level: 70 },
  { time: '16:00', level: 68 },
]

const WaterLevelChart = () => {
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
        Histórico de nivel
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="level"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default WaterLevelChart