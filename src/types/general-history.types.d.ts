export interface GeneralHistorySeries {
    depositId: number;
    name: string;
    points: {
        timestamp: string;
        percentage: number;
    }[];
}
