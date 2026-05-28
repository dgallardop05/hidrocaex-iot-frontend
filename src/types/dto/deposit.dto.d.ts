export interface DepositDto {
    id: number;
    nombre: string;
    deviceEui?: string;
    alturaCm: number;
    largoCm: number;
    anchoCm: number;
    offsetSensorCm: number;
    nivelMinimoCm: number;
    nivelMinimoCriticoCm: number;
    margenMaximoCm: number;
    margenMaximoCriticoCm: number;
}
