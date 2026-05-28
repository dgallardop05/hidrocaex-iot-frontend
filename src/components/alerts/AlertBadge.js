import { jsx as _jsx } from "react/jsx-runtime";
const AlertBadge = ({ severity, }) => {
    const getStyles = () => {
        switch (severity) {
            case 'INFO':
                return 'bg-blue-600';
            case 'WARNING':
                return 'bg-yellow-600';
            case 'CRITICAL':
                return 'bg-red-700';
        }
    };
    return (_jsx("span", { className: `
      px-3
      py-1
      rounded-full
      text-sm
      font-semibold
      ${getStyles()}
    `, children: severity }));
};
export default AlertBadge;
