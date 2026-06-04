import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import DashboardPage from '@/pages/DashboardPage';
import AlertsPage from '@/pages/AlertsPage';
import DepositDetailPage from '@/pages/DepositDetailPage';
import LoginPage from '@/pages/LoginPage';
import ProtectedRoute from '@/router/ProtectedRoute';
const AppRouter = () => {
    const token = localStorage.getItem('token');
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: token
                        ? (_jsx(Navigate, { to: "/", replace: true }))
                        : (_jsx(LoginPage, {})) }), _jsxs(Route, { element: _jsx(ProtectedRoute, { children: _jsx(MainLayout, {}) }), children: [_jsx(Route, { path: "/", element: _jsx(DashboardPage, {}) }), _jsx(Route, { path: "/alerts", element: _jsx(AlertsPage, {}) }), _jsx(Route, { path: "/deposit/:id", element: _jsx(DepositDetailPage, {}) })] })] }) }));
};
export default AppRouter;
