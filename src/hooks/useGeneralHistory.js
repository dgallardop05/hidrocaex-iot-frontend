import { useEffect, useState, } from 'react';
import { getGeneralHistory } from '@/services/history.service';
import { setLastUpdate, } from '@/services/system/lastUpdate';
export const useGeneralHistory = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadHistory = async () => {
            try {
                const data = await getGeneralHistory();
                setHistory(data);
                setLastUpdate();
            }
            catch (error) {
                console.error(error);
            }
            finally {
                setLoading(false);
            }
        };
        void loadHistory();
        const interval = setInterval(() => {
            void loadHistory();
        }, 15000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return {
        history,
        loading,
    };
};
