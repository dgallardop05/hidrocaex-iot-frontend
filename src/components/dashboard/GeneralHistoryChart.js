import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend, } from 'recharts';
const colors = [
    '#38bdf8',
    '#22c55e',
    '#eab308',
    '#f97316',
    '#ef4444',
];
const GeneralHistoryChart = ({ data, }) => {
    const mergedData = data[0]?.points.map((_, index) => {
        const point = {
            timestamp: data[0].points[index]
                .timestamp,
        };
        data.forEach((deposit) => {
            point[deposit.name] =
                deposit.points[index]
                    ?.percentage ?? 0;
        });
        return point;
    }) ?? [];
    return (_jsxs("div", { className: "\r\n      relative\r\n\r\n      overflow-hidden\r\n\r\n      bg-gradient-to-br\r\n      from-slate-800\r\n      to-slate-900\r\n\r\n      border\r\n      border-blue-900/30\r\n\r\n      rounded-3xl\r\n\r\n      p-6\r\n\r\n      h-[460px]\r\n\r\n      shadow-2xl\r\n      shadow-black/30\r\n    ", children: [_jsx("div", { className: "\r\n        absolute\r\n        top-0\r\n        left-0\r\n\r\n        w-full\r\n        h-[2px]\r\n\r\n        bg-gradient-to-r\r\n        from-cyan-400\r\n        via-blue-500\r\n        to-cyan-400\r\n      " }), _jsx("div", { className: "\r\n        flex\r\n        items-center\r\n        justify-between\r\n\r\n        mb-6\r\n      ", children: _jsxs("div", { children: [_jsx("h3", { className: "\r\n            text-2xl\r\n            font-bold\r\n            text-white\r\n          ", children: "Hist\u00F3rico general" }), _jsx("p", { className: "\r\n            text-sm\r\n            text-gray-400\r\n            mt-1\r\n          ", children: "Nivel porcentual de dep\u00F3sitos" })] }) }), _jsx(ResponsiveContainer, { width: "100%", height: "85%", children: _jsxs(LineChart, { data: mergedData, children: [_jsx(CartesianGrid, { strokeDasharray: "4 4", stroke: "rgba(255,255,255,0.08)" }), _jsx(XAxis, { dataKey: "timestamp", tick: {
                                fill: '#94a3b8',
                                fontSize: 12,
                            }, tickLine: false, axisLine: false }), _jsx(YAxis, { domain: [0, 100], tick: {
                                fill: '#94a3b8',
                                fontSize: 12,
                            }, tickLine: false, axisLine: false }), _jsx(Tooltip, { contentStyle: {
                                background: 'rgba(15,23,42,0.95)',
                                border: '1px solid rgba(59,130,246,0.3)',
                                borderRadius: '18px',
                                color: 'white',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
                            }, labelStyle: {
                                color: '#cbd5e1',
                                marginBottom: '8px',
                            } }), _jsx(Legend, { wrapperStyle: {
                                color: 'white',
                                paddingTop: '20px',
                            } }), data.map((deposit, index) => (_jsx(Line, { type: "monotone", dataKey: deposit.name, stroke: colors[index %
                                colors.length], strokeWidth: 3, dot: false, activeDot: {
                                r: 6,
                                strokeWidth: 0,
                            }, animationDuration: 1200 }, deposit.depositId)))] }) })] }));
};
export default GeneralHistoryChart;
