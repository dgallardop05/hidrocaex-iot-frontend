import { useEffect, useState, } from 'react';
import { getDepositHistory } from '@/services/history.service';
export const useDepositHistory = (depositId) => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadHistory = async () => {
            if (!depositId) {
                setHistory([]);
                setLoading(false);
                return;
            }
            try {
                const data = await getDepositHistory(depositId);
                setHistory(data);
            }
            catch (error) {
                console.error(error);
                setHistory([]);
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
    }, [depositId]);
    return {
        history,
        loading,
    };
};
