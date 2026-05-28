import { useEffect, useState, } from 'react';
import axios from 'axios';
import { setServerOfflineStatus, } from '@/services/system/serverStatus';
const API_BASE_URL = import.meta.env
    .VITE_API_BASE_URL;
export const useServerStatus = () => {
    const [serverOffline, setServerOffline] = useState(false);
    useEffect(() => {
        const handleOffline = () => {
            setServerOffline(true);
        };
        window.addEventListener('api-offline', handleOffline);
        return () => {
            window.removeEventListener('api-offline', handleOffline);
        };
    }, []);
    useEffect(() => {
        if (!serverOffline) {
            return;
        }
        const interval = setInterval(async () => {
            try {
                await axios.get(`${API_BASE_URL}/dashboard`, {
                    timeout: 3000,
                });
                setServerOffline(false);
                setServerOfflineStatus(false);
            }
            catch {
                // Sigue offline
            }
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, [serverOffline]);
    return {
        serverOffline,
    };
};
