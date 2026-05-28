import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, TriangleAlert, Activity, } from 'lucide-react';
import styles from './Sidebar.module.css';
const Sidebar = () => {
    return (_jsxs("aside", { className: styles.sidebar, children: [_jsx("div", { className: styles.top, children: _jsxs("div", { className: styles.logoContainer, children: [_jsx("div", { className: styles.logoGlow }), _jsx(Activity, { size: 28, className: styles.logoIcon }), _jsx("h1", { className: styles.logo, children: "HidroCaex IoT" })] }) }), _jsxs("nav", { className: styles.nav, children: [_jsxs(NavLink, { to: "/", className: ({ isActive }) => `${styles.link} ${isActive
                            ? styles.active
                            : ''}`, children: [_jsx(LayoutDashboard, { size: 18 }), _jsx("span", { children: "Dashboard" })] }), _jsxs(NavLink, { to: "/alerts", className: ({ isActive }) => `${styles.link} ${isActive
                            ? styles.active
                            : ''}`, children: [_jsx(TriangleAlert, { size: 18 }), _jsx("span", { children: "Alertas" })] })] })] }));
};
export default Sidebar;
