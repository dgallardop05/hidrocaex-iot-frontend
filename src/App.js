import { jsx as _jsx } from "react/jsx-runtime";
import AppRouter from '@/router/AppRouter';
import ServerOffline from '@/components/system/ServerOffline';
import { useServerStatus, } from '@/hooks/useServerStatus';
function App() {
    const { serverOffline, } = useServerStatus();
    if (serverOffline) {
        return _jsx(ServerOffline, {});
    }
    return _jsx(AppRouter, {});
}
export default App;
