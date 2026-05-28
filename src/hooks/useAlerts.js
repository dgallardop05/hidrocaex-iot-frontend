import { useMemo } from 'react';
import { generateAlerts } from '@/utils/generateAlerts';
export const useAlerts = (deposits) => {
    const alerts = useMemo(() => {
        return generateAlerts(deposits);
    }, [deposits]);
    return {
        alerts,
    };
};
