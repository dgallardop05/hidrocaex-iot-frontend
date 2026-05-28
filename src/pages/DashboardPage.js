import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DepositCard from '@/components/dashboard/DepositCard';
import AlertsPanel from '@/components/alerts/AlertsPanel';
import { useDeposits } from '@/hooks/useDeposits';
import { useAlerts } from '@/hooks/useAlerts';
import GeneralHistoryChart from '@/components/dashboard/GeneralHistoryChart';
import { useGeneralHistory, } from '@/hooks/useGeneralHistory';
import KpiCard from '@/components/dashboard/KpiCard';
const DashboardPage = () => {
    const { deposits, loading, } = useDeposits();
    const { history, loading: historyLoading, } = useGeneralHistory();
    const { alerts, } = useAlerts(deposits);
    if (loading) {
        return (_jsx("div", { className: "text-white", children: "Cargando dep\u00F3sitos..." }));
    }
    const onlineDeposits = deposits.filter((deposit) => deposit.status !== 'OFFLINE').length;
    const totalLiters = deposits.reduce((acc, deposit) => acc + deposit.liters, 0);
    const activeAlerts = deposits.filter((deposit) => deposit.status ===
        'NIVEL_MINIMO'
        ||
            deposit.status ===
                'NIVEL_CRITICO').length;
    const lastUpdate = deposits.find((deposit) => deposit.updatedAt !==
        'Sin datos')?.updatedAt ?? '—';
    return (_jsxs("div", { className: "\r\n      flex\r\n      flex-col\r\n      gap-6\r\n      w-full\r\n    ", children: [_jsxs("div", { className: "\r\n        flex\r\n        flex-col\r\n        gap-2\r\n      ", children: [_jsx("h2", { className: "text-3xl font-bold", children: "Dashboard General" }), _jsx("p", { className: "text-gray-400", children: "Monitorizaci\u00F3n de dep\u00F3sitos hidr\u00E1ulicos" })] }), _jsxs("div", { className: "\r\n        flex\r\n        flex-wrap\r\n        gap-6\r\n      ", children: [_jsx(KpiCard, { title: "Sensores online", value: `${onlineDeposits}/${deposits.length}`, subtitle: "Conectados al gateway" }), _jsx(KpiCard, { title: "Litros totales", value: `${totalLiters.toLocaleString()} L`, subtitle: "Capacidad actual" }), _jsx(KpiCard, { title: "Alertas activas", value: activeAlerts.toString(), subtitle: "Dep\u00F3sitos en riesgo" }), _jsx(KpiCard, { title: "\u00DAltima actualizaci\u00F3n", value: lastUpdate, subtitle: "\u00DAltimo uplink recibido" })] }), _jsx(AlertsPanel, { alerts: alerts }), _jsx("div", { className: "\r\n        flex\r\n        flex-wrap\r\n        gap-6\r\n      ", children: deposits.map((deposit) => (_jsx(DepositCard, { deposit: deposit }, deposit.id))) }), _jsxs("div", { className: "\r\n        flex\r\n        flex-col\r\n        gap-4\r\n      ", children: [_jsx("h3", { className: "text-2xl font-semibold", children: "Hist\u00F3rico general" }), historyLoading ? (_jsx("div", { className: "text-white", children: "Cargando hist\u00F3rico..." })) : (_jsx(GeneralHistoryChart, { data: history }))] })] }));
};
export default DashboardPage;
