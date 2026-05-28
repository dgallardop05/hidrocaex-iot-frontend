import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Navbar.module.css';
import { useLastUpdate, } from '@/hooks/useLastUpdate';
import { Wifi, RefreshCw, Clock3, } from 'lucide-react';
const Navbar = () => {
    const { lastUpdate, } = useLastUpdate();
    const formattedTime = lastUpdate.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    return (_jsx("header", { className: styles.navbar, children: _jsxs("div", { className: styles.container, children: [_jsx("h1", { className: styles.title, children: "HidroCaex IoT" }), _jsxs("div", { className: styles.status, children: [_jsxs("div", { className: styles.statusItem, children: [_jsx("div", { className: styles.indicator }), _jsx(Wifi, { size: 16 }), _jsx("span", { children: "Gateway Online" })] }), _jsxs("div", { className: styles.statusItem, children: [_jsx(RefreshCw, { size: 15, className: styles.spin }), _jsx("span", { children: "Auto-refresh" })] }), _jsxs("div", { className: styles.statusItem, children: [_jsx(Clock3, { size: 15 }), _jsx("span", { children: formattedTime })] })] })] }) }));
};
export default Navbar;
