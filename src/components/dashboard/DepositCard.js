import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './DepositCard.module.css';
import { Link } from 'react-router-dom';
const DepositCard = ({ deposit }) => {
    const getStatusConfig = () => {
        switch (deposit.status) {
            case 'NORMAL':
                return {
                    className: styles.normal,
                    label: 'NORMAL',
                };
            case 'NIVEL_MINIMO':
                return {
                    className: styles.warning,
                    label: 'NIVEL BAJO',
                };
            case 'NIVEL_CRITICO':
                return {
                    className: styles.critical,
                    label: 'CRÍTICO',
                };
            case 'OFFLINE':
                return {
                    className: styles.offline,
                    label: 'OFFLINE',
                };
            default:
                return {
                    className: styles.offline,
                    label: deposit.status,
                };
        }
    };
    const status = getStatusConfig();
    return (_jsx(Link, { to: `/deposit/${deposit.id}`, className: styles.link, children: _jsxs("article", { className: styles.card, children: [_jsxs("div", { className: styles.header, children: [_jsx("h3", { className: styles.title, children: deposit.name }), _jsx("div", { className: `
            ${styles.status}
            ${status.className}
          `, children: status.label })] }), _jsxs("div", { className: styles.content, children: [_jsx("div", { className: styles.tankContainer, children: _jsx("div", { className: styles.water, style: {
                                    height: `${deposit.percentage}%`,
                                } }) }), _jsxs("div", { className: styles.info, children: [_jsxs("div", { className: styles.metric, children: [_jsx("span", { className: styles.label, children: "Nivel" }), _jsxs("span", { className: styles.value, children: [deposit.waterLevelCm.toFixed(1), " cm"] })] }), _jsxs("div", { className: styles.metric, children: [_jsx("span", { className: styles.label, children: "Porcentaje" }), _jsxs("span", { className: styles.value, children: [deposit.percentage.toFixed(1), "%"] })] }), _jsxs("div", { className: styles.metric, children: [_jsx("span", { className: styles.label, children: "Litros" }), _jsxs("span", { className: styles.value, children: [(deposit.liters ?? 0)
                                                    .toLocaleString(), " L"] })] }), _jsxs("div", { className: styles.metric, children: [_jsx("span", { className: styles.label, children: "Bater\u00EDa" }), _jsxs("span", { className: styles.value, children: [deposit.battery, "%"] })] }), _jsxs("div", { className: styles.metric, children: [_jsx("span", { className: styles.label, children: "\u00DAltima actualizaci\u00F3n" }), _jsx("span", { className: styles.value, children: deposit.updatedAt })] })] })] })] }) }));
};
export default DepositCard;
