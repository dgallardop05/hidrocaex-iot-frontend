import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Navbar.module.css';
import { useLastUpdate, } from '@/hooks/useLastUpdate';
import { useNavigate } from 'react-router-dom';
import { Wifi, RefreshCw, Clock3, LogOut, } from 'lucide-react';
const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
    const { lastUpdate, } = useLastUpdate();
    const formattedTime = lastUpdate.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    return (_jsx("header", { className: styles.navbar, children: _jsxs("div", { className: styles.container, children: [_jsx("h1", { className: styles.title, children: "Dep\u00F3sitos Piornal" }), _jsxs("div", { className: styles.status, children: [_jsxs("div", { className: styles.statusItem, children: [_jsx("div", { className: styles.indicator }), _jsx(Wifi, { size: 16 }), _jsx("span", { children: "Gateway Online" })] }), _jsxs("div", { className: styles.statusItem, children: [_jsx(RefreshCw, { size: 15, className: styles.spin }), _jsx("span", { children: "Auto-refresh" })] }), _jsxs("div", { className: styles.statusItem, children: [_jsx(Clock3, { size: 15 }), _jsx("span", { children: formattedTime })] }), _jsxs("button", { onClick: handleLogout, className: styles.logoutButton, children: [_jsx(LogOut, { size: 15 }), _jsx("span", { children: "Cerrar sesi\u00F3n" })] })] })] }) }));
};
export default Navbar;
