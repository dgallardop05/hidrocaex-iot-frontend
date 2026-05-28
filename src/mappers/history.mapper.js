export const mapHistoryDtoToDomain = (dto) => {
    return dto.puntos.map((point) => ({
        timestamp: new Date(point.timestamp).toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
        }),
        waterLevelCm: point.alturaAguaCm,
        percentage: point.porcentaje,
        liters: point.litros,
    }));
};
export const mapGeneralHistoryDtoToDomain = (dtoList) => {
    return dtoList
        .flatMap((deposit) => deposit.puntos)
        .map((point) => ({
        timestamp: new Date(point.timestamp).toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
        }),
        waterLevelCm: point.alturaAguaCm,
        percentage: point.porcentaje,
        liters: point.litros,
    }));
};
export const mapGeneralHistorySeries = (dtoList) => {
    return dtoList.map((deposit) => ({
        depositId: deposit.depositoId,
        name: deposit.nombre,
        points: deposit.puntos.map((point) => ({
            timestamp: new Date(point.timestamp).toLocaleTimeString('es-ES', {
                hour: '2-digit',
                minute: '2-digit',
            }),
            percentage: point.porcentaje,
        })),
    }));
};
