export const calculateDepositStatus = (percentage) => {
    if (percentage <= 15) {
        return 'NIVEL_CRITICO';
    }
    if (percentage <= 40) {
        return 'NIVEL_MINIMO';
    }
    return 'NORMAL';
};
