export type AlertSeverity = 'INFO' | 'WARNING' | 'CRITICAL';
export interface Alert {
    id: string;
    depositId: string;
    title: string;
    description: string;
    severity: AlertSeverity;
    createdAt: string;
}
