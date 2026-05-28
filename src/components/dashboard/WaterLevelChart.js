import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, } from 'recharts';
const WaterLevelChart = ({ data, title, }) => {
    return (_jsxs("div", { className: "\r\n      bg-gray-800\r\n      rounded-2xl\r\n      p-6\r\n      border\r\n      border-gray-700\r\n      w-full\r\n      h-[320px]\r\n    ", children: [_jsx("h3", { className: "text-xl font-semibold mb-6", children: title }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { data: data, children: [_jsx(XAxis, { dataKey: "timestamp" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Line, { type: "monotone", dataKey: "percentage", stroke: "#2563eb", strokeWidth: 3 })] }) })] }));
};
export default WaterLevelChart;
