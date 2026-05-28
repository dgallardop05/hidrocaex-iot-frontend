import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
const MainLayout = () => {
    return (_jsxs("div", { className: "\r\n      min-h-screen\r\n\r\n      bg-gradient-to-br\r\n      from-[#050816]\r\n      via-[#081225]\r\n      to-[#0b1730]\r\n\r\n      text-white\r\n\r\n      flex\r\n      flex-col\r\n      lg:flex-row\r\n\r\n      overflow-hidden\r\n    ", children: [_jsx(Sidebar, {}), _jsxs("div", { className: "\r\n        flex\r\n        flex-col\r\n        flex-1\r\n\r\n        backdrop-blur-sm\r\n      ", children: [_jsx("div", { className: "\r\n        fixed\r\n\r\n        top-[-200px]\r\n        right-[-200px]\r\n\r\n        w-[500px]\r\n        h-[500px]\r\n\r\n        rounded-full\r\n\r\n        bg-blue-500/10\r\n\r\n        blur-3xl\r\n\r\n        pointer-events-none\r\n      " }), _jsx("div", { className: "\r\n        fixed\r\n\r\n        bottom-[-200px]\r\n        left-[-200px]\r\n\r\n        w-[500px]\r\n        h-[500px]\r\n\r\n        rounded-full\r\n\r\n        bg-cyan-500/10\r\n\r\n        blur-3xl\r\n\r\n        pointer-events-none\r\n      " }), _jsx(Navbar, {}), _jsx("main", { className: "\r\n          flex-1\r\n\r\n          p-6\r\n          md:p-8\r\n\r\n          flex\r\n\r\n          overflow-y-auto\r\n        ", children: _jsx(Outlet, {}) })] })] }));
};
export default MainLayout;
